import { vocabularyData } from './data.js';

// Application State
let currentUnitIndex = 0;
let currentStep = 1; // 1 = Grammar Structure, 2 = Real-life Example Sentence
let score = 0;
let streak = 0;
let maxStreak = 0;
let soundEnabled = true;
let isAnsweredCorrectly = false;
let selectedTouchCard = false;
let activeFilter = 'all';

// Audio Synthesizer using Web Audio API (Reliable, Zero 404s, Zero Network latency)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playSuccess() {
    if (!soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 arpeggio

    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);

      gain.gain.setValueAtTime(0, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.35);
    });
  }

  playError() {
    if (!soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now); // A3
    osc.frequency.linearRampToValueAtTime(140, now + 0.25);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  playFanfare() {
    if (!soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25, 880];
    const now = this.ctx.currentTime;
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);
      gain.gain.setValueAtTime(0.2, now + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + 0.4);
    });
  }
}

const sfx = new SoundFX();

// Web Speech Synthesis (Text to Speech)
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel(); // Cancel any ongoing speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.95; // Slightly slower for clear English pronunciation
  
  // Try to find natural English voice
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')))) || voices.find(v => v.lang.startsWith('en'));
  if (enVoice) {
    utterance.voice = enVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

// Lightweight Confetti Generator
function launchConfetti() {
  if (window.confetti) {
    window.confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    // Basic DOM confetti fallback
    createDomConfetti();
  }
}

function createDomConfetti() {
  const container = document.body;
  const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#06b6d4'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.left = (Math.random() * 100) + 'vw';
    el.style.top = '-10px';
    el.style.width = (Math.random() * 10 + 6) + 'px';
    el.style.height = (Math.random() * 10 + 6) + 'px';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    el.style.zIndex = '9999';
    el.style.pointerEvents = 'none';
    el.style.opacity = '1';
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    el.style.transition = 'transform 2.5s ease-out, top 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 2.5s ease';
    
    container.appendChild(el);

    requestAnimationFrame(() => {
      el.style.top = (window.innerHeight + 20) + 'px';
      el.style.transform = `translate3d(${(Math.random() - 0.5) * 200}px, 0, 0) rotate(${Math.random() * 720}deg)`;
      el.style.opacity = '0';
    });

    setTimeout(() => el.remove(), 2600);
  }
}

// Shuffle helper
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Get current question step data
function getCurrentData() {
  const unit = vocabularyData[currentUnitIndex];
  if (!unit) return null;
  return currentStep === 1 ? unit.part1 : unit.part2;
}

