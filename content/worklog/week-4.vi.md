
### Mục Tiêu Tuần 4

* Kiểm thử hiệu năng và độ ổn định của toàn bộ hệ thống Spendwise[cite: 1].
* Thiết lập hệ thống giám sát **Amazon CloudWatch** và cảnh báo ngân sách[cite: 1].
* Đánh giá chi phí thực tế và chuẩn bị tài liệu vận hành[cite: 1].

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | - Thực hiện kiểm thử tải (Stress test) cơ bản lên ALB và ECS[cite: 1] | 30/03/2026 | 30/03/2026 | - |
| 2 | - Xây dựng Dashboard **Amazon CloudWatch** theo dõi Logs và Metrics[cite: 1] | 31/03/2026 | 31/03/2026 | - |
| 3 | - Cấu hình **Budget Alarms** để cảnh báo khi chi phí vượt ngưỡng dự kiến[cite: 1] | 01/04/2026 | 01/04/2026 | - |
| 4 | - Viết Runbook vận hành cho các quy trình xử lý sự cố và restart dịch vụ[cite: 1] | 02/04/2026 | 02/04/2026 | - |
| 5 | - Tối ưu hóa thời gian lưu trữ log CloudWatch để tiết kiệm phí[cite: 1] | 03/04/2026 | 03/04/2026 | - |
| 6 | - Kiểm tra hạ tầng theo checklist bảo mật cuối cùng[cite: 1] | 04/04/2026 | 04/04/2026 | - |
| 7 | - Tổng kết giai đoạn triển khai cốt lõi và bàn giao sơ bộ[cite: 1] | 05/04/2026 | 05/04/2026 | - |

### Kết quả đạt được Tuần 4

* Hệ thống giám sát tập trung đã vận hành, cho phép phát hiện lỗi chủ động[cite: 1].
* Ngân sách dự án được kiểm soát chặt chẽ qua hệ thống cảnh báo tự động[cite: 1].
* Thiết lập được các mốc hiệu năng cơ bản cho lượng truy cập hiện tại[cite: 1].

### Khó khăn & Bài học

* **Khó khăn:** Chi phí CloudWatch Log tăng nhanh do chính sách lưu trữ mặc định không giới hạn[cite: 1].
* **Giải pháp:** Điều chỉnh thời gian lưu trữ (retention) phù hợp và bật chế độ "Right-sizing" tài nguyên[cite: 1].
* **Bài học:** Giám sát liên tục là chìa khóa để phát hiện sớm các lãng phí hạ tầng[cite: 1].

### Kế hoạch Tuần tới

* Triển khai **AWS WAF** để bảo vệ tầng ứng dụng[cite: 1].
* Cấu hình **Bastion Host** để quản trị DB an toàn[cite: 1].