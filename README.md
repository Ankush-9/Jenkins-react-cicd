# Jenkins React CI/CD Pipeline

This project demonstrates a complete CI/CD pipeline for a React application using Jenkins, Docker, and Kubernetes.

The base React app was originally cloned from another repository and modified to update the UI content (basic display components). The focus of this project is on automating build, containerization, and deployment workflows.

---

## **Project Overview**

- Cloned a React app and customized UI components  
- Implemented Jenkins Declarative Pipelines for CI and CD  
- Built and pushed Docker images to Docker Hub  
- Deployed the application on Kubernetes  

---

## **Tech Stack**

- Frontend: React  
- CI/CD: Jenkins (Declarative Pipelines)  
- Containerization: Docker  
- Orchestration: Kubernetes  
- Version Control: GitHub  

---

## **CI/CD Workflow**

### **Continuous Integration (CI Pipeline)**

The CI pipeline performs the following steps:

1. Clones the latest code from this repository  
2. Builds the React application  
3. Creates a Docker image using the provided Dockerfile  
4. Pushes the Docker image to Docker Hub  

---

### **Continuous Deployment (CD Pipeline)**

The CD pipeline handles deployment:

1. Clones the repository  
2. Pulls the latest Docker image from Docker Hub  
3. Deploys the application to Kubernetes using the `react-app.yaml` configuration  

---

## **Docker Configuration**

- The Dockerfile is located inside the react-app directory  
- Used to build the production-ready image of the React application  

---

## **Docker Hub Image**

The Docker image built via the CI pipeline is available at:

https://hub.docker.com/r/ankush6078/react-jenkins-app

---

## **Kubernetes Deployment**

- Deployment configuration is defined in:

react-app.yaml

- This file is used by the CD pipeline to deploy the application  

---

## **Project Structure**
Jenkins-React-CICD/
├── react-app/ 
│ ├── Dockerfile
│ └── Other react files and components
│
├── Jenkins/ 
│ ├── CI-pipeline  
│ └── CD-pipeline 
│
├── react-app.yaml 
└── README.md 

---

## **Key Features**

- Automated build and deployment pipeline  
- Separation of CI and CD processes  
- Dockerized React application  
- Kubernetes-based deployment  
- Simple and reproducible DevOps workflow  

---

## **Use Case**

This project is ideal for:

- Learning end-to-end CI/CD pipelines  
- Understanding Jenkins + Docker + Kubernetes integration  
- Demonstrating DevOps skills in a practical setup  

---

## **Notes**

- Only basic UI changes were made to the original React app  
- The primary goal is to showcase pipeline automation and deployment strategy  

---

## **Contribution**

Feel free to fork this repository and enhance the pipeline or application further.
The GitHub repo link for this react project is as https://github.com/Haider7214/react-app.git