// Initialize and Render Practice Screen
function renderPractice() {
  const unit = vocabularyData[currentUnitIndex];
  if (!unit) {
    showCompletionScreen();
    return;
  }

  isAnsweredCorrectly = false;
  selectedTouchCard = false;

  // DOM Elements
  const practiceView = document.getElementById('practice-view');
  const completionView = document.getElementById('completion-view');
  practiceView.style.display = 'block';
  completionView.classList.remove('active');

  // Update Progress
  const totalSubSteps = vocabularyData.length * 2;
  const currentSubStep = currentUnitIndex * 2 + currentStep;
  const progressPercent = Math.round(((currentSubStep - 1) / totalSubSteps) * 100);

  document.getElementById('progress-bar-fill').style.width = `${progressPercent}%`;
  document.getElementById('progress-label').textContent = `Cụm ${currentUnitIndex + 1}/${vocabularyData.length} (Tổng quát: ${currentSubStep}/${totalSubSteps})`;
  document.getElementById('score-val').textContent = score;
  document.getElementById('streak-val').textContent = streak;

  // Stage indicator & Category
  document.getElementById('category-badge').textContent = unit.category;
  document.getElementById('step-badge-text').textContent = currentStep === 1 ? 'Bước 1/2: Nắm Cấu Trúc' : 'Bước 2/2: Thực Hành Câu Mẫu';

  const stepData = getCurrentData();

  // Banner details
  document.getElementById('question-prompt-sub').textContent = stepData.promptVi;
  document.getElementById('question-meaning-text').textContent = stepData.meaningHighlight;

  // Audio button in header
  const headerAudioBtn = document.getElementById('btn-header-audio');
  headerAudioBtn.onclick = () => {
    if (currentStep === 1) {
      speak(`${unit.term}`);
    } else {
      speak(stepData.fullSentence || unit.term);
    }
  };

  const hintNote = document.getElementById('question-hint-note');
  if (currentStep === 1) {
    hintNote.innerHTML = `<span>📌</span> Cụm gốc: <strong>${unit.term}</strong> (${unit.ipa}) - ${unit.meaning}`;
  } else {
    hintNote.innerHTML = `<span>💡</span> Ngữ cảnh thực tế: Hoàn thành câu hoàn chỉnh mang nghĩa: "<em>${stepData.meaningHighlight}</em>"`;
  }

  // Draggable Left Item
  const dragItem = document.getElementById('drag-item');
  dragItem.classList.remove('dragging', 'selected-touch');
  dragItem.draggable = true;
  document.getElementById('drag-item-text').textContent = stepData.leftCard;
  document.getElementById('drag-tip').textContent = 'Kéo thả vào đáp án bên phải, hoặc bấm để chọn';

  // Setup Left Item Drag Events
  dragItem.ondragstart = (e) => {
    if (isAnsweredCorrectly) return;
    dragItem.classList.add('dragging');
    e.dataTransfer.setData('text/plain', stepData.leftCard);
    e.dataTransfer.effectAllowed = 'move';
  };

  dragItem.ondragend = () => {
    dragItem.classList.remove('dragging');
  };

  // Touch / Click to select left item
  dragItem.onclick = () => {
    if (isAnsweredCorrectly) return;
    selectedTouchCard = !selectedTouchCard;
    if (selectedTouchCard) {
      dragItem.classList.add('selected-touch');
      document.getElementById('drag-tip').textContent = '👉 Đã chọn vế trái! Hãy bấm vào 1 đáp án bên phải:';
    } else {
      dragItem.classList.remove('selected-touch');
      document.getElementById('drag-tip').textContent = 'Kéo thả vào đáp án bên phải, hoặc bấm để chọn';
    }
  };

  // Right Column Drop Options
  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = '';

  const shuffledOptions = shuffleArray(stepData.options);
  const letters = ['A', 'B', 'C', 'D'];

  shuffledOptions.forEach((optionText, idx) => {
    const card = document.createElement('div');
    card.className = 'target-drop-card';
    card.setAttribute('data-option', optionText);

    card.innerHTML = `
      <div class="target-badge-letter">${letters[idx]}</div>
      <div class="target-option-text">${optionText}</div>
      <div class="target-status-icon"></div>
    `;

    // Drag-over handlers
    card.ondragover = (e) => {
      e.preventDefault();
      if (isAnsweredCorrectly) return;
      card.classList.add('drag-over');
      e.dataTransfer.dropEffect = 'move';
    };

    card.ondragleave = () => {
      card.classList.remove('drag-over');
    };

    card.ondrop = (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      if (isAnsweredCorrectly) return;
      handleAnswerAttempt(optionText, card);
    };

    // Click/Touch handler (allows tapping directly or tap left then tap right)
    card.onclick = () => {
      if (isAnsweredCorrectly) return;
      handleAnswerAttempt(optionText, card);
    };

    optionsList.appendChild(card);
  });

  // Hide feedback banner
  hideFeedbackBanner();
}

// Handle Answer submission (dragged or clicked)
function handleAnswerAttempt(selectedOption, targetElement) {
  const stepData = getCurrentData();
  const unit = vocabularyData[currentUnitIndex];

  if (selectedOption === stepData.correct) {
    // CORRECT!
    isAnsweredCorrectly = true;
    score += 10;
    streak += 1;
    if (streak > maxStreak) maxStreak = streak;

    // Sound & Confetti
    sfx.playSuccess();
    launchConfetti();

    // Visual styles on target
    targetElement.classList.add('correct');
    targetElement.querySelector('.target-status-icon').textContent = '✅';

    // Auto speak
    if (currentStep === 1) {
      speak(`${stepData.leftCard} ${stepData.correct}`);
    } else {
      speak(stepData.fullSentence);
    }

    // Show celebratory feedback banner
    showFeedbackBanner({
      isCorrect: true,
      unit,
      stepData
    });

  } else {
    // WRONG!
    sfx.playError();
    streak = 0; // reset streak
    targetElement.classList.add('wrong');
    targetElement.querySelector('.target-status-icon').textContent = '❌';

    // Remove wrong class after shake
    setTimeout(() => {
      targetElement.classList.remove('wrong');
    }, 700);

    showFeedbackBanner({
      isCorrect: false,
      unit,
      stepData
    });
  }

  // Update UI stats
  document.getElementById('score-val').textContent = score;
  document.getElementById('streak-val').textContent = streak;
}

