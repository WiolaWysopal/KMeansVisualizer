from fastapi import FastAPI, HTTPException

from schemas.dataset import DatasetRequest
from schemas.kmeans import KMeansRequest
from services.dataset_service import generate_dataset
from services.kmeans_service import run_kmeans

app = FastAPI(title="KMeans Visualizer API")


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.post("/datasets/generate")
def create_dataset(request: DatasetRequest):
    return {"points": generate_dataset(request.points)}


@app.post("/kmeans/steps")
def get_kmeans_steps(request: KMeansRequest):
    try:
        return run_kmeans(
            points=request.points,
            k=request.k,
            max_iterations=request.max_iterations,
        )
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error
