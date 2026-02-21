@echo off
REM Valu Carz - Quick Start Script for Windows

echo.
echo ========================================
echo   Valu Carz - Quick Start
echo ========================================
echo.

REM Check if backend venv exists, if not create it
if not exist "backend\venv" (
    echo [1/5] Creating Python virtual environment...
    cd backend
    python -m venv venv
    call venv\Scripts\activate.bat
    echo [2/5] Installing backend dependencies...
    pip install -r requirements.txt
    cd ..
) else (
    echo [1/5] Virtual environment already exists
)

REM Check if frontend node_modules exists, if not install
if not exist "frontend\node_modules" (
    echo [3/5] Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
) else (
    echo [2/5] Frontend dependencies already installed
)

echo.
echo ========================================
echo   Starting Services
echo ========================================
echo.
echo Opening 2 new terminals...
echo.

REM Start backend
start cmd /k "cd backend && venv\Scripts\activate.bat && echo Backend starting on port 8000... && python main.py"

REM Wait a moment for backend to start
timeout /t 3 /nobreak

REM Start frontend
start cmd /k "cd frontend && echo Frontend starting on port 3000... && npm start"

echo.
echo ========================================
echo   Services Started!
echo ========================================
echo.
echo Backend API: http://localhost:8000
echo Frontend:    http://localhost:3000
echo API Docs:    http://localhost:8000/docs
echo.
echo Press Enter to exit this window...
pause
