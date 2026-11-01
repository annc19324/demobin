import { practiceUnits, allQuestionsBank } from './data.js';

// Application State
let currentMode = 'review'; // 'review' | 'test'
let soundEnabled = true;

// Review Mode State
let reviewUnitIndex = 0;
let reviewStep = 1; // 1: Cấu trúc, 2: Câu mẫu
let reviewAnsweredCorrect = false;

// Test Mode State
let testQuestions = [];
let testIndex = 0;
let testCorrectCount = 0;
let testAnswered = false;

// Selected state for tap-to-match
let isSourceSelected = false;

// Web Audio API Synthesizer
class SimpleAudio {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }
  playCorrect() {
    if (!soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.25);
    });
  }
  playWrong() {
    if (!soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.linearRampToValueAtTime(140, now + 0.2);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }
}
const audio = new SimpleAudio();

function speak(text) {
  if (!('speechSynthesis' in window) || !soundEnabled) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US';
  utt.rate = 0.95;
  window.speechSynthesis.speak(utt);
}

// Helper: Shuffle array
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Khởi tạo bài kiểm tra ngẫu nhiên 10 câu
function startNewTest() {
  const shuffledBank = shuffle(allQuestionsBank);
  testQuestions = shuffledBank.slice(0, 10);
  testIndex = 0;
  testCorrectCount = 0;
  testAnswered = false;

  document.getElementById('quiz-container').classList.remove('hidden');
  document.getElementById('test-result-container').classList.add('hidden');
  renderCurrentQuestion();
}

// Lấy dữ liệu câu hỏi hiện tại theo mode
function getCurrentQuestion() {
  if (currentMode === 'review') {
    const unit = practiceUnits[reviewUnitIndex];
    if (!unit) return null;
    const stepData = reviewStep === 1 ? unit.step1 : unit.step2;
    return {
      badge: `Phần Ôn: Bài ${reviewUnitIndex + 1}/${practiceUnits.length}`,
      stepInfo: reviewStep === 1 ? 'Bước 1: Cấu trúc' : 'Bước 2: Câu mẫu thực tế',
      promptVi: stepData.promptVi,
      left: stepData.left,
      correct: stepData.correct,
      options: stepData.options,
      fullEn: stepData.fullEn
    };
  } else {
    // Mode Test
    const q = testQuestions[testIndex];
    if (!q) return null;
    return {
      badge: `Kiểm Tra: Câu ${testIndex + 1}/${testQuestions.length}`,
      stepInfo: `Dạng: ${q.type}`,
      promptVi: q.promptVi,
      left: q.left,
      correct: q.correct,
      options: q.options,
      fullEn: q.fullEn
    };
  }
}

// Render câu hỏi lên giao diện
function renderCurrentQuestion() {
  const q = getCurrentQuestion();
  if (!q) {
    if (currentMode === 'test') {
      showTestResult();
    } else {
      // Hoàn thành 16 bài ôn tập -> chuyển lại bài 1
      reviewUnitIndex = 0;
      reviewStep = 1;
      renderCurrentQuestion();
    }
    return;
  }

  reviewAnsweredCorrect = false;
  testAnswered = false;
  isSourceSelected = false;

  // Header info
  document.getElementById('quiz-badge').textContent = q.badge;
  document.getElementById('quiz-step-info').textContent = q.stepInfo;
  document.getElementById('prompt-vi').textContent = q.promptVi;

  // Source draggable card
  const sourceCard = document.getElementById('drag-source');
  const sourceText = document.getElementById('source-text');
  sourceText.textContent = q.left;
  sourceCard.classList.remove('dragging', 'selected-tap');

  // Clear feedback bar
  const feedbackBar = document.getElementById('feedback-bar');
  feedbackBar.className = 'feedback-bar';
  feedbackBar.innerHTML = `<span id="feedback-msg"></span><button id="btn-next-action" class="btn-next hidden">Tiếp tục ➔</button>`;

  // Render 4 options
  const optionsGrid = document.getElementById('options-grid');
  optionsGrid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  const shuffledOptions = shuffle(q.options);

  shuffledOptions.forEach((optText, idx) => {
    const btn = document.createElement('div');
    btn.className = 'option-btn';
    btn.setAttribute('data-option', optText);
    btn.innerHTML = `
      <span class="opt-letter">${letters[idx]}</span>
      <span class="opt-text">${optText}</span>
    `;

    // Drag-drop events
    btn.ondragover = (e) => {
      e.preventDefault();
      btn.classList.add('drag-hover');
    };
    btn.ondragleave = () => {
      btn.classList.remove('drag-hover');
    };
    btn.ondrop = (e) => {
      e.preventDefault();
      btn.classList.remove('drag-hover');
      handleUserChoice(optText, btn);
    };

    // Click/Tap event
    btn.onclick = () => {
      handleUserChoice(optText, btn);
    };

    optionsGrid.appendChild(btn);
  });

  // Source Drag events
  sourceCard.ondragstart = (e) => {
    sourceCard.classList.add('dragging');
    e.dataTransfer.setData('text/plain', q.left);
  };
  sourceCard.ondragend = () => {
    sourceCard.classList.remove('dragging');
  };

  // Source Tap to select
  sourceCard.onclick = () => {
    isSourceSelected = !isSourceSelected;
    if (isSourceSelected) {
      sourceCard.classList.add('selected-tap');
    } else {
      sourceCard.classList.remove('selected-tap');
    }
  };
}

