import numpy as np


def calculate_inertia(
    points: np.ndarray, centroids: np.ndarray, assignments: np.ndarray
) -> float:
    inertia = 0.0

    for index, point in enumerate(points):
        assigned_centroid = centroids[assignments[index]]
        distance = np.linalg.norm(point - assigned_centroid)
        inertia += distance**2

    return float(inertia)


def run_kmeans(points: list[list[float]], k: int, max_iterations: int):
    data = np.array(points, dtype=float)

    if k > len(data):
        raise ValueError("Number of clusters cannot be greater than number of points.")

    random_indices = np.random.choice(len(data), size=k, replace=False)
    centroids = data[random_indices]

    iterations = []

    for iteration_number in range(1, max_iterations + 1):
        distances = np.linalg.norm(data[:, np.newaxis] - centroids, axis=2)
        assignments = np.argmin(distances, axis=1)

        inertia = calculate_inertia(data, centroids, assignments)

        iterations.append(
            {
                "iteration": iteration_number,
                "centroids": centroids.tolist(),
                "assignments": assignments.tolist(),
                "inertia": inertia,
            }
        )

        new_centroids = []

        for cluster_index in range(k):
            cluster_points = data[assignments == cluster_index]

            if len(cluster_points) == 0:
                new_centroids.append(centroids[cluster_index])
            else:
                new_centroids.append(cluster_points.mean(axis=0))

        new_centroids = np.array(new_centroids)

        if np.allclose(centroids, new_centroids):
            break

        centroids = new_centroids

    return {
        "iterations": iterations,
        "final_centroids": centroids.tolist(),
    }
