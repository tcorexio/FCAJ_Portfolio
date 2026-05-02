
### Mục Tiêu Tuần 6

* Tinh chỉnh Auto-scaling cho **ECS Fargate** dựa trên dữ liệu thực tế[cite: 1].
* Tối ưu hóa truy vấn logs bằng công cụ **CloudWatch Logs Insights**[cite: 1].

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | - Phân tích chỉ số CPU/RAM sau một tháng vận hành thực tế[cite: 1] | 13/04/2026 | 13/04/2026 | - |
| 2 | - Điều chỉnh kích thước ECS Task (Right-sizing) để tối ưu chi phí[cite: 1] | 14/04/2026 | 14/04/2026 | - |
| 3 | - Cấu hình chính sách Auto-scaling dựa trên lượng Request của ALB[cite: 1] | 15/04/2026 | 15/04/2026 | - |
| 4 | - Xây dựng các câu lệnh Logs Insights tùy chỉnh để theo dõi lỗi 5xx[cite: 1] | 16/04/2026 | 16/04/2026 | - |
| 5 | - Thử nghiệm tắt Bastion Host trong giờ thấp điểm để tiết kiệm phí[cite: 1] | 17/04/2026 | 17/04/2026 | - |
| 6 | - Kiểm thử khả năng tự phục hồi của ECS Service bằng cách giả lập crash | 18/04/2026 | 18/04/2026 | - |
| 7 | - Cập nhật tài liệu giám sát và chỉ số vận hành hàng tuần[cite: 1] | 19/04/2026 | 19/04/2026 | - |

### Kết quả đạt được Tuần 6

* Hệ thống có khả năng tự động mở rộng linh hoạt theo lượng truy cập[cite: 1].
* Giảm chi phí tài nguyên nhàn rỗi nhờ việc điều chỉnh đúng kích thước task[cite: 1].
* Cải thiện đáng kể tốc độ xử lý sự cố nhờ các truy vấn log tối ưu[cite: 1].

### Kế hoạch Tuần tới

* Review bảng tính chi phí chi tiết trên AWS Billing Dashboard.
* Đánh giá hiệu quả NAT Gateway so với VPC Endpoint.