// Xử lý khi người dùng chọn đáp án (kéo hoặc click)
function handleUserChoice(selectedText, targetElement) {
  const q = getCurrentQuestion();
  if (!q) return;

  const isCorrect = selectedText === q.correct;

  // PHẦN ÔN (REVIEW MODE): Đúng mới được qua câu tiếp theo
  if (currentMode === 'review') {
    if (reviewAnsweredCorrect) return; // Đã trả lời đúng rồi

    if (isCorrect) {
      reviewAnsweredCorrect = true;
      audio.playCorrect();
      targetElement.classList.add('correct');
      speak(q.fullEn);

      const feedbackBar = document.getElementById('feedback-bar');
      feedbackBar.className = 'feedback-bar correct';
      feedbackBar.innerHTML = `
        <span>✅ Chính xác: <strong>${q.fullEn}</strong></span>
        <button id="btn-next-action" class="btn-next">Tiếp tục ➔</button>
      `;

      document.getElementById('btn-next-action').onclick = goToNextReviewStep;
    } else {
      // Sai: Báo sai, giữ nguyên câu hỏi để người dùng làm lại
      audio.playWrong();
      targetElement.classList.add('wrong');
      setTimeout(() => targetElement.classList.remove('wrong'), 500);

      const feedbackBar = document.getElementById('feedback-bar');
      feedbackBar.className = 'feedback-bar wrong';
      feedbackBar.innerHTML = `<span>❌ Chưa đúng! Hãy thử chọn lại đáp án khác.</span>`;
    }
  }

  // PHẦN KIỂM TRA (TEST MODE): Sai hay đúng vẫn chuyển sang câu tiếp theo
  else if (currentMode === 'test') {
    if (testAnswered) return;
    testAnswered = true;

    if (isCorrect) {
      testCorrectCount++;
      audio.playCorrect();
      targetElement.classList.add('correct');
    } else {
      audio.playWrong();
      targetElement.classList.add('wrong');
    }

    // Tự động chuyển sang câu tiếp theo sau 0.45s
    setTimeout(() => {
      testIndex++;
      if (testIndex < testQuestions.length) {
        renderCurrentQuestion();
      } else {
        showTestResult();
      }
    }, 450);
  }
}

// Chuyển sang bước tiếp theo trong Phần Ôn
function goToNextReviewStep() {
  if (reviewStep === 1) {
    reviewStep = 2; // Sang câu mẫu của bài hiện tại
  } else {
    reviewStep = 1;
    if (reviewUnitIndex < practiceUnits.length - 1) {
      reviewUnitIndex++; // Sang bài tiếp theo
    } else {
      // Đã ôn hết 16 bài
      alert('🎉 Chúc mừng bạn đã hoàn thành ôn tập tất cả 16 bài! Hãy chuyển sang Phần Kiểm Tra để thử sức nhé.');
      reviewUnitIndex = 0;
    }
  }
  renderCurrentQuestion();
}

// Hiển thị màn hình kết quả thang điểm 10
function showTestResult() {
  document.getElementById('quiz-container').classList.add('hidden');
  const resultCard = document.getElementById('test-result-container');
  resultCard.classList.remove('hidden');

  // Tính điểm thang điểm 10 (10 câu = 10 điểm)
  const score10 = ((testCorrectCount / testQuestions.length) * 10).toFixed(1);
  document.getElementById('final-score-10').textContent = score10;
  document.getElementById('final-detail-text').textContent = `Đúng ${testCorrectCount} / ${testQuestions.length} câu`;

  const commentEl = document.getElementById('score-comment');
  const numScore = parseFloat(score10);
  if (numScore === 10) {
    commentEl.textContent = '🌟 Xuất sắc tuyệt đối 10/10! Bạn đã ghi nhớ toàn bộ từ vựng và câu mẫu.';
  } else if (numScore >= 8) {
    commentEl.textContent = '👏 Rất tốt! Bạn nắm kiến thức rất vững vàng.';
  } else if (numScore >= 5) {
    commentEl.textContent = '👍 Khá ổn! Bạn có thể ôn lại phần còn sai để cải thiện điểm số.';
  } else {
    commentEl.textContent = '💡 Cần cố gắng hơn! Hãy quay lại "Phần Ôn" để luyện kỹ các câu nhé.';
  }
}

// Thiết lập chuyển đổi tab & sự kiện
function setupEvents() {
  const tabReview = document.getElementById('tab-review');
  const tabTest = document.getElementById('tab-test');
  const soundToggle = document.getElementById('sound-toggle');

  tabReview.onclick = () => {
    if (currentMode === 'review') return;
    currentMode = 'review';
    tabReview.classList.add('active');
    tabTest.classList.remove('active');
    document.getElementById('test-result-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    renderCurrentQuestion();
  };

  tabTest.onclick = () => {
    if (currentMode === 'test' && !document.getElementById('test-result-container').classList.contains('hidden')) {
      return;
    }
    currentMode = 'test';
    tabTest.classList.add('active');
    tabReview.classList.remove('active');
    startNewTest();
  };

  soundToggle.onclick = () => {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
  };

  document.getElementById('btn-restart-test').onclick = () => {
    startNewTest();
  };

  document.getElementById('btn-switch-to-review').onclick = () => {
    tabReview.click();
  };

  // Keyboard Enter shortcut để qua câu khi đúng ở phần ôn
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const nextBtn = document.getElementById('btn-next-action');
      if (nextBtn && !nextBtn.classList.contains('hidden')) {
        nextBtn.click();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupEvents();
  renderCurrentQuestion();
});
