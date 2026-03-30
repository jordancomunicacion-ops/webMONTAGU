@echo off
set SERVER_IP=164.92.167.42
set REPO_URL=https://github.com/jordancomunicacion-ops/webMONTAGU.git
set PROJECT_DIR=/root/webMONTAGU

echo [1/4] Committing and Pushing local changes...
git add .
git commit -m "Production deployment: %date% %time%"
git push origin main

echo [2/4] Connecting to server and pulling changes...
ssh root@%SERVER_IP% "if [ ! -d %PROJECT_DIR% ]; then git clone %REPO_URL% %PROJECT_DIR%; fi; cd %PROJECT_DIR% && git pull origin main"

echo [3/4] Rebuilding and Restarting containers...
ssh root@%SERVER_IP% "cd %PROJECT_DIR% && docker-compose up -d --build"

echo [4/4] Deployment complete! Visit https://www.montaguoriginals.com
pause
