# 🇬🇧 EngMastery - Ứng Dụng Ôn Luyện Cụm Từ & Giới Từ Tiếng Anh Tương Tác

Ứng dụng web frontend giúp học và ghi nhớ chuyên sâu các cụm từ tiếng Anh thông dụng và cụm tính từ đi với giới từ thông qua cơ chế kéo thả thông minh và ví dụ thực tế.

---

## 🌟 2 Chế độ chính

1. **📖 Phần Ôn (Practice Mode)**:
   - Học tuần tự 16 cụm từ (Bước 1: Cấu trúc ➔ Bước 2: Câu mẫu thực tế).
   - **Quy tắc**: Đúng mới được chuyển sang câu tiếp theo. Nếu sai sẽ báo đỏ để người dùng suy nghĩ và làm lại.
   - Hỗ trợ phát âm chuẩn tiếng Anh (Text-To-Speech).

2. **📝 Phần Kiểm Tra (Test Mode)**:
   - 10 câu hỏi ngẫu nhiên từ ngân hàng đề.
   - **Quy tắc**: Sai hay đúng đều lập tức chuyển sang câu tiếp theo.
   - **Thang điểm 10 ở cuối**: Tính điểm chính xác (ví dụ: `8.0 / 10`) kèm nhận xét chi tiết và nút làm lại bài kiểm tra mới.

---

## 🚀 Triển khai trên Vercel (Pure Static - 100% không lỗi)

Dự án là ứng dụng thuần Frontend HTML5 / CSS3 / JavaScript Module:
- Không cần Node.js runtime hay Serverless function.
- Vercel tự động nhận diện là **Static Site** và phân phối qua mạng Vercel Edge CDN toàn cầu với tốc độ tối đa.

Chỉ cần push lên GitHub, Vercel sẽ tự động deploy thành công 100% trong 10 giây!

---

## 💻 Chạy thử nghiệm ở máy cục bộ (Local)

Mở terminal trong thư mục dự án và chạy:
```bash
npx serve .
```
hoặc:
```bash
python -m http.server 3000
```
Sau đó truy cập: `http://localhost:3000`
