// Danh sách 16 bài học (32 câu hỏi: 16 Cấu trúc + 16 Câu ví dụ thực tế)
export const practiceUnits = [
  {
    id: 1,
    name: "look forward to",
    step1: {
      promptVi: "Trông mong, mong đợi điều gì",
      left: "look forward",
      correct: "to + V-ing / N",
      options: ["to + V-ing / N", "to + V-bare", "for + V-ing", "at + N"],
      fullEn: "look forward to + V-ing / N"
    },
    step2: {
      promptVi: "Tôi rất trông mong nhận được hồi âm từ bạn",
      left: "I am looking forward",
      correct: "to hearing from you soon",
      options: [
        "to hearing from you soon",
        "to hear from you soon",
        "for hearing from you soon",
        "with hearing from you soon"
      ],
      fullEn: "I am looking forward to hearing from you soon."
    }
  },
  {
    id: 2,
    name: "hear from",
    step1: {
      promptVi: "Nhận được tin tức, liên lạc từ ai đó",
      left: "hear",
      correct: "from + someone",
      options: ["from + someone", "to + someone", "with + someone", "at + someone"],
      fullEn: "hear from + someone"
    },
    step2: {
      promptVi: "Thật tuyệt khi nhận được tin tức từ bạn",
      left: "It is great to hear",
      correct: "from you after so long",
      options: [
        "from you after so long",
        "to you after so long",
        "with you after so long",
        "at you after so long"
      ],
      fullEn: "It is great to hear from you after so long."
    }
  },
  {
    id: 3,
    name: "say hello to",
    step1: {
      promptVi: "Gửi lời chào tới ai đó",
      left: "say hello",
      correct: "to + someone",
      options: ["to + someone", "with + someone", "for + someone", "at + someone"],
      fullEn: "say hello to + someone"
    },
    step2: {
      promptVi: "Hãy gửi lời chào của tôi tới bố mẹ bạn nhé",
      left: "Please say hello",
      correct: "to your parents for me",
      options: [
        "to your parents for me",
        "with your parents for me",
        "for your parents for me",
        "at your parents for me"
      ],
      fullEn: "Please say hello to your parents for me."
    }
  },
  {
    id: 4,
    name: "good at",
    step1: {
      promptVi: "Giỏi về môn gì hoặc việc gì",
      left: "good",
      correct: "at",
      options: ["at", "in", "with", "on"],
      fullEn: "good at"
    },
    step2: {
      promptVi: "Cô ấy rất giỏi giải các bài toán khó",
      left: "She is very good",
      correct: "at solving difficult math problems",
      options: [
        "at solving difficult math problems",
        "in solving difficult math problems",
        "to solve difficult math problems",
        "with solve difficult math problems"
      ],
      fullEn: "She is very good at solving difficult math problems."
    }
  },
  {
    id: 5,
    name: "bad at",
    step1: {
      promptVi: "Dở, kém về việc gì",
      left: "bad",
      correct: "at",
      options: ["at", "about", "for", "in"],
      fullEn: "bad at"
    },
    step2: {
      promptVi: "Tôi rất tệ trong việc nhớ tên người khác",
      left: "I am really bad",
      correct: "at remembering people's names",
      options: [
        "at remembering people's names",
        "in remembering people's names",
        "about remembering people's names",
        "for remember people's names"
      ],
      fullEn: "I am really bad at remembering people's names."
    }
  },
  {
    id: 6,
    name: "useless at",
    step1: {
      promptVi: "Rất tệ, vụng về trong việc gì",
      left: "useless",
      correct: "at",
      options: ["at", "with", "for", "on"],
      fullEn: "useless at"
    },
    step2: {
      promptVi: "Anh ấy hoàn toàn vụng về trong việc nấu nướng",
      left: "He is completely useless",
      correct: "at cooking simple meals",
      options: [
        "at cooking simple meals",
        "in cooking simple meals",
        "with cook simple meals",
        "for cooking simple meals"
      ],
      fullEn: "He is completely useless at cooking simple meals."
    }
  },
  {
    id: 7,
    name: "excited about",
    step1: {
      promptVi: "Hào hứng, phấn khích về điều gì",
      left: "excited",
      correct: "about",
      options: ["about", "for", "with", "at"],
      fullEn: "excited about"
    },
    step2: {
      promptVi: "Bọn trẻ rất hào hứng về chuyến dã ngoại sắp tới",
      left: "The kids are so excited",
      correct: "about the upcoming camping trip",
      options: [
        "about the upcoming camping trip",
        "with the upcoming camping trip",
        "for the upcoming camping trip",
        "at the upcoming camping trip"
      ],
      fullEn: "The kids are so excited about the upcoming camping trip."
    }
  },
  {
    id: 8,
    name: "crazy about",
    step1: {
      promptVi: "Cuồng, rất mê cái gì",
      left: "crazy",
      correct: "about",
      options: ["about", "on", "with", "at"],
      fullEn: "crazy about"
    },
    step2: {
      promptVi: "Em trai tôi rất mê chơi trò chơi điện tử",
      left: "My brother is crazy",
      correct: "about playing video games",
      options: [
        "about playing video games",
        "at playing video games",
        "on playing video games",
        "with play video games"
      ],
      fullEn: "My brother is crazy about playing video games."
    }
  },
  {
    id: 9,
    name: "mad about",
    step1: {
      promptVi: "Say mê, cuồng nhiệt vì cái gì",
      left: "mad",
      correct: "about",
      options: ["about", "in", "to", "at"],
      fullEn: "mad about"
    },
    step2: {
      promptVi: "Cô ấy say mê âm nhạc cổ điển từ thuở bé",
      left: "She is mad",
      correct: "about classical music since childhood",
      options: [
        "about classical music since childhood",
        "for classical music since childhood",
        "with classical music since childhood",
        "at classical music since childhood"
      ],
      fullEn: "She is mad about classical music since childhood."
    }
  },
  {
    id: 10,
    name: "serious about",
    step1: {
      promptVi: "Nghiêm túc về điều gì hoặc việc làm gì",
      left: "serious",
      correct: "about",
      options: ["about", "with", "for", "at"],
      fullEn: "serious about"
    },
    step2: {
      promptVi: "Bạn có thực sự nghiêm túc về việc học ngoại ngữ mới?",
      left: "Are you really serious",
      correct: "about learning a new language?",
      options: [
        "about learning a new language?",
        "with learning a new language?",
        "for learning a new language?",
        "at learning a new language?"
      ],
      fullEn: "Are you really serious about learning a new language?"
    }
  },
  {
    id: 11,
    name: "worried about",
    step1: {
      promptVi: "Lo lắng về điều gì",
      left: "worried",
      correct: "about",
      options: ["about", "with", "for", "at"],
      fullEn: "worried about"
    },
    step2: {
      promptVi: "Mẹ tôi lúc nào cũng lo lắng về sức khỏe của tôi",
      left: "My mother is always worried",
      correct: "about my health and diet",
      options: [
        "about my health and diet",
        "with my health and diet",
        "for my health and diet",
        "at my health and diet"
      ],
      fullEn: "My mother is always worried about my health and diet."
    }
  },
  {
    id: 12,
    name: "disappointed with / about",
    step1: {
      promptVi: "Thất vọng với hoặc về ai, cái gì",
      left: "disappointed",
      correct: "with / about",
      options: ["with / about", "at / for", "to / in", "from / of"],
      fullEn: "disappointed with / about"
    },
    step2: {
      promptVi: "Chúng tôi rất thất vọng về kết quả trận đấu",
      left: "We were very disappointed",
      correct: "with the match result yesterday",
      options: [
        "with the match result yesterday",
        "from the match result yesterday",
        "for the match result yesterday",
        "to the match result yesterday"
      ],
      fullEn: "We were very disappointed with the match result yesterday."
    }
  },
  {
    id: 13,
    name: "keen on",
    step1: {
      promptVi: "Thích thú, hào hứng với cái gì",
      left: "keen",
      correct: "on",
      options: ["on", "in", "at", "about"],
      fullEn: "keen on"
    },
    step2: {
      promptVi: "Tôi không hào hứng lắm với việc thức dậy sớm vào mùa đông",
      left: "I am not keen",
      correct: "on waking up early in winter",
      options: [
        "on waking up early in winter",
        "in waking up early in winter",
        "at waking up early in winter",
        "about waking up early in winter"
      ],
      fullEn: "I am not keen on waking up early in winter."
    }
  },
  {
    id: 14,
    name: "involved in",
    step1: {
      promptVi: "Tham gia vào việc gì, tổ chức nào",
      left: "involved",
      correct: "in",
      options: ["in", "with", "on", "at"],
      fullEn: "involved in"
    },
    step2: {
      promptVi: "Nhiều sinh viên đã tham gia vào dự án từ thiện này",
      left: "Many students got involved",
      correct: "in this charity project",
      options: [
        "in this charity project",
        "with this charity project",
        "on this charity project",
        "at this charity project"
      ],
      fullEn: "Many students got involved in this charity project."
    }
  },
  {
    id: 15,
    name: "obsessed with",
    step1: {
      promptVi: "Bị ám ảnh, quá mê mẩn cái gì",
      left: "obsessed",
      correct: "with",
      options: ["with", "about", "by", "in"],
      fullEn: "obsessed with"
    },
    step2: {
      promptVi: "Anh ấy dường như bị ám ảnh bởi sự hoàn hảo",
      left: "He seems obsessed",
      correct: "with perfection these days",
      options: [
        "with perfection these days",
        "about perfection these days",
        "by perfection these days",
        "in perfection these days"
      ],
      fullEn: "He seems obsessed with perfection these days."
    }
  },
  {
    id: 16,
    name: "afraid of",
    step1: {
      promptVi: "Sợ hãi cái gì",
      left: "afraid",
      correct: "of",
      options: ["of", "with", "to", "for"],
      fullEn: "afraid of"
    },
    step2: {
      promptVi: "Đừng sợ mắc sai lầm khi bạn đang học",
      left: "Do not be afraid",
      correct: "of making mistakes when learning",
      options: [
        "of making mistakes when learning",
        "with making mistakes when learning",
        "to making mistakes when learning",
        "for making mistakes when learning"
      ],
      fullEn: "Do not be afraid of making mistakes when learning."
    }
  }
];

// Trích xuất toàn bộ ngân hàng câu hỏi độc lập cho Phần Kiểm Tra (32 câu)
export const allQuestionsBank = practiceUnits.flatMap(unit => [
  {
    unitId: unit.id,
    type: "Cấu trúc",
    promptVi: unit.step1.promptVi,
    left: unit.step1.left,
    correct: unit.step1.correct,
    options: unit.step1.options,
    fullEn: unit.step1.fullEn
  },
  {
    unitId: unit.id,
    type: "Ví dụ mẫu",
    promptVi: unit.step2.promptVi,
    left: unit.step2.left,
    correct: unit.step2.correct,
    options: unit.step2.options,
    fullEn: unit.step2.fullEn
  }
]);
