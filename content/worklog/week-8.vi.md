

### Mục Tiêu Tuần 8

* Hoàn thiện bộ hồ sơ kiến trúc thực tế (As-Built) cho dự án Spendwise.
* Xác thực các kịch bản khôi phục thảm họa (Disaster Recovery) cho DB.
* Tổng kết dự án, bàn giao hạ tầng và báo cáo chi phí.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | - Cập nhật sơ đồ kiến trúc AWS 3-tier khớp với thực tế triển khai | 27/04/2026 | 27/04/2026 | - |
| 2 | - Thực hiện khôi phục RDS từ snapshot thực tế để verify DR | 28/04/2026 | 28/04/2026 | - |
| 3 | - Commit bộ mã nguồn Terraform hoàn chỉnh vào repository chính | 29/04/2026 | 29/04/2026 | - |
| 4 | - So sánh chi phí dự án thực tế với mức ước tính ban đầu ($69-$326) | 30/04/2026 | 30/04/2026 | - |
| 5 | - Thu hồi các tài nguyên môi trường test/staging không còn sử dụng | 01/05/2026 | 01/05/2026 | - |
| 6 | - Hoàn thiện tài liệu Runbook và hướng dẫn bảo trì hệ thống | 02/05/2026 | 02/05/2026 | - |
| 7 | - Họp tổng kết dự án và bàn giao chính thức cho team vận hành | 03/05/2026 | 03/05/2026 | - |

### Kết quả đạt được Tuần 8

* Spendwise đã vận hành hoàn chỉnh trên AWS với đầy đủ tài liệu đi kèm.
* Quy trình khôi phục dữ liệu đã được kiểm chứng, đảm bảo tính liên tục của dự án.
* Toàn bộ hạ tầng được quản lý dưới dạng mã nguồn (IaC), sẵn sàng cho việc mở rộng.

### Bài học kinh nghiệm cuối cùng

* **Sức mạnh của Automation:** Terraform giúp giảm sai sót cấu hình thủ công tới 80%.
* **Cẩn trọng chi phí:** Giám sát NAT và Logs chặt chẽ là yếu tố sống còn để tránh "sốc hóa đơn".