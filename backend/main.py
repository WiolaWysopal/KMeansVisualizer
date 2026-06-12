from fastapi import FastAPI

app = FastAPI(title="KMeans Visualizer API")


@app.get("/health")
def health_check():
    return {"status": "ok"}