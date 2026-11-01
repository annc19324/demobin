// Bộ dữ liệu 16 cụm từ & tính từ đi với giới từ Tiếng Anh
// Mỗi mục gồm 2 bước: Bước 1 (Cấu trúc) & Bước 2 (Câu ví dụ thực tế)
export const vocabularyData = [
  {
    id: 1,
    category: "Cụm động từ thông dụng",
    term: "look forward to + V-ing/N",
    meaning: "trông mong, mong đợi điều gì",
    ipa: "/lʊk ˈfɔːwəd tuː/",
    note: "⚠️ Lưu ý quan trọng: 'to' ở đây là giới từ, do đó theo sau PHẢI là V-ing hoặc Danh từ (N), tuyệt đối KHÔNG dùng V nguyên thể!",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ và dạng động từ đúng đi với:",
      meaningHighlight: "Trông mong, mong đợi điều gì",
      leftCard: "look forward",
      correct: "to + V-ing / N",
      options: [
        "to + V-ing / N",
        "to + V-bare (nguyên mẫu)",
        "for + V-ing",
        "at + Noun"
      ],
      explanation: "Công thức chuẩn là: look forward to + V-ing / N (Trông mong điều gì)."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép nửa câu đúng để hoàn thành câu:",
      meaningHighlight: "Tôi rất trông mong nhận được hồi âm từ bạn",
      leftCard: "I am really looking forward",
      correct: "to hearing from you soon",
      options: [
        "to hearing from you soon",
        "to hear from you soon",
        "for hearing from you soon",
        "with hearing from you soon"
      ],
      fullSentence: "I am really looking forward to hearing from you soon.",
      sentenceVi: "Tôi thực sự rất mong sớm nhận được tin tức hồi âm từ bạn.",
      explanation: "Sau 'looking forward to' bắt buộc phải là V-ing ('hearing'), không dùng 'to hear'!"
    }
  },
  {
    id: 2,
    category: "Cụm động từ thông dụng",
    term: "hear from + someone",
    meaning: "nhận được tin tức, liên lạc từ ai đó",
    ipa: "/hɪər frəm/",
    note: "💡 Phân biệt: 'hear from someone' = nhận thư/tin nhắn/cuộc gọi từ ai; khác với 'hear of / hear about' = nghe nói, biết đến sự tồn tại của ai/cái gì.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đúng đi với động từ:",
      meaningHighlight: "Nhận được tin tức, liên lạc từ ai đó",
      leftCard: "hear",
      correct: "from + someone",
      options: [
        "from + someone",
        "to + someone",
        "with + someone",
        "at + someone"
      ],
      explanation: "'Hear from someone' nghĩa là nhận được thư, tin nhắn, cuộc gọi từ ai."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép vế tiếp theo cho câu:",
      meaningHighlight: "Thật tuyệt vời khi nhận được tin tức từ bạn sau bao năm",
      leftCard: "It is wonderful to hear",
      correct: "from you after so many years",
      options: [
        "from you after so many years",
        "to you after so many years",
        "with you after so many years",
        "at you after so many years"
      ],
      fullSentence: "It is wonderful to hear from you after so many years.",
      sentenceVi: "Thật tuyệt vời khi nhận được tin tức từ bạn sau ngần ấy năm.",
      explanation: "Cụm chuẩn: 'hear from you' (nhận được tin từ bạn)."
    }
  },
  {
    id: 3,
    category: "Cụm động từ thông dụng",
    term: "say hello to + someone",
    meaning: "gửi lời chào tới ai đó",
    ipa: "/seɪ həˈləʊ tuː/",
    note: "💡 'Say hello to someone for me' là câu cửa miệng rất lịch sự khi nhờ ai đó chuyển lời chào.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đúng cho cụm từ:",
      meaningHighlight: "Gửi lời chào tới ai đó",
      leftCard: "say hello",
      correct: "to + someone",
      options: [
        "to + someone",
        "with + someone",
        "for + someone",
        "at + someone"
      ],
      explanation: "'Say hello to someone' = gửi lời chào tới ai."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép phần còn lại của câu nhờ gửi lời chào:",
      meaningHighlight: "Hãy gửi lời chào của tôi tới bố mẹ bạn nhé!",
      leftCard: "Please say hello",
      correct: "to your parents for me",
      options: [
        "to your parents for me",
        "with your parents for me",
        "at your parents for me",
        "for your parents for me"
      ],
      fullSentence: "Please say hello to your parents for me.",
      sentenceVi: "Làm ơn gửi lời chào của tôi tới bố mẹ bạn nhé.",
      explanation: "'Say hello to your parents' mang nghĩa gửi lời chào tới cha mẹ bạn."
    }
  },
  {
    id: 4,
    category: "Cụm tính từ đi với giới từ",
    term: "good at",
    meaning: "giỏi về môn gì hoặc việc gì",
    ipa: "/ɡʊd æt/",
    note: "💡 Cấu trúc: be good at + Noun / V-ing (giỏi làm việc gì).",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đi kèm với tính từ 'good':",
      meaningHighlight: "Giỏi về môn gì hoặc việc gì",
      leftCard: "good",
      correct: "at + N / V-ing",
      options: [
        "at + N / V-ing",
        "in + N / V-ing",
        "with + N / V-ing",
        "on + N / V-ing"
      ],
      explanation: "'Good at' là cụm cố định chỉ sở trường, năng khiếu làm việc gì."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép cụm từ đúng để khen ngợi khả năng toán học:",
      meaningHighlight: "Cô ấy cực kỳ giỏi giải các bài toán khó",
      leftCard: "She is extremely good",
      correct: "at solving difficult math problems",
      options: [
        "at solving difficult math problems",
        "in solving difficult math problems",
        "to solve difficult math problems",
        "with solve difficult math problems"
      ],
      fullSentence: "She is extremely good at solving difficult math problems.",
      sentenceVi: "Cô ấy cực kỳ giỏi việc giải quyết các bài toán hóc búa.",
      explanation: "Ta dùng 'good at' + V-ing ('solving')."
    }
  },
  {
    id: 5,
    category: "Cụm tính từ đi với giới từ",
    term: "bad at",
    meaning: "dở, kém về việc gì",
    ipa: "/bæd æt/",
    note: "💡 Ngược nghĩa với 'good at'. Cấu trúc: be bad at + N / V-ing.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đúng đi với tính từ 'bad':",
      meaningHighlight: "Dở, kém về việc gì",
      leftCard: "bad",
      correct: "at + N / V-ing",
      options: [
        "at + N / V-ing",
        "about + N / V-ing",
        "for + N / V-ing",
        "in + N / V-ing"
      ],
      explanation: "'Bad at' là cụm cố định biểu đạt sự dở, kém cỏi trong lĩnh vực nào đó."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép vế tiếp theo cho câu thừa nhận điểm yếu:",
      meaningHighlight: "Tôi rất tệ trong việc nhớ tên người khác",
      leftCard: "I have always been bad",
      correct: "at remembering people's names",
      options: [
        "at remembering people's names",
        "in remembering people's names",
        "about remember people's names",
        "for remembering people's names"
      ],
      fullSentence: "I have always been bad at remembering people's names.",
      sentenceVi: "Tôi lúc nào cũng rất tệ trong việc ghi nhớ tên của người khác.",
      explanation: "Dùng 'bad at' + V-ing ('remembering')."
    }
  },
  {
    id: 6,
    category: "Cụm tính từ đi với giới từ",
    term: "useless at",
    meaning: "rất tệ, vụng về trong việc gì",
    ipa: "/ˈjuːsləs æt/",
    note: "💡 'Useless at' nhấn mạnh mức độ kém cỏi, vô dụng, hoàn toàn không có kỹ năng ở việc gì.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đúng cho tính từ 'useless':",
      meaningHighlight: "Rất tệ, vụng về trong việc gì",
      leftCard: "useless",
      correct: "at + N / V-ing",
      options: [
        "at + N / V-ing",
        "with + N / V-ing",
        "for + N / V-ing",
        "on + N / V-ing"
      ],
      explanation: "'Useless at' dùng giới từ 'at' tương tự như 'good at' và 'bad at'."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Hoàn thiện câu miêu tả sự vụng về nội trợ:",
      meaningHighlight: "Anh ấy hoàn toàn vụng về trong chuyện nấu nướng",
      leftCard: "He is completely useless",
      correct: "at cooking even simple meals",
      options: [
        "at cooking even simple meals",
        "in cooking even simple meals",
        "with cooking even simple meals",
        "for cooking even simple meals"
      ],
      fullSentence: "He is completely useless at cooking even simple meals.",
      sentenceVi: "Anh ấy hoàn toàn vụng về trong việc nấu nướng kể cả những món đơn giản.",
      explanation: "Dùng 'useless at' + V-ing ('cooking')."
    }
  },
  {
    id: 7,
    category: "Cụm tính từ đi với giới từ",
    term: "excited about",
    meaning: "hào hứng, phấn khích về điều gì",
    ipa: "/ɪkˈsaɪtɪd əˈbaʊt/",
    note: "💡 Cấu trúc: be excited about something / doing something. (Đôi khi có thể gặp 'excited at the thought of').",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ phổ biến nhất với 'excited':",
      meaningHighlight: "Hào hứng, phấn khích về điều gì",
      leftCard: "excited",
      correct: "about + N / V-ing",
      options: [
        "about + N / V-ing",
        "for + N / V-ing",
        "with + N / V-ing",
        "in + N / V-ing"
      ],
      explanation: "'Excited about' là cấu trúc thông dụng nhất chỉ tâm trạng háo hức, mong chờ."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Chọn vế sau miêu tả tâm trạng của trẻ nhỏ:",
      meaningHighlight: "Bọn trẻ đang rất hào hứng về chuyến cắm trại sắp tới",
      leftCard: "The children are so excited",
      correct: "about the upcoming camping trip",
      options: [
        "about the upcoming camping trip",
        "with the upcoming camping trip",
        "for the upcoming camping trip",
        "at the upcoming camping trip"
      ],
      fullSentence: "The children are so excited about the upcoming camping trip.",
      sentenceVi: "Lũ trẻ đang vô cùng hào hứng về chuyến đi cắm trại sắp tới.",
      explanation: "'Excited about the upcoming trip' diễn tả sự phấn khích về chuyến đi."
    }
  },
  {
    id: 8,
    category: "Cụm tính từ đi với giới từ",
    term: "crazy about",
    meaning: "cuồng, rất mê cái gì",
    ipa: "/ˈkreɪzi əˈbaʊt/",
    note: "💡 'Crazy about' dùng để diễn tả niềm đam mê cháy bỏng hoặc yêu thích tột độ một ai đó/thứ gì đó.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đúng đi với 'crazy':",
      meaningHighlight: "Cuồng, rất mê cái gì",
      leftCard: "crazy",
      correct: "about + N / V-ing",
      options: [
        "about + N / V-ing",
        "on + N / V-ing",
        "with + N / V-ing",
        "at + N / V-ing"
      ],
      explanation: "'Crazy about' = say mê cuồng nhiệt."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép câu nói về sở thích cuồng nhiệt:",
      meaningHighlight: "Em trai tôi cực kỳ cuồng chơi trò chơi điện tử",
      leftCard: "My little brother is crazy",
      correct: "about playing video games",
      options: [
        "about playing video games",
        "at playing video games",
        "on playing video games",
        "with playing video games"
      ],
      fullSentence: "My little brother is crazy about playing video games.",
      sentenceVi: "Em trai nhỏ của tôi mê tít việc chơi game điện tử.",
      explanation: "Cấu trúc: 'crazy about' + V-ing ('playing')."
    }
  },
  {
    id: 9,
    category: "Cụm tính từ đi với giới từ",
    term: "mad about",
    meaning: "say mê, cuồng nhiệt vì cái gì",
    ipa: "/mæd əˈbaʊt/",
    note: "💡 'Mad about' (đặc biệt trong tiếng Anh - Anh) đồng nghĩa với 'crazy about' = say đắm, say mê.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ mang nghĩa 'say mê, cuồng nhiệt' đi với 'mad':",
      meaningHighlight: "Say mê, cuồng nhiệt vì cái gì",
      leftCard: "mad",
      correct: "about + N / V-ing",
      options: [
        "about + N / V-ing",
        "in + N / V-ing",
        "to + N / V-ing",
        "at + N / V-ing"
      ],
      explanation: "'Mad about something' có nghĩa là rất say mê, cuồng cái gì."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Hoàn thành câu nói về niềm đam mê âm nhạc:",
      meaningHighlight: "Cô ấy say mê âm nhạc cổ điển từ khi còn bé",
      leftCard: "She has always been mad",
      correct: "about classical music since childhood",
      options: [
        "about classical music since childhood",
        "for classical music since childhood",
        "with classical music since childhood",
        "at classical music since childhood"
      ],
      fullSentence: "She has always been mad about classical music since childhood.",
      sentenceVi: "Cô ấy luôn luôn say mê âm nhạc cổ điển từ thuở ấu thơ.",
      explanation: "'Mad about classical music' = đam mê âm nhạc cổ điển."
    }
  },
  {
    id: 10,
    category: "Cụm tính từ đi với giới từ",
    term: "serious about",
    meaning: "nghiêm túc về điều gì hoặc việc làm gì",
    ipa: "/ˈsɪəriəs əˈbaʊt/",
    note: "💡 Cấu trúc: be serious about something / doing something. Diễn tả thái độ đứng đắn, không đùa cợt.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đi kèm với 'serious':",
      meaningHighlight: "Nghiêm túc về điều gì hoặc việc làm gì",
      leftCard: "serious",
      correct: "about + N / V-ing",
      options: [
        "about + N / V-ing",
        "with + N / V-ing",
        "for + N / V-ing",
        "at + N / V-ing"
      ],
      explanation: "'Serious about' diễn tả sự nghiêm túc, quyết tâm thực hiện điều gì."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép vế tiếp theo cho câu hỏi quyết tâm học tập:",
      meaningHighlight: "Bạn có thực sự nghiêm túc về việc học một ngôn ngữ mới không?",
      leftCard: "Are you really serious",
      correct: "about learning a new language?",
      options: [
        "about learning a new language?",
        "with learning a new language?",
        "for learning a new language?",
        "at learning a new language?"
      ],
      fullSentence: "Are you really serious about learning a new language?",
      sentenceVi: "Bạn có thực sự nghiêm túc với việc học một ngoại ngữ mới không?",
      explanation: "'Serious about' + V-ing ('learning')."
    }
  },
  {
    id: 11,
    category: "Cụm tính từ đi với giới từ",
    term: "worried about",
    meaning: "lo lắng về điều gì",
    ipa: "/ˈwʌrid əˈbaʊt/",
    note: "💡 Cấu trúc: be worried about something / someone.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ chính xác đi với 'worried':",
      meaningHighlight: "Lo lắng về điều gì",
      leftCard: "worried",
      correct: "about + N / V-ing",
      options: [
        "about + N / V-ing",
        "with + N / V-ing",
        "for + N / V-ing",
        "at + N / V-ing"
      ],
      explanation: "'Worried about' là cụm chuẩn biểu thị tâm trạng bồn chồn, lo lắng."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép câu nói về sự quan tâm của mẹ:",
      meaningHighlight: "Mẹ tôi lúc nào cũng lo lắng về sức khỏe của tôi",
      leftCard: "My mother is always worried",
      correct: "about my health and diet",
      options: [
        "about my health and diet",
        "with my health and diet",
        "for my health and diet",
        "at my health and diet"
      ],
      fullSentence: "My mother is always worried about my health and diet.",
      sentenceVi: "Mẹ tôi lúc nào cũng bận tâm, lo lắng về sức khỏe và chế độ ăn của tôi.",
      explanation: "'Worried about my health' = lo lắng về sức khỏe của tôi."
    }
  },
  {
    id: 12,
    category: "Cụm tính từ đi với giới từ",
    term: "disappointed with / about",
    meaning: "thất vọng với hoặc về ai, cái gì",
    ipa: "/ˌdɪsəˈpɔɪntɪd wɪð/",
    note: "💡 Thường dùng: 'disappointed with / in someone' (thất vọng về ai) và 'disappointed with / about something' (thất vọng về cái gì).",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn các giới từ đi kèm với 'disappointed':",
      meaningHighlight: "Thất vọng với hoặc về ai, cái gì",
      leftCard: "disappointed",
      correct: "with / about + N",
      options: [
        "with / about + N",
        "at / for + N",
        "to / in + N",
        "from / of + N"
      ],
      explanation: "'Disappointed' thường kết hợp với 'with' hoặc 'about' (hoặc 'in')."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép vế nói về tâm trạng sau trận đấu:",
      meaningHighlight: "Chúng tôi đã rất thất vọng về kết quả trận đấu ngày hôm qua",
      leftCard: "We were deeply disappointed",
      correct: "with the match result yesterday",
      options: [
        "with the match result yesterday",
        "from the match result yesterday",
        "for the match result yesterday",
        "to the match result yesterday"
      ],
      fullSentence: "We were deeply disappointed with the match result yesterday.",
      sentenceVi: "Chúng tôi đã vô cùng thất vọng với kết quả trận đấu ngày hôm qua.",
      explanation: "Dùng 'disappointed with the result' (thất vọng với kết quả)."
    }
  },
  {
    id: 13,
    category: "Cụm tính từ đi với giới từ",
    term: "keen on",
    meaning: "thích thú, hào hứng với cái gì",
    ipa: "/kiːn ɒn/",
    note: "💡 Cấu trúc: be keen on + N / V-ing. Đồng nghĩa với 'be interested in', 'be fond of'.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đúng đi với 'keen':",
      meaningHighlight: "Thích thú, hào hứng với cái gì",
      leftCard: "keen",
      correct: "on + N / V-ing",
      options: [
        "on + N / V-ing",
        "in + N / V-ing",
        "at + N / V-ing",
        "about + N / V-ing"
      ],
      explanation: "'Keen on' là cụm cố định mang nghĩa yêu thích, đam mê làm việc gì."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép câu nói về việc không thích dậy sớm:",
      meaningHighlight: "Tôi không hào hứng lắm với việc thức dậy sớm vào mùa đông",
      leftCard: "I am not particularly keen",
      correct: "on waking up early in winter",
      options: [
        "on waking up early in winter",
        "in waking up early in winter",
        "at waking up early in winter",
        "about waking up early in winter"
      ],
      fullSentence: "I am not particularly keen on waking up early in winter.",
      sentenceVi: "Tôi chẳng hào hứng chút nào với việc phải thức dậy sớm vào mùa đông.",
      explanation: "Cấu trúc: 'keen on' + V-ing ('waking up')."
    }
  },
  {
    id: 14,
    category: "Cụm tính từ đi với giới từ",
    term: "involved in",
    meaning: "tham gia vào việc gì, tổ chức nào",
    ipa: "/ɪnˈvɒlvd ɪn/",
    note: "💡 Cấu trúc: be / get involved in something: dấn thân, tham gia đóng góp tích cực vào một hoạt động hay dự án.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ chuẩn xác đi với 'involved':",
      meaningHighlight: "Tham gia vào việc gì, tổ chức nào",
      leftCard: "involved",
      correct: "in + N / V-ing",
      options: [
        "in + N / V-ing",
        "with + N / V-ing",
        "on + N / V-ing",
        "at + N / V-ing"
      ],
      explanation: "'Involved in' mang nghĩa tham gia, dính líu hoặc đóng góp vào việc gì."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép vế nói về hoạt động thiện nguyện của sinh viên:",
      meaningHighlight: "Nhiều sinh viên đã tích cực tham gia vào dự án từ thiện cộng đồng này",
      leftCard: "Many students got involved",
      correct: "in this community charity project",
      options: [
        "in this community charity project",
        "with this community charity project",
        "on this community charity project",
        "at this community charity project"
      ],
      fullSentence: "Many students got involved in this community charity project.",
      sentenceVi: "Rất nhiều bạn sinh viên đã nhiệt tình tham gia vào dự án từ thiện cộng đồng này.",
      explanation: "'Got involved in this project' = tham gia vào dự án này."
    }
  },
  {
    id: 15,
    category: "Cụm tính từ đi với giới từ",
    term: "obsessed with",
    meaning: "bị ám ảnh, quá mê mẩn cái gì",
    ipa: "/əbˈsest wɪð/",
    note: "💡 Cấu trúc: be obsessed with someone / something: tâm trí lúc nào cũng nghĩ về ai/cái gì đến mức ám ảnh.",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đúng đi với 'obsessed':",
      meaningHighlight: "Bị ám ảnh, quá mê mẩn cái gì",
      leftCard: "obsessed",
      correct: "with + N / V-ing",
      options: [
        "with + N / V-ing",
        "about + N / V-ing",
        "by + N / V-ing",
        "in + N / V-ing"
      ],
      explanation: "'Obsessed with' là cụm từ chuẩn chỉ sự ám ảnh hoặc mê mẩn quá mức."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép vế sau miêu tả người cầu toàn quá mức:",
      meaningHighlight: "Dạo gần đây anh ấy dường như bị ám ảnh bởi sự hoàn hảo",
      leftCard: "He seems completely obsessed",
      correct: "with perfection these days",
      options: [
        "with perfection these days",
        "about perfection these days",
        "by perfection these days",
        "in perfection these days"
      ],
      fullSentence: "He seems completely obsessed with perfection these days.",
      sentenceVi: "Dạo này anh ấy dường như bị ám ảnh hoàn toàn bởi sự hoàn hảo.",
      explanation: "'Obsessed with perfection' = ám ảnh với sự hoàn hảo."
    }
  },
  {
    id: 16,
    category: "Cụm tính từ đi với giới từ",
    term: "afraid of",
    meaning: "sợ hãi cái gì",
    ipa: "/əˈfreɪd əv/",
    note: "💡 Cấu trúc: be afraid of + N / V-ing (sợ cái gì/làm gì); lưu ý: 'be afraid to do something' (ngại/không dám làm gì vì sợ hậu quả).",
    part1: {
      title: "Bước 1: Nắm vững cấu trúc",
      promptVi: "Chọn giới từ đúng đi với 'afraid':",
      meaningHighlight: "Sợ hãi cái gì",
      leftCard: "afraid",
      correct: "of + N / V-ing",
      options: [
        "of + N / V-ing",
        "with + N / V-ing",
        "to + N / V-ing",
        "for + N / V-ing"
      ],
      explanation: "'Afraid of' đi với Danh từ hoặc V-ing để chỉ nỗi sợ điều gì."
    },
    part2: {
      title: "Bước 2: Ứng dụng vào câu thực tế",
      promptVi: "Ghép lời khuyên động viên khi học tập:",
      meaningHighlight: "Đừng sợ mắc lỗi khi bạn học điều mới",
      leftCard: "Do not be afraid",
      correct: "of making mistakes when learning",
      options: [
        "of making mistakes when learning",
        "with making mistakes when learning",
        "to making mistakes when learning",
        "for making mistakes when learning"
      ],
      fullSentence: "Do not be afraid of making mistakes when learning.",
      sentenceVi: "Đừng bao giờ sợ mắc sai lầm khi đang học hỏi những điều mới.",
      explanation: "'Afraid of' + V-ing ('making mistakes')."
    }
  }
];
