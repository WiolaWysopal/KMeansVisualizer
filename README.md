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

* Centroid movement visualization
* Inertia charts
* Docker deployment
* Kubernetes deployment
* GitHub Actions CI/CD
* Cluster assignment visualization improvements
* Responsive UI
* Dark mode
* Docker deployment
* Kubernetes deployment
* GitHub Actions CI/CD
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
│   │   ├── __init__.py
│   │   ├── dataset.py
│   │   └── kmeans.py
│   │
│   ├── services/
│   │   ├── __init__.py
│   │   ├── dataset_service.py
│   │   └── kmeans_service.py
│   │
│   ├── venv/
│   ├── main.py
│   ├── requirements.txt
│   └── pyproject.toml
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   │
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
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
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

## 💻 Frontend Setup

### Install Dependencies

```bash
cd frontend
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend will be available at:

```bash
http://localhost:5173
```

## Verify Frontend Build

```bash
npm run build
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

---

## 🔧 Development Tools

* `Black` - Python formatter
* `Ruff` - Python linter
* `React` - Frontend UI
* `Vite` - Frontend tooling
* `Axios` - API communication
* `FastAPI` - Backend API
* `Swagger UI` - API documentation
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
* React State Management
* API Integration with Axios
* Interactive Algorithm Visualization
* Frontend-Backend Communication
* Data Visualization
* Docker Containerization (planned)
* Kubernetes Deployment (planned)
* CI/CD Automation (planned)