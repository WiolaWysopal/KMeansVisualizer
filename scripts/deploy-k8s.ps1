Write-Host "Cleaning previous Kubernetes resources..."

kubectl delete -f k8s/ --ignore-not-found=true

Write-Host "Building Docker images..."

docker build -t kmeans-backend:latest ./backend
docker build -t kmeans-frontend:latest ./frontend

Write-Host "Deploying Kubernetes resources..."

kubectl apply -f k8s/

Write-Host "Waiting for deployments..."

kubectl rollout status deployment/kmeans-backend
kubectl rollout status deployment/kmeans-frontend

Write-Host ""
Write-Host "Current resources:"

kubectl get pods
kubectl get services
kubectl get ingress
kubectl get hpa

Write-Host ""
Write-Host "Kubernetes deployment completed."