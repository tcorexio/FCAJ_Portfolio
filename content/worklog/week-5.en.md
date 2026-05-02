

### Week 5 Objectives

* Implement **AWS WAF** to protect the application from web exploits[cite: 1].
* Set up a **Bastion Host** (EC2) for secure remote database administration[cite: 1].
* Automate user data synchronization using AWS Lambda[cite: 1].

### Tasks carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | - Initialize AWS WAF Web ACL and attach it to the ALB[cite: 1] | 06/04/2026 | 06/04/2026 | - |
| 2 | - Configure WAF Rules for SQLi, XSS, and Rate Limiting[cite: 1] | 07/04/2026 | 07/04/2026 | - |
| 3 | - Deploy a small EC2 Bastion host for DB port forwarding[cite: 1] | 08/04/2026 | 08/04/2026 | - |
| 4 | - Deploy **AWS Lambda** (PostConfirmation) for Cognito-RDS sync[cite: 1] | 09/04/2026 | 09/04/2026 | - |
| 5 | - Audit Bastion security and restrict inbound IP ranges[cite: 1] | 10/04/2026 | 10/04/2026 | - |
| 6 | - Test new user registration and verify RDS data consistency | 11/04/2026 | 11/04/2026 | - |
| 7 | - Review WAF access logs and block effectiveness[cite: 1] | 12/04/2026 | 12/04/2026 | - |

### Week 5 Achievements

* Enhanced API security by blocking malicious common web requests via WAF[cite: 1].
* Provided a secure administrative path to the database without exposing RDS publicly[cite: 1].
* Automated 100% of user profile synchronization via serverless Lambda functions[cite: 1].

### Next Week Plan

* Fine-tune Auto-scaling policies for ECS Fargate.
* Perform deep-dive analysis using CloudWatch Logs Insights.