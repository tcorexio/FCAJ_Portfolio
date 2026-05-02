
### Mục Tiêu Tuần 4

* Kiểm thử hiệu năng và độ ổn định của toàn bộ hệ thống Spendwise.
* Thiết lập hệ thống giám sát **Amazon CloudWatch** và cảnh báo ngân sách.
* Đánh giá chi phí thực tế và chuẩn bị tài liệu vận hành.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | - Thực hiện kiểm thử tải (Stress test) cơ bản lên ALB và ECS | 30/03/2026 | 30/03/2026 | - |
| 2 | - Xây dựng Dashboard **Amazon CloudWatch** theo dõi Logs và Metrics | 31/03/2026 | 31/03/2026 | - |
| 3 | - Cấu hình **Budget Alarms** để cảnh báo khi chi phí vượt ngưỡng dự kiến | 01/04/2026 | 01/04/2026 | - |
| 4 | - Viết Runbook vận hành cho các quy trình xử lý sự cố và restart dịch vụ | 02/04/2026 | 02/04/2026 | - |
| 5 | - Tối ưu hóa thời gian lưu trữ log CloudWatch để tiết kiệm phí | 03/04/2026 | 03/04/2026 | - |
| 6 | - Kiểm tra hạ tầng theo checklist bảo mật cuối cùng | 04/04/2026 | 04/04/2026 | - |
| 7 | - Tổng kết giai đoạn triển khai cốt lõi và bàn giao sơ bộ | 05/04/2026 | 05/04/2026 | - |

### Kết quả đạt được Tuần 4

* Hệ thống giám sát tập trung đã vận hành, cho phép phát hiện lỗi chủ động.
* Ngân sách dự án được kiểm soát chặt chẽ qua hệ thống cảnh báo tự động.
* Thiết lập được các mốc hiệu năng cơ bản cho lượng truy cập hiện tại.

### Khó khăn & Bài học

* **Khó khăn:** Chi phí CloudWatch Log tăng nhanh do chính sách lưu trữ mặc định không giới hạn.
* **Giải pháp:** Điều chỉnh thời gian lưu trữ (retention) phù hợp và bật chế độ "Right-sizing" tài nguyên.
* **Bài học:** Giám sát liên tục là chìa khóa để phát hiện sớm các lãng phí hạ tầng.

### Kế hoạch Tuần tới

* Triển khai **AWS WAF** để bảo vệ tầng ứng dụng.
* Cấu hình **Bastion Host** để quản trị DB an toàn.