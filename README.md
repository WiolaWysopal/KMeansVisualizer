# 🎯 KMeans Visualizer

Interactive machine learning visualization application that demonstrates how the **K-Means Clustering** algorithm works step by step.

The project is designed as an educational tool for learning machine learning fundamentals, clustering algorithms, data visualization, and modern software engineering practices.

---

## ✨ Current Features

### 📊 Dataset Generator

* Generate random 2D datasets
* Configure the number of points
* Visualize generated points in real time
* Interactive scatter plot rendering using SVG

### 🚧 Planned Features

* K-Means clustering algorithm implementation
* Step-by-step clustering visualization
* Centroid initialization and movement tracking
* Iteration controls (Next Step / Previous Step)
* Autoplay mode
* Inertia and convergence metrics
* AI-powered explanations of clustering results
* Docker & Kubernetes deployment
* CI/CD with GitHub Actions

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
│   ├── main.py
│   └── requirements.txt
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

## 🚀 Getting Started

### Create Virtual Environment

```bash
py -m venv venv
```

### Activate Environment (Windows PowerShell)

```bash
.\venv\Scripts\Activate.ps1
```

### Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### Run Backend

```bash
uvicorn main:app --reload
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Default frontend URL:

```text
http://localhost:5173
```

---

## 📚 API Documentation

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

---

## 📸 Current Application Preview

### Dataset Generator

* Select number of points
* Generate random datasets
* Display points on a scatter plot
* Prepare datasets for K-Means clustering

---

## ✅ Code Quality

### Format Code

```bash
py -m black .
```

### Run Linter

```bash
py -m ruff check .
```

### Frontend Build Verification

```bash
cd frontend
npm run build
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
* K-Means Clustering
* Data Visualization
* React Development
* API Development with FastAPI
* Containerization with Docker
* Kubernetes Deployment
* CI/CD Automation
* AI-Assisted Learning Applications
