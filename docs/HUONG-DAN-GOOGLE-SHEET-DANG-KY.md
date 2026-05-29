# Hướng dẫn: Đăng ký tọa đàm → Google Sheet (Apps Script)

Luồng dữ liệu:

```text
Website (form) → API Next.js (/api/event-register) → Google Apps Script (Web App) → Google Sheet
```

Sự kiện: **Chương trình tọa đàm: "Nâng tầm nhân lực cho doanh nghiệp trong kỷ nguyên AI"**  
Mã sự kiện trên web: `workshop-ai-thuc-chien`

---

## Bước 1 — Tạo Google Sheet

1. Mở [Google Sheets](https://sheets.google.com) → **Blank spreadsheet**.
2. Đặt tên file, ví dụ: `Đăng ký tọa đàm AI Việt Nam`.
3. (Tuỳ chọn) Đổi múi giờ file: **File → Settings → Time zone** → `Asia/Ho_Chi_Minh`.

---

## Bước 2 — Gắn Apps Script

1. Trong Sheet: **Extensions → Apps Script**.
2. Xóa nội dung mặc định (`function myFunction...`).
3. Copy **toàn bộ** file `scripts/google-apps-script/event-registration.gs` trong repo dán vào editor.
4. **Save** (Ctrl+S), đặt tên project, ví dụ: `Event Registration API`.

---

## Bước 3 — Tạo sheet cột tiêu đề (chạy một lần)

1. Trong Apps Script, chọn hàm **`setupRegistrationSheet`** ở dropdown Run.
2. Bấm **Run** → lần đầu Google yêu cầu **Authorize**:
   - Review permissions → chọn tài khoản Google
   - **Advanced → Go to … (unsafe)** (nếu hiện) → **Allow**
3. Quay lại Sheet: tab **`Đăng ký tọa đàm`** với các cột:
   - Thời gian | Mã sự kiện | Tên sự kiện | Họ và tên | Email | Số điện thoại | Nghề nghiệp | Ghi chú

---

## Bước 4 — Mã bảo mật (khuyến nghị)

1. Apps Script: **Project Settings** (biểu tượng bánh răng) → **Script properties** → **Add script property**:
   - Property: `REGISTRATION_SECRET`
   - Value: chuỗi bí mật dài (ví dụ tạo bằng password manager, ≥ 32 ký tự)
2. Ghi lại giá trị này — dùng cho biến môi trường website (bước 6).

---

## Bước 5 — Deploy Web App

1. Apps Script: **Deploy → New deployment**.
2. **Select type** → **Web app**.
3. Cấu hình:
   - **Description**: `Event registration v1`
   - **Execute as**: `Me` (tài khoản của bạn)
   - **Who has access**: `Anyone` *(bắt buộc để server gọi được; vẫn an toàn nếu có `REGISTRATION_SECRET`)*
4. **Deploy** → copy **Web app URL** (dạng `https://script.google.com/macros/s/.../exec`).

> Mỗi lần **sửa code** script: **Deploy → Manage deployments → Edit (biểu tượng bút) → Version: New version → Deploy**. URL `/exec` thường giữ nguyên.

---

## Bước 6 — Cấu hình website

### Chạy local

Tạo file `.env.local` ở thư mục gốc project:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXX/exec
GOOGLE_APPS_SCRIPT_SECRET=chuoi-bi-mat-cung-script-properties
```

Khởi động lại: `npm run dev`.

### Deploy (Vercel / hosting)

Thêm cùng hai biến trong **Environment Variables** của hosting.

| Biến | Mô tả |
|------|--------|
| `GOOGLE_APPS_SCRIPT_URL` | URL Web App `/exec` từ bước 5 |
| `GOOGLE_APPS_SCRIPT_SECRET` | Trùng `REGISTRATION_SECRET` trên Apps Script |

---

## Bước 7 — Kiểm tra

1. Mở trang **Sự kiện** trên website → **Đăng ký ngay** → điền form → **Gửi đăng ký**.
2. Trong Google Sheet, tab **Đăng ký tọa đàm** phải có dòng mới.
3. Nếu lỗi:
   - **Apps Script → Executions**: xem log lỗi `doPost`.
   - Kiểm tra `GOOGLE_APPS_SCRIPT_URL` và `SECRET` khớp Script properties.
   - Sau khi đổi script, đã deploy **New version** chưa.

### Test trực tiếp Apps Script (tuỳ chọn)

Dùng curl (thay URL và SECRET):

```bash
curl -X POST "https://script.google.com/macros/s/XXXX/exec" \
  -H "Content-Type: application/json" \
  -d "{\"token\":\"SECRET\",\"eventId\":\"workshop-ai-thuc-chien\",\"eventTitle\":\"Test\",\"fullName\":\"Nguyen Van A\",\"email\":\"a@test.com\",\"phone\":\"0901234567\",\"occupation\":\"Engineer\",\"notes\":\"\"}"
```

Kết quả mong đợi: `{"success":true}`

---

## Phân quyền Sheet

- Chia sẻ Sheet với team (Viewer/Editor) theo nhu cầu.
- **Không** công khai link chỉnh sửa; chỉ người có quyền mới xem dữ liệu đăng ký.

---

## Xử lý sự cố thường gặp

| Triệu chứng | Cách xử lý |
|-------------|------------|
| `Chưa cấu hình kết nối Google Sheet` | Thiếu `GOOGLE_APPS_SCRIPT_URL` trên server |
| `Unauthorized` | `GOOGLE_APPS_SCRIPT_SECRET` ≠ `REGISTRATION_SECRET` |
| Form báo thành công nhưng Sheet trống | Chưa deploy New version; hoặc chạy sai tài khoản **Execute as** |
| Lỗi quyền lần đầu | Chạy lại `setupRegistrationSheet` và Authorize đầy đủ |
