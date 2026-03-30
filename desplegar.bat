@echo off
set SERVER_IP=164.92.167.42
set REPO_URL=https://github.com/jordancomunicacion-ops/webMONTAGU.git
set PROJECT_DIR=/root/webMONTAGU

echo [1/4] Subiendo cambios locales a GitHub...
git add .
git commit -m "Corrección de Traefik y SSL: %date% %time%"
git push origin main

echo [2/4] Conectando al servidor y actualizando código...
ssh root@%SERVER_IP% "if [ ! -d %PROJECT_DIR% ]; then git clone %REPO_URL% %PROJECT_DIR%; fi; cd %PROJECT_DIR% && git pull origin main"

echo [3/4] Reconstruyendo y Reiniciando contenedores (Docker)...
ssh root@%SERVER_IP% "cd %PROJECT_DIR% && docker compose up -d --build"

echo [4/4] ¡Despliegue completado! Visita https://www.montaguoriginals.com
pause
