# KMeans Visualizer

Interactive machine learning visualization application that demonstrates how the K-Means clustering algorithm works step by step.

## Tech Stack

### Backend

- Python 3.13
- FastAPI
- NumPy

### Planned Frontend

- React
- Vite
- Plotly

### Planned DevOps

- Docker
- Docker Compose
- Kubernetes
- GitHub Actions

## Project Structure

```text
KMeansVisualizer/
├── backend/
│   ├── main.py
│   └── requirements.txt
├── frontend/
├── k8s/
└── README.md
```

## Getting Started

### Create Virtual Environment

```bash
py -m venv venv
```

### Activate Environment (Windows PowerShell)

```bash
.\venv\Scripts\Activate.ps1
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Backend

```bash
uvicorn main:app --reload
```

## API Documentation

Swagger UI:

```text
http://localhost:8000/docs
```

## Available Endpoints

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

## Code Quality

### Format Code

```bash
py -m black .
```

### Run Linter

```bash
py -m ruff check .
```

### Tools

- Black - Python code formatter
- Ruff - Python linter and import checker