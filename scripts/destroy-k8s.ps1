Write-Host "Removing Kubernetes resources..."

kubectl delete -f k8s/

Write-Host ""
Write-Host "Remaining resources:"
kubectl get pods
kubectl get services
kubectl get ingress
kubectl get hpa

Write-Host ""
Write-Host "Cleanup completed."