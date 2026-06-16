from pydantic import BaseModel, Field


class KMeansRequest(BaseModel):
    points: list[list[float]] = Field(..., min_length=1)
    k: int = Field(..., ge=1)
    max_iterations: int = Field(default=10, ge=1, le=100)
