# 🇬🇧 EngMastery - Ứng Dụng Ôn Luyện Cụm Từ & Giới Từ Tiếng Anh Tương Tác

Ứng dụng web frontend giúp học và ghi nhớ chuyên sâu các cụm từ tiếng Anh thông dụng và cụm tính từ đi với giới từ thông qua cơ chế **kéo thả (Drag & Drop)** thông minh, âm thanh phát âm bản xứ chuẩn xác và câu ví dụ thực tế.

---

## 🌟 Tính năng nổi bật

1. **Phương pháp học 2 bước (Two-Step Mastery)**:
   - **Bước 1 - Cấu trúc**: Kéo từ/cụm từ vế trái vào dạng giới từ/động từ chính xác ở vế phải (Ví dụ: `look forward` ➔ `to + V-ing / N`).
   - **Bước 2 - Câu mẫu thực tế**: Ghép nối hoàn thiện câu ví dụ ngữ cảnh thực tiễn (Ví dụ: `I am really looking forward` ➔ `to hearing from you soon`).
2. **Kéo thả mượt mà & Hỗ trợ Chạm (Mobile-Friendly)**:
   - Kéo trực tiếp bằng chuột hoặc ngón tay (Drag & Drop).
   - Hỗ trợ cả thao tác chạm/click (Tap left card ➔ Tap target option) cho điện thoại và máy tính bảng.
3. **Phát âm tiếng Anh chuẩn (Text-To-Speech)**:
   - Tích hợp Web Speech API phát âm chuẩn từ vựng và toàn bộ câu ví dụ khi hoàn thành hoặc khi bấm nút 🔊.
4. **Hiệu ứng âm thanh & hình ảnh (Audio & Visual Feedback)**:
   - Hiệu ứng âm thanh vui tươi bằng Web Audio API (không cần tải file ngoài, phản hồi tức thì).
   - Rung lắc khi trả lời sai, phát sáng xanh lá và bắn pháo hoa Confetti khi trả lời đúng.
5. **Theo dõi tiến độ học**:
   - Thanh tiến độ (Progress bar) trực quan cho 16 cụm từ (tương đương 32 vòng bài tập).
   - Bộ đếm chuỗi đúng liên tiếp (Streak 🔥) và điểm số tích lũy (Score ⭐).
6. **Sổ tay tra cứu 16 cụm từ (Cheat Sheet)**:
   - Tab tra cứu nhanh đầy đủ 16 cụm từ kèm phiên âm IPA, nghĩa tiếng Việt, mẹo ghi nhớ và ví dụ minh họa có nút nghe phát âm.
   - Bộ lọc theo danh mục: Cụm động từ & Cụm tính từ + giới từ.

---

## 📋 Danh sách 16 Cụm từ được ôn tập

### Nhóm 1: Cụm động từ thông dụng
1. `look forward to + V-ing/N`: trông mong, mong đợi điều gì
2. `hear from + someone`: nhận được tin tức, liên lạc từ ai đó
3. `say hello to + someone`: gửi lời chào tới ai đó

### Nhóm 2: Cụm tính từ đi với giới từ
4. `good at`: giỏi về môn gì hoặc việc gì
5. `bad at`: dở, kém về việc gì
6. `useless at`: rất tệ, vụng về trong việc gì
7. `excited about`: hào hứng, phấn khích về điều gì
8. `crazy about`: cuồng, rất mê cái gì
9. `mad about`: say mê, cuồng nhiệt vì cái gì
10. `serious about`: nghiêm túc về điều gì hoặc việc làm gì
11. `worried about`: lo lắng về điều gì
12. `disappointed with / about`: thất vọng với hoặc về ai, cái gì
13. `keen on`: thích thú, hào hứng với cái gì
14. `involved in`: tham gia vào việc gì, tổ chức nào
15. `obsessed with`: bị ám ảnh, quá mê mẩn cái gì
16. `afraid of`: sợ hãi cái gì

---

## 🚀 Hướng dẫn Đẩy lên GitHub & Deploy lên Vercel Cực Nhanh

### Bước 1: Commit & Push lên GitHub

Mở PowerShell / Command Prompt tại thư mục dự án (`d:\demobin`):

```bash
git add .
git commit -m "feat: complete interactive English learning drag-and-drop web app"
git branch -M main
git push -u origin main
```

*(Nếu GitHub yêu cầu đăng nhập hoặc token, bạn chỉ cần nhập thông tin tài khoản GitHub của mình).*

---

### Bước 2: Deploy lên Vercel trong 1 phút

1. Truy cập [https://vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub của bạn.
2. Bấm vào nút **"Add New..."** ➔ chọn **"Project"**.
3. Tại danh sách GitHub Repositories, tìm repo **`demobin`** (hoặc `annc19324/demobin`) và bấm **"Import"**.
4. Tại mục **Configure Project**:
   - **Framework Preset**: Chọn **Other** (hoặc để mặc định).
   - **Root Directory**: `./` (để nguyên mặc định).
5. Bấm nút **"Deploy"**.
6. Chỉ sau khoảng **10 - 20 giây**, Vercel sẽ cung cấp cho bạn một đường link website trực tuyến miễn phí (dạng `https://demobin-xxx.vercel.app`) hoạt động mượt mà trên cả máy tính lẫn điện thoại!
