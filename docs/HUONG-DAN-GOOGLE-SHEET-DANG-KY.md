# Đăng ký sự kiện → Google Sheet (Apps Script)

## Cột trên Sheet

| Cột | Trường |
|-----|--------|
| A | Thời gian |
| B | Mã sự kiện |
| C | Tên sự kiện |
| D | Họ và tên |
| E | Email |
| F | Số điện thoại |
| G | **Tên công ty** |
| H | Nghề nghiệp |
| I | Ghi chú |

## Dữ liệu vẫn lệch cột sau khi sửa

**Nguyên nhân thường gặp:** Web App trên Google vẫn chạy **bản cũ** (chưa Deploy → New version), hoặc hàng 1 có **cột trống / cột thừa** giữa bảng.

**Bản script mới (`2026-06-05-cols-fixed`):** luôn ghi **đúng 9 ô A→I**, tự sửa tiêu đề mỗi lần có đăng ký mới.

### Checklist (làm đủ 4 bước)

1. Dán code mới từ `scripts/google-apps-script/event-registration.gs` → **Save**.
2. **Deploy** → **Manage deployments** → ✏️ → **New version** → **Deploy** (bước quan trọng nhất).
3. Mở URL Web App trên trình duyệt — phải thấy `"version":"2026-06-05-cols-fixed"`. Nếu không thấy → vẫn đang dùng bản cũ.
4. Trên Sheet, xóa cột **thừa / trùng** (ví dụ hai cột "Tên công ty", hoặc cột J trống cạnh A–I). Chỉ giữ **9 cột A–I** đúng tiêu đề.
5. Chạy `normalizeRegistrationHeaders` (tuỳ chọn) rồi gửi form thử với tên công ty `TEST-CONG-TY`.

Thứ tự A→I: Thời gian | Mã sự kiện | Tên sự kiện | Họ và tên | Email | Số điện thoại | **Tên công ty** | Nghề nghiệp | Ghi chú

Dòng **cũ** trước khi sửa có thể vẫn lệch; chỉ dòng **mới** sau deploy mới chuẩn.

## Nếu Sheet chưa có cột "Tên công ty"

1. Mở Google Sheet → **Extensions** → **Apps Script**.
2. Copy toàn bộ `scripts/google-apps-script/event-registration.gs` vào editor.
3. Chạy `migrateCompanyColumn` (nếu thiếu cột) hoặc `normalizeRegistrationHeaders` (nếu lệch thứ tự).
4. **Deploy** → **New version** → **Deploy**.
5. `GOOGLE_APPS_SCRIPT_URL` trong `.env` trỏ đúng URL Web App.

## Biến môi trường (Next.js)

- `GOOGLE_APPS_SCRIPT_URL` — URL Web App (POST).
- `GOOGLE_APPS_SCRIPT_SECRET` — (tuỳ chọn) khớp `REGISTRATION_SECRET` trong Script Properties của Apps Script.
