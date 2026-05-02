# SpendWise Platform

## Project Proposal for SpendWiseApp Deployment on AWS

---

### 1. Project Overview

SpendWise is a comprehensive personal finance management web application designed to solve a real-world problem: helping users track, analyze, and control their personal finances effectively and intuitively[cite: 1]. The application is deployed entirely on AWS Cloud to ensure high flexibility and data security[cite: 1].

---

### 2. Context and Solution

#### Current Issues
For a financial management app, user data and system stability are critical factors[cite: 1]. Deploying on single servers or fragmented self-managed infrastructure often leads to[cite: 1]:
* **Risk of financial data loss** due to manual backups and inconsistent recovery processes[cite: 1].
* **Traffic spikes** at the beginning/end of the month causing slow response times, congestion, and downtime[cite: 1].
* **Difficulties in upgrading** or bug fixing as direct server manipulation often leads to configuration errors[cite: 1].
* **Lack of centralized monitoring**, leading to prolonged incident detection and resolution times[cite: 1].
* **Insecure data environments** due to non-standardized access control and infrastructure management[cite: 1].

#### How SpendWise Solves This?
SpendWise utilizes a Cloud-native approach via AWS Cloud[cite: 1]:
* **Modern Frontend:** NextJS framework hosted and deployed via AWS Amplify[cite: 1].
* **Robust Backend:** NestJS framework deployed using AWS ECS Fargate[cite: 1].
* **Secure Networking:** Deployment within a VPC, separating public/private access layers and utilizing an Application Load Balancer[cite: 1].

---

### 3. Solution Architecture

The proposed architecture strictly follows a 3-tier application model on the cloud environment[cite: 1]:

#### AWS Services
| Service | Role in SpendWise |
|:---|:---|
| **Amazon VPC** | Private network; partitioned into public/private subnets across multiple AZs[cite: 1]. |
| **ALB** | Application Load Balancer for entry-point traffic and load balancing to ECS[cite: 1]. |
| **Amazon ECS** | Runs NestJS backend containers using the Fargate serverless engine[cite: 1]. |
| **Amazon RDS** | Relational Database for financial data (PostgreSQL), located in private subnets[cite: 1]. |
| **AWS Amplify** | Automates builds and hosts the Next.js frontend from Git[cite: 1]. |
| **Amazon Cognito** | Manages user pools, registration, login, and authentication[cite: 1]. |
| **AWS WAF** | Protects the web layer against common attacks like SQLi/XSS and bots[cite: 1]. |

#### Specific Technical Design
* **VPC Endpoints:** Provides private connections to ECR, CloudWatch, and Cognito to avoid NAT costs for internal traffic[cite: 1].
* **Bastion Host:** Uses Amazon EC2 as a jump box to securely operate the database within the VPC[cite: 1].
* **Secrets Manager:** Securely stores and manages database credentials and API secret keys[cite: 1].

---

### 4. Technical Implementation

#### Technologies Used
* **Frontend:** NextJS, AWS Amplify[cite: 1].
* **Backend:** NestJS, AWS ECS Fargate, ECR[cite: 1].
* **Infrastructure:** Terraform (recommended) to manage VPC, Security Groups, and ALB configurations[cite: 1].

#### Development Path
The project focuses on building the core network and identity foundation first, followed by application deployment and data stabilization[cite: 1].

---

### 5. Timeline & Milestones

* **Week 1 - Foundation:** Finalize requirements, initialize Terraform, and set up basic VPC, SG, ALB, ECR, and ECS[cite: 1].
* **Week 2 - Identity & App Deployment:** Integrate Cognito, push images to ECR, rollout ECS, and connect Amplify[cite: 1].
* **Week 3 - Data & Hardening:** Enable RDS and perform data migration, verify private networking, and set up HTTPS[cite: 1].
* **Week 4 - Stabilization & Handover:** Performance testing, setting up monitoring/alerts, and cost evaluation/optimization[cite: 1].

---

### 6. Risk Assessment & Mitigation

| Risk | Mitigation Strategy |
|:---|:---|
| **Rapid NAT/ALB cost increase** | Set budget alarms, perform weekly cost reviews, and right-size resources[cite: 1]. |
| **Env/Secret configuration drift** | Standardize environment variables and implement mandatory release checklists[cite: 1]. |
| **DB operational risks** | Controlled migrations, periodic restore testing, and connection monitoring[cite: 1]. |
| **Infrastructure security risks** | Apply the principle of least privilege and conduct regular SG/IAM reviews[cite: 1]. |

---

### 7. Budget (Estimated Monthly)

* **Total AWS Cost:** $69 - $326[cite: 1].
* **Core Components:**
    * **ALB:** $18 - $35[cite: 1].
    * **ECS Fargate:** $9 - $25[cite: 1].
    * **RDS PostgreSQL:** $12 - $35[cite: 1].
    * **VPC Endpoints:** $20 - $70[cite: 1].

---

### 8. Next Steps

* **Cost Control:** Temporarily disable the Bastion host and Custom domain during initial phases to reduce fixed costs[cite: 1].
* **DB Optimization:** Maintain a single RDS instance (Single-AZ, small configuration)[cite: 1].
* **Monitoring:** Set appropriate CloudWatch log retention periods to avoid unnecessary storage fees[cite: 1].

---

### 9. Expected Results

* **Efficiency:** Entry time for financial records reduced from 3 minutes to 10 seconds through AI-assisted tools[cite: 1].
* **Accuracy:** Achieve 95% accuracy for localized data processing using advanced Vision AI models[cite: 1].
* **Scalability:** Ready to handle 10,000+ users with near-zero maintenance costs during idle periods[cite: 1].

---

### 10. Recovery Strategy

* **Automated Deployment:** Use standardized image/deployment pipelines to minimize configuration errors[cite: 1].
* **Data Recovery:** Leverage RDS automated backup mechanisms to ensure data consistency and restore capabilities[cite: 1].
* **Incident Monitoring:** Utilize CloudWatch for rapid detection and resolution of errors to minimize system downtime[cite: 1].