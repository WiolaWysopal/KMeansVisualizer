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

### 🚧 Planned Features

* React-based visualization
* Step-by-step clustering animation
* Centroid movement visualization
* Iteration controls (Next / Previous)
* Autoplay mode
* Inertia charts
* Docker deployment
* Kubernetes deployment
* GitHub Actions CI/CD

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
* SVG Visualization

### Planned DevOps

* Docker
* Docker Compose
* Kubernetes
* GitHub Actions

---

## 📁 Project Structure

```text
KMeansVisualizer/
├── backend/
│   ├── schemas/
│   │   ├── dataset.py
│   │   └── kmeans.py
│   │
│   ├── services/
│   │   ├── dataset_service.py
│   │   └── kmeans_service.py
│   │
│   ├── main.py
│   ├── requirements.txt
│   └── pyproject.toml
│
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── DatasetGenerator.jsx
│       │   └── ScatterPlot.jsx
│       ├── utils/
│       │   └── generateDataset.js
│       └── App.jsx
│
├── k8s/
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

### Backend API

* Dataset generation endpoint implemented
* K-Means clustering endpoint implemented
* Iteration history tracking implemented
* Inertia calculation implemented
* Swagger documentation available

---

## ✅ Code Quality

### Format Code

```bash
cd backend
py -m black .
```

### Run Linter

```bash
cd backend
py -m ruff check .
```

### Auto-Fix Linter Issues

```bash
cd backend
py -m ruff check . --fix
```
---

## 🔧 Development Tools

* `Black` - Python formatter
* `Ruff` - Python linter
* `React` - Frontend UI
* `Vite` - Frontend tooling
* `FastAPI` - Backend API
* `GitHub Actions` - CI/CD (planned)
* `Docker` & `Kubernetes` - Deployment (planned)

---

## 🎓 Learning Goals

This project demonstrates:

* Machine Learning Fundamentals
* K-Means Clustering Algorithm
* Numerical Computing with NumPy
* FastAPI Backend Development
* API Design and Validation
* React Frontend Development (planned)
* Data Visualization (planned)
* Docker Containerization (planned)
* Kubernetes Deployment (planned)
* CI/CD Automation (planned)