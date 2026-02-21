#!/bin/bash

# Valu Carz - Quick Start Script for macOS/Linux

echo ""
echo "========================================"
echo "  Valu Carz - Quick Start"
echo "========================================"
echo ""

# Check if backend venv exists, if not create it
if [ ! -d "backend/venv" ]; then
    echo "[1/5] Creating Python virtual environment..."
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    echo "[2/5] Installing backend dependencies..."
    pip install -r requirements.txt
    cd ..
else
    echo "[1/5] Virtual environment already exists"
fi

# Check if frontend node_modules exists, if not install
if [ ! -d "frontend/node_modules" ]; then
    echo "[3/5] Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
else
    echo "[2/5] Frontend dependencies already installed"
fi

echo ""
echo "========================================"
echo "  Starting Services"
echo "========================================"
echo ""
echo "Opening 2 new terminals..."
echo ""

# Start backend
open -a Terminal ./start_backend.sh

# Wait a moment for backend to start
sleep 3

# Start frontend
open -a Terminal ./start_frontend.sh

echo ""
echo "========================================"
echo "  Services Started!"
echo "========================================"
echo ""
echo "Backend API: http://localhost:8000"
echo "Frontend:    http://localhost:3000"
echo "API Docs:    http://localhost:8000/docs"
echo ""