// Show feedback banner
function showFeedbackBanner({ isCorrect, unit, stepData }) {
  const banner = document.getElementById('feedback-banner');
  banner.className = `feedback-banner ${isCorrect ? 'show-correct' : 'show-wrong'}`;

  const iconEl = document.getElementById('feedback-icon');
  const headingEl = document.getElementById('feedback-heading');
  const contentBox = document.getElementById('feedback-content-box');
  const actionsEl = document.getElementById('feedback-actions');

  if (isCorrect) {
    iconEl.textContent = '🎉';
    headingEl.textContent = currentStep === 1 ? 'Chính xác! Nắm cấu trúc rất tốt!' : 'Xuất sắc! Bạn đã áp dụng câu mẫu hoàn hảo!';

    let sentenceHtml = '';
    if (currentStep === 1) {
      sentenceHtml = `
        <div class="feedback-sentence-box">
          <div>
            <div class="sentence-eng">${stepData.leftCard} ${stepData.correct}</div>
            <div class="sentence-vi">${unit.meaning}</div>
          </div>
          <button class="btn-icon-toggle" id="btn-speak-result" title="Nghe phát âm">🔊 Nghe</button>
        </div>
      `;
    } else {
      sentenceHtml = `
        <div class="feedback-sentence-box">
          <div>
            <div class="sentence-eng">${stepData.fullSentence}</div>
            <div class="sentence-vi">${stepData.sentenceVi}</div>
          </div>
          <button class="btn-icon-toggle" id="btn-speak-result" title="Nghe phát âm">🔊 Nghe</button>
        </div>
      `;
    }

    contentBox.innerHTML = `
      ${sentenceHtml}
      <div class="feedback-explanation">
        <strong>💡 Giải thích:</strong> ${stepData.explanation}
      </div>
      <div style="margin-top: 6px; font-size: 0.85rem; color: #4b5563;">
        ${unit.note}
      </div>
    `;

    // Speak button
    const speakBtn = document.getElementById('btn-speak-result');
    if (speakBtn) {
      speakBtn.onclick = () => {
        speak(currentStep === 1 ? `${stepData.leftCard} ${stepData.correct}` : stepData.fullSentence);
      };
    }

    const isLastOverall = (currentUnitIndex === vocabularyData.length - 1) && (currentStep === 2);

    actionsEl.innerHTML = `
      <button class="btn-primary" id="btn-next-step">
        ${isLastOverall ? 'Hoàn thành bài tập 🏆' : (currentStep === 1 ? 'Tiếp tục: Sang câu mẫu thực tế ➔' : 'Tiếp tục: Sang cụm tiếp theo ➔')}
      </button>
    `;

    document.getElementById('btn-next-step').onclick = handleNextStep;

  } else {
    // Incorrect feedback
    iconEl.textContent = '🤔';
    headingEl.textContent = 'Chưa chính xác rồi!';

    contentBox.innerHTML = `
      <div class="feedback-explanation" style="color: #991b1b;">
        Hãy đọc kỹ gợi ý tiếng Việt và thử kéo lại đáp án khác nhé! Cụm từ này cần giới từ gì để ghép đúng?
      </div>
    `;

    actionsEl.innerHTML = `
      <button class="btn-secondary" id="btn-retry">Thử lại ngay</button>
    `;

    document.getElementById('btn-retry').onclick = () => {
      hideFeedbackBanner();
      // reset touch selection
      selectedTouchCard = false;
      const dragItem = document.getElementById('drag-item');
      dragItem.classList.remove('selected-touch');
      document.getElementById('drag-tip').textContent = 'Kéo thả vào đáp án bên phải, hoặc bấm để chọn';
    };
  }
}

// Advance to next step or next unit
function handleNextStep() {
  if (currentStep === 1) {
    // Move to step 2 of same unit
    currentStep = 2;
    renderPractice();
  } else {
    // Completed both steps of this unit!
    if (currentUnitIndex < vocabularyData.length - 1) {
      currentUnitIndex++;
      currentStep = 1;
      renderPractice();
    } else {
      // Completed all 16 units!
      showCompletionScreen();
    }
  }
}

