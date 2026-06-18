# 🎯 KMeans Visualizer

Interactive machine learning visualization application that demonstrates how the **K-Means Clustering** algorithm works step by step.

The project is designed as an educational tool for learning machine learning fundamentals, clustering algorithms, data visualization, and modern software engineering practices.

---

## ✨ Current Features

### 📊 Dataset Generator

* Generate random 2D datasets
* Configure the number of points
* Return datasets through FastAPI API
* Prepare datasets for clustering experiments

### 🎯 K-Means Clustering Engine

* Custom K-Means implementation using NumPy
* Configurable number of clusters (k)
* Configurable maximum number of iterations
* Random centroid initialization
* Point-to-centroid assignment
* Centroid recalculation
* Inertia (loss) calculation
* Iteration history tracking
* Final centroid calculation

### 🐳 Dockerized Development Environment

* Backend Docker container
* Frontend Docker container
* Docker Compose orchestration
* One-command local environment startup
* Containerized FastAPI application
* Containerized React application

### ☸️ Kubernetes Deployment

* Backend Deployment
* Frontend Deployment
* Backend Service
* Frontend Service
* Kubernetes Ingress
* Internal service discovery
* Container orchestration with Kubernetes
* Local Kubernetes deployment support

### 🚧 Planned Features

* Enhanced centroid movement visualization
* Inertia charts
* GitHub Actions CI/CD
* Cluster assignment visualization improvements
* Responsive UI
* Dark mode
* Linear Regression Visualizer

---

## 🛠️ Tech Stack

### Backend

* Python 3.13
* FastAPI
* NumPy

### Frontend

* React
* Vite
* JavaScript
* Axios
* SVG Visualization

### DevOps

* Docker
* Docker Compose
* Kubernetes
* Ingress
* GitHub Actions (planned)

---

## 📁 Project Structure

```text
KMeansVisualizer/
├── backend/
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── dataset.py
│   │   └── kmeans.py
│   │
│   ├── services/
│   │   ├── __init__.py
│   │   ├── dataset_service.py
│   │   └── kmeans_service.py
│   │
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── main.py
│   ├── requirements.txt
│   └── pyproject.toml
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ClusteringMetrics.jsx
│   │   │   ├── DatasetGenerator.jsx
│   │   │   ├── IterationControls.jsx
│   │   │   ├── KMeansControls.jsx
│   │   │   └── ScatterPlot.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   └── ingress.yaml
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## 🚀 Backend Setup

### Clone Repository

```bash
git clone <repository-url>
cd KMeansVisualizer
```

### Create Virtual Environment

```bash
cd backend
py -m venv venv
```

### Activate Virtual Environment

```bash
.\venv\Scripts\Activate.ps1
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Backend

```bash
python -m uvicorn main:app --reload
```

Backend will be available at:

```text
http://localhost:8000
```

Swagger UI:

```text
http://localhost:8000/docs
```

---

## 💻 Frontend Setup

### Install Dependencies

```bash
cd frontend
npm install
```

### Run Frontend

```bash
npm run dev
```

Frontend will be available at:

```bash
http://localhost:5173
```

### Verify Frontend Build

```bash
npm run build
```

---

## 🐳 Docker Setup

### Build and Start All Services

```bash
docker compose up --build
```

Services will be available at:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:8000
Swagger:  http://localhost:8000/docs
```

### Stop Services

```bash
docker compose down
```
--- 

## ☸️ Kubernetes Setup

### Build Local Docker Images

```bash
docker build -t kmeans-backend:latest ./backend
docker build -t kmeans-frontend:latest ./frontend
```

### Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

### Verify Resources

```bash
kubectl get pods
kubectl get services
kubectl get ingress
```

### Access Backend

```bash
kubectl port-forward service/kmeans-backend-service 8000:8000
```

Backend will be available at:

```text
http://localhost:8000
```

### Access Frontend

```bash
kubectl port-forward service/kmeans-frontend-service 5173:5173
```

Frontend will be available at:

```text
http://localhost:5173
```

### Remove Kubernetes Resources

```bash
kubectl delete -f k8s/
```
---

## 🔗 Available Endpoints

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

### Generate Dataset

```http
POST /datasets/generate
```

Request:

```json
{
  "points": 100
}
```

Response:

```json
{
  "points": [
    [12.5, 45.1],
    [22.8, 11.3]
  ]
}
```

### Run K-Means

```http
POST /kmeans/steps
```

Request:

```json
{
  "points": [
    [1, 2],
    [2, 1],
    [8, 9],
    [9, 8]
  ],
  "k": 2,
  "max_iterations": 10
}
```

Response:

```json
{
  "iterations": [...],
  "final_centroids": [...]
}
```

---

## 📚 API Documentation

Swagger UI:

```text
http://localhost:8000/docs
```

---

## 📸 Current Application Preview

### Frontend

* Dataset generation UI
* K-Means execution UI
* Scatter plot visualization
* Cluster color visualization
* Centroid visualization
* Iteration slider
* Previous / Next controls
* Play / Pause animation
* Reset animation
* Clustering metrics dashboard

### Backend

* Root API endpoint
* Health check endpoint
* Dataset generation API
* K-Means clustering API
* Iteration tracking
* Inertia calculation
* Swagger documentation

### Infrastructure

* Dockerized backend
* Dockerized frontend
* Docker Compose environment
* Kubernetes deployments
* Kubernetes services
* Kubernetes ingress

---

## ✅ Code Quality

### Backend Code Formatting

```bash
cd backend
py -m black .
```

### Run Backend Linter

```bash
cd backend
py -m ruff check .
```

### Auto-Fix Backend Linter Issues

```bash
cd backend
py -m ruff check . --fix
```

### Frontend Lint

```bash
cd frontend
npm run lint
```

### Validate Docker Compose

```bash
docker compose config
```

### Build Backend Docker Image

```bash
docker build -t kmeans-backend ./backend
```

### Build Frontend Docker Image

```bash
docker build -t kmeans-frontend ./frontend
```

### Validate Kubernetes Resources

```bash
kubectl apply --dry-run=client -f k8s/
```
### View Kubernetes Resources

```bash
kubectl get pods
kubectl get services
kubectl get ingress
```
---

## 🔧 Development Tools

* `Black` - Python formatter
* `Ruff` - Python linter
* `React` - Frontend UI
* `Vite` - Frontend tooling
* `Axios` - API communication
* `FastAPI` - Backend API
* `Swagger UI` - API documentation
* `Docker` - Containerization
* `Docker Compose` - Local orchestration
* `Kubernetes` - Container orchestration
* `Ingress` - Traffic routing
* `GitHub Actions` - CI/CD (planned)

---

## 🎓 Learning Goals

This project demonstrates:

* Machine Learning Fundamentals
* K-Means Clustering Algorithm
* Numerical Computing with NumPy
* FastAPI Backend Development
* API Design and Validation
* React State Management
* API Integration with Axios
* Interactive Algorithm Visualization
* Frontend-Backend Communication
* Data Visualization
* Docker Containerization
* Docker Compose Orchestration
* Kubernetes Deployments
* Kubernetes Services
* Kubernetes Ingress
* CI/CD Automation (planned)