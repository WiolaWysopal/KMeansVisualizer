from pydantic import BaseModel, Field


class DatasetRequest(BaseModel):
    points: int = Field(default=100, ge=1, le=1000)