function hideFeedbackBanner() {
  const banner = document.getElementById('feedback-banner');
  banner.className = 'feedback-banner';
  banner.style.display = 'none';
}

// Completion Screen
function showCompletionScreen() {
  sfx.playFanfare();
  launchConfetti();
  setTimeout(launchConfetti, 500);

  document.getElementById('practice-view').style.display = 'none';
  const completionView = document.getElementById('completion-view');
  completionView.classList.add('active');

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-streak').textContent = maxStreak;
  document.getElementById('final-total').textContent = `${vocabularyData.length} cụm từ (${vocabularyData.length * 2} bài tập)`;

  // Reset progress bar to 100%
  document.getElementById('progress-bar-fill').style.width = '100%';
  document.getElementById('progress-label').textContent = 'Đã hoàn thành 100%!';
}

// Reset / Play Again
function restartQuiz() {
  currentUnitIndex = 0;
  currentStep = 1;
  score = 0;
  streak = 0;
  renderPractice();
}

// Render Cheat Sheet (Reference view)
function renderReferenceView() {
  const grid = document.getElementById('ref-cards-grid');
  grid.innerHTML = '';

  const filtered = vocabularyData.filter(item => {
    if (activeFilter === 'verbs') return item.category.includes('động từ');
    if (activeFilter === 'adjectives') return item.category.includes('tính từ');
    return true;
  });

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'ref-card';

    card.innerHTML = `
      <div class="ref-card-header">
        <div>
          <div class="ref-card-term">${item.term}</div>
          <div class="ref-card-ipa">${item.ipa}</div>
        </div>
        <button class="btn-audio-inline ref-audio-btn" data-text="${item.part2.fullSentence}" title="Phát âm">🔊</button>
      </div>
      <div class="ref-card-meaning">👉 ${item.meaning}</div>
      <div class="ref-card-example">
        <div class="ref-example-en">"${item.part2.fullSentence}"</div>
        <div class="ref-example-vi">${item.part2.sentenceVi}</div>
      </div>
      <div class="ref-card-note">${item.note}</div>
    `;

    card.querySelector('.ref-audio-btn').onclick = (e) => {
      e.stopPropagation();
      speak(item.part2.fullSentence);
    };

    grid.appendChild(card);
  });
}

// Tab navigation setup
function setupTabs() {
  const tabPractice = document.getElementById('tab-practice');
  const tabReference = document.getElementById('tab-reference');
  const practiceView = document.getElementById('practice-view');
  const referenceView = document.getElementById('reference-view');
  const completionView = document.getElementById('completion-view');

  tabPractice.onclick = () => {
    tabPractice.classList.add('active');
    tabReference.classList.remove('active');
    referenceView.classList.remove('active');
    if (currentUnitIndex >= vocabularyData.length) {
      completionView.classList.add('active');
      practiceView.style.display = 'none';
    } else {
      practiceView.style.display = 'block';
      completionView.classList.remove('active');
    }
  };

  tabReference.onclick = () => {
    tabReference.classList.add('active');
    tabPractice.classList.remove('active');
    practiceView.style.display = 'none';
    completionView.classList.remove('active');
    referenceView.classList.add('active');
    renderReferenceView();
  };

  // Sound toggle button
  const soundBtn = document.getElementById('btn-sound-toggle');
  soundBtn.onclick = () => {
    soundEnabled = !soundEnabled;
    soundBtn.textContent = soundEnabled ? '🔊 Âm thanh: Bật' : '🔇 Âm thanh: Tắt';
  };

  // Filter chips in reference view
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderReferenceView();
    };
  });

  // Replay buttons
  const replayBtn = document.getElementById('btn-replay');
  if (replayBtn) replayBtn.onclick = restartQuiz;

  const restartTopBtn = document.getElementById('btn-restart-top');
  if (restartTopBtn) restartTopBtn.onclick = restartQuiz;

  // Keyboard shortcut: Press Enter or Space to proceed when correct
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const nextBtn = document.getElementById('btn-next-step');
      if (nextBtn && isAnsweredCorrectly) {
        e.preventDefault();
        nextBtn.click();
      }
    }
  });
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  renderPractice();
});
