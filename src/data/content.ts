export type Language = "en" | "vi";

export interface BilingualText {
  en: string;
  vi: string;
}

export const content = {
  hero: {
    greeting: {
      en: "Hello, I'm",
      vi: "Xin chào, tôi là",
    },
    tagline: {
      en: "Building Modern Cloud Architectures at AWS Vietnam",
      vi: "Xây dựng kiến trúc Cloud hiện đại tại AWS Việt Nam",
    },
    cta: {
      en: "View My Journey",
      vi: "Xem Hành Trình",
    },
  },
  worklog: {
    title: {
      en: "Project Worklog",
      vi: "Nhật Ký Dự Án",
    },
    subtitle: {
      en: "8 weeks of building SpendWise: From Infrastructure to Production",
      vi: "8 tuần xây dựng SpendWise: Từ hạ tầng đến khi vận hành thực tế",
    },
    weeks: [
      {
        week: 1,
        title: { en: "Foundation & Networking", vi: "Nền tảng & Mạng" },
        description: {
          en: "Defined NFRs and initialized the 3-tier networking infrastructure using Terraform.",
          vi: "Xác định tiêu chuẩn phi chức năng và khởi tạo hạ tầng mạng 3 lớp bằng Terraform[cite: 1, 3].",
        },
        highlights: {
          en: ["VPC & Subnets", "Terraform S3 Backend", "ALB & ECR Setup"],
          vi: [
            "Thiết kế VPC & Subnet",
            "Terraform S3 Backend",
            "Thiết lập ALB & ECR",
          ],
        },
      },
      {
        week: 2,
        title: {
          en: "Identity & Backend Deployment",
          vi: "Định danh & Triển khai Backend",
        },
        description: {
          en: "Integrated Amazon Cognito and deployed the NestJS backend on ECS Fargate.",
          vi: "Tích hợp Amazon Cognito và triển khai backend NestJS trên ECS Fargate[cite: 1, 4].",
        },
        highlights: {
          en: ["Cognito User Pools", "ECS Fargate", "VPC Endpoints"],
          vi: ["Cognito User Pools", "ECS Fargate", "VPC Endpoints"],
        },
      },
      {
        week: 3,
        title: { en: "Database & Security", vi: "Cơ sở dữ liệu & Bảo mật" },
        description: {
          en: "Provisioned RDS PostgreSQL in private subnets and secured secrets with AWS Secrets Manager.",
          vi: "Khởi tạo RDS PostgreSQL trong mạng riêng và bảo mật thông tin bằng Secrets Manager[cite: 1, 5].",
        },
        highlights: {
          en: ["RDS PostgreSQL", "Secrets Manager", "SSL/ACM"],
          vi: ["RDS PostgreSQL", "Secrets Manager", "Chứng chỉ SSL/ACM"],
        },
      },
      {
        week: 4,
        title: { en: "Monitoring & Budgeting", vi: "Giám sát & Ngân sách" },
        description: {
          en: "Established CloudWatch monitoring and configured Budget Alarms for cost control.",
          vi: "Thiết lập giám sát CloudWatch và cấu hình cảnh báo ngân sách để kiểm soát chi phí[cite: 1, 6].",
        },
        highlights: {
          en: ["CloudWatch Dashboards", "Budget Alarms", "Stress Testing"],
          vi: ["CloudWatch Dashboard", "Cảnh báo ngân sách", "Kiểm thử tải"],
        },
      },
      {
        week: 5,
        title: {
          en: "App Security & Automation",
          vi: "Bảo mật ứng dụng & Tự động hóa",
        },
        description: {
          en: "Deployed AWS WAF for web protection and Lambda for user data synchronization.",
          vi: "Triển khai AWS WAF để bảo vệ web và Lambda để tự động đồng bộ dữ liệu người dùng[cite: 1, 7].",
        },
        highlights: {
          en: ["AWS WAF", "Bastion Host", "Lambda Triggers"],
          vi: ["AWS WAF", "Bastion Host", "Lambda Triggers"],
        },
      },
      {
        week: 6,
        title: { en: "Optimization & Scaling", vi: "Tối ưu hóa & Mở rộng" },
        description: {
          en: "Fine-tuned ECS Auto-scaling and optimized log analysis using Logs Insights.",
          vi: "Tinh chỉnh ECS Auto-scaling và tối ưu hóa phân tích log bằng Logs Insights[cite: 1, 8].",
        },
        highlights: {
          en: ["Auto-scaling", "Right-sizing", "Logs Insights"],
          vi: ["Tự động mở rộng", "Điều chỉnh quy mô", "Logs Insights"],
        },
      },
      {
        week: 7,
        title: { en: "Cost Efficiency", vi: "Tối ưu Chi phí" },
        description: {
          en: "Analyzed expenses via Cost Explorer and optimized NAT Gateway traffic.",
          vi: "Phân tích chi phí qua Cost Explorer và tối ưu hóa lưu lượng NAT Gateway[cite: 1, 9].",
        },
        highlights: {
          en: ["Cost Explorer", "VPC Endpoints", "Lifecycle Policies"],
          vi: ["Cost Explorer", "VPC Endpoints", "Chính sách vòng đời ECR"],
        },
      },
      {
        week: 8,
        title: {
          en: "Final Review & Handover",
          vi: "Đánh giá cuối kỳ & Bàn giao",
        },
        description: {
          en: "Completed as-built documentation and verified Disaster Recovery procedures.",
          vi: "Hoàn thiện hồ sơ kiến trúc thực tế và xác thực quy trình khôi phục thảm họa[cite: 1, 9].",
        },
        highlights: {
          en: ["As-built Docs", "DR Verification", "Terraform Handover"],
          vi: ["Hồ sơ As-built", "Kiểm chứng DR", "Bàn giao mã nguồn IaC"],
        },
      },
    ],
  },
  proposal: {
    title: { en: "Project Proposal", vi: "Đề Xuất Dự Án" },
    subtitle: {
      en: "SpendWise - Modern Finance Platform",
      vi: "SpendWise - Nền tảng tài chính hiện đại",
    },
    overview: {
      en: "A secure cloud-native application using a 3-tier architecture on AWS to manage personal finances.",
      vi: "Ứng dụng cloud-native bảo mật sử dụng kiến trúc 3 lớp trên AWS để quản lý tài chính cá nhân[cite: 1, 3].",
    },
    objectives: [
      {
        en: "Secure storage in private subnets",
        vi: "Lưu trữ bảo mật trong subnet riêng tư[cite: 1, 5]",
      },
      {
        en: "Highly available ECS Fargate",
        vi: "Hệ thống sẵn sàng cao với ECS Fargate[cite: 1, 4]",
      },
      {
        en: "Automated IaC with Terraform",
        vi: "Quản lý hạ tầng tự động với Terraform[cite: 1, 3]",
      },
    ],
  },
};
