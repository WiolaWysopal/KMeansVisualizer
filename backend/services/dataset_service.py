import numpy as np


def generate_dataset(num_points: int) -> list[list[float]]:
    data = np.random.rand(num_points, 2) * 100

    return data.tolist()
