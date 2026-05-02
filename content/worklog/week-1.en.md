### Week 1 Objectives

* Finalize functional requirements and Non-Functional Requirements (NFR) for the Spendwise application[cite: 1].
* Initialize the infrastructure management strategy using Terraform (S3 backend/State strategy)[cite: 1].
* Establish the fundamental network infrastructure on AWS, including VPC, Security Groups, ALB, and ECR[cite: 1].

### Tasks carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | - Spendwise Requirement Analysis <br>&emsp; + Finalized financial tracking and analysis features <br>&emsp; + Defined stability and data security requirements | 09/03/2026 | 09/03/2026 |[cite: 1] |
| 2 | - Terraform Initialization <br>&emsp; + Configured S3 bucket as remote backend <br>&emsp; + Set up DynamoDB for state locking | 10/03/2026 | 10/03/2026 |[cite: 1] |
| 3 | - **Amazon VPC** Setup <br>&emsp; + Divided Public/Private Subnets across multiple Availability Zones <br>&emsp; + Configured Internet Gateway for the Public layer | 11/03/2026 | 11/03/2026 |[cite: 1] |
| 4 | - Security Configuration <br>&emsp; + Established **Security Groups** for ALB, ECS, and RDS <br>&emsp; + Applied Least Privilege principles | 12/03/2026 | 12/03/2026 |[cite: 1] |
| 5 | - Compute Service Initialization <br>&emsp; + Created **Amazon ECR** repository <br>&emsp; + Configured basic **Amazon ECS** cluster | 13/03/2026 | 13/03/2026 |[cite: 1] |
| 6 | - Load Balancing <br>&emsp; + Set up **Application Load Balancer (ALB)** <br>&emsp; + Configured Target Group for NestJS backend | 14/03/2026 | 14/03/2026 |[cite: 1] |
| 7 | - Infrastructure Verification <br>&emsp; + Verified network connectivity between subnets <br>&emsp; + Tested image push capabilities to ECR | 15/03/2026 | 15/03/2026 |[cite: 1] |

### Week 1 Achievements

* All team members agreed on the 3-tier architecture deployed on AWS Cloud[cite: 1].
* Network infrastructure (VPC) is ready with corresponding Security Group protection for each service[cite: 1].
* Image repository (ECR) and system entry point (ALB) are established for application deployment[cite: 1].

### Challenges & Lessons

* **Challenges:** 
  * Initially complex Subnet partitioning and Routing configuration for VPC Endpoints to ensure internal traffic stays off the Internet[cite: 1].
* **Solutions:** 
  * Consulted AWS Best Practices for VPC Design and maintained strict Public/Private separation[cite: 1].
* **Lessons Learned:** 
  * Using Terraform from day one ensures tight infrastructure control and easy configuration reuse for different environments[cite: 1].

### Next Week Plan

* Integrate **Amazon Cognito** for the registration/login system[cite: 1].
* Push the Backend image to ECR and officially rollout on ECS Fargate[cite: 1].
* Connect the Amplify frontend with the actual API endpoint[cite: 1].