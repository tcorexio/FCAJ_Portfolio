### Week 1 Objectives

* Finalize functional requirements and Non-Functional Requirements (NFR) for the Spendwise application.
* Initialize the infrastructure management strategy using Terraform (S3 backend/State strategy).
* Establish the fundamental network infrastructure on AWS, including VPC, Security Groups, ALB, and ECR.

### Tasks carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | - Spendwise Requirement Analysis <br>&emsp; + Finalized financial tracking and analysis features <br>&emsp; + Defined stability and data security requirements | 09/03/2026 | 09/03/2026 | |
| 2 | - Terraform Initialization <br>&emsp; + Configured S3 bucket as remote backend <br>&emsp; + Set up DynamoDB for state locking | 10/03/2026 | 10/03/2026 | |
| 3 | - **Amazon VPC** Setup <br>&emsp; + Divided Public/Private Subnets across multiple Availability Zones <br>&emsp; + Configured Internet Gateway for the Public layer | 11/03/2026 | 11/03/2026 | |
| 4 | - Security Configuration <br>&emsp; + Established **Security Groups** for ALB, ECS, and RDS <br>&emsp; + Applied Least Privilege principles | 12/03/2026 | 12/03/2026 | |
| 5 | - Compute Service Initialization <br>&emsp; + Created **Amazon ECR** repository <br>&emsp; + Configured basic **Amazon ECS** cluster | 13/03/2026 | 13/03/2026 | |
| 6 | - Load Balancing <br>&emsp; + Set up **Application Load Balancer (ALB)** <br>&emsp; + Configured Target Group for NestJS backend | 14/03/2026 | 14/03/2026 | |
| 7 | - Infrastructure Verification <br>&emsp; + Verified network connectivity between subnets <br>&emsp; + Tested image push capabilities to ECR | 15/03/2026 | 15/03/2026 | |

### Week 1 Achievements

* All team members agreed on the 3-tier architecture deployed on AWS Cloud.
* Network infrastructure (VPC) is ready with corresponding Security Group protection for each service.
* Image repository (ECR) and system entry point (ALB) are established for application deployment.

### Challenges & Lessons

* **Challenges:** 
  * Initially complex Subnet partitioning and Routing configuration for VPC Endpoints to ensure internal traffic stays off the Internet.
* **Solutions:** 
  * Consulted AWS Best Practices for VPC Design and maintained strict Public/Private separation.
* **Lessons Learned:** 
  * Using Terraform from day one ensures tight infrastructure control and easy configuration reuse for different environments.

### Next Week Plan

* Integrate **Amazon Cognito** for the registration/login system.
* Push the Backend image to ECR and officially rollout on ECS Fargate.
* Connect the Amplify frontend with the actual API endpoint.