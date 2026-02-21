# 🚀 Valu Carz - Quick Commands Reference

## ⚡ Quick Start (Choose One)

### Option 1: Windows Batch Script (Easiest)
```bash
# Double-click this file or run:
start.bat
```
✅ Opens both frontend and backend automatically

### Option 2: Manual - Windows
```bash
# Terminal 1 - Backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python main.py

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

### Option 3: Manual - macOS/Linux
```bash
# Terminal 1 - Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

---

## 📍 Access Points

| Resource | URL | Purpose |
|----------|-----|---------|
| App | http://localhost:3000 | Main application |
| API Docs | http://localhost:8000/docs | Swagger UI |
| API ReDoc | http://localhost:8000/redoc | Alternative docs |
| Health | http://localhost:8000/health | Backend status |

---

## 🔧 Backend Commands

```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run server
python main.py

# Or with uvicorn
uvicorn app.main:app --reload

# Deactivate virtual environment
deactivate

# View installed packages
pip list

# Update packages
pip install --upgrade -r requirements.txt
```

---

## 🎨 Frontend Commands

```bash
# Install dependencies
npm install

# Start development
npm start

# Build for production
npm run build

# Run tests
npm test

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check npm version
npm --version

# Check Node version
node --version
```

---

## 🔌 API Curl Examples

### Health Check
```bash
curl http://localhost:8000/health
```

### Get Available Options
```bash
curl http://localhost:8000/options
```

### Predict Price
```bash
curl -X POST http://localhost:8000/predict \
  -H "Content-Type: application/json" \
  -d '{
    "location": "Telangana",
    "companyName": "Hyundai",
    "modelName": "Creta",
    "modelYear": 2023,
    "transmission": "Automatic",
    "mileage": 15.5,
    "fuelType": "Petrol",
    "engineCapacity": "1998 cc",
    "kmsDriven": 50000,
    "horsepower": "118 HP",
    "exteriorColor": "Black",
    "interiorColor": "Brown",
    "condition": "Good",
    "sellingPrice": 1500000,
    "presentPrice": 2000000,
    "sellerType": "Dealer",
    "owner": 1
  }'
```

---

## 🐛 Troubleshooting Quick Fixes

### Backend Port in Use
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :8000
kill -9 <PID>
```

### Frontend Port in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Missing Dependencies
```bash
# Backend
pip install -r requirements.txt

# Frontend
npm install
```

### Module Not Found
```bash
# Backend
pip install --upgrade -r requirements.txt

# Frontend
rm -rf node_modules package-lock.json
npm install
```

---

## 📁 Project Navigation

```bash
# Go to backend
cd backend

# Go to frontend
cd frontend

# Go to backend from anywhere
cd ~/path/to/Valu\ Carz/backend

# Go to frontend from anywhere
cd ~/path/to/Valu\ Carz/frontend

# List files in current directory
ls          # macOS/Linux
dir         # Windows

# Check current directory
pwd         # macOS/Linux
cd          # Windows
```

---

## 📝 File Editing Commands

### Create New File
```bash
# Windows
type nul > filename.txt

# macOS/Linux
touch filename.txt
```

### View File Content
```bash
# macOS/Linux
cat filename.txt

# Windows
type filename.txt
```

### Edit Files
```bash
# VS Code
code filename.txt

# Nano (macOS/Linux)
nano filename.txt

# Vim
vim filename.txt
```

---

## 🚀 Deployment Commands

### Build Frontend
```bash
cd frontend
npm run build
# Output: frontend/build/
```

### Prepare Backend for Production
```bash
cd backend

# Install production server
pip install gunicorn

# Run with gunicorn (4 workers)
gunicorn -w 4 -b 0.0.0.0:8000 app.main:app
```

### Deploy to Vercel (Frontend)
```bash
npm install -g vercel
cd frontend
vercel
```

### Deploy to Heroku (Backend)
```bash
# Install Heroku CLI
# Login
heroku login

# Create Procfile
echo "web: gunicorn -w 4 -b 0.0.0.0:\$PORT app.main:app" > Procfile

# Deploy
git push heroku main
```

---

## 📊 Monitoring Commands

### Check Backend Logs
```bash
# Look for errors
grep -i error app.log

# Watch logs live (macOS/Linux)
tail -f app.log
```

### Check npm Package Versions
```bash
npm outdated
```

### Update npm Packages
```bash
npm update
npm install -g npm@latest
```

---

## 🔍 Search and Find Commands

### Find Files
```bash
# macOS/Linux - Find all Python files
find . -name "*.py"

# Windows - Find all JSX files
forfiles /S /M *.jsx

# Find specific text in files
grep -r "search_term" ./src
```

### Search in Code
```bash
# macOS/Linux
grep -rn "text_to_find" .

# Windows
findstr /S "text_to_find" *.jsx
```

---

## 🔐 Environment Variables

### Set Frontend API URL
```bash
# Windows
set REACT_APP_API_URL=http://localhost:8000

# macOS/Linux
export REACT_APP_API_URL=http://localhost:8000
```

### Check Environment Variables
```bash
# Windows
echo %REACT_APP_API_URL%

# macOS/Linux
echo $REACT_APP_API_URL
```

---

## 📞 Help Commands

### Get Command Help
```bash
# Python
python --help

# npm
npm help

# Node
node --help
```

### Check Versions
```bash
python --version
pip --version
node --version
npm --version
```

---

## 🎯 Development Workflow

```bash
# 1. Start backend
cd backend
python main.py

# 2. In new terminal, start frontend
cd frontend
npm start

# 3. Open app
# Browser: http://localhost:3000

# 4. Make changes (files auto-reload)

# 5. Test features
# - Test all pages
# - Fill prediction form
# - Check console for errors (F12)
```

---

## 🔄 Common Development Tasks

### Add New NPM Package
```bash
cd frontend
npm install package-name
```

### Add New Python Package
```bash
cd backend
pip install package-name
pip freeze > requirements.txt
```

### Remove Package
```bash
# npm
npm uninstall package-name

# pip
pip uninstall package-name
```

### Update All Packages
```bash
# npm
npm update

# pip
pip install --upgrade -r requirements.txt
```

---

## 📚 Documentation Links

```
Main Documentation:     ./README.md
Setup Instructions:     ./SETUP_INSTRUCTIONS.md
Complete Guide:         ./COMPLETE_GUIDE.md
Project Summary:        ./PROJECT_SUMMARY.md
File Inventory:         ./FILE_INVENTORY.md
Frontend Docs:          ./frontend/README.md
Backend Docs:           ./backend/README.md
```

---

## ✅ Pre-Launch Checklist

```bash
# Backend ready?
curl http://localhost:8000/health

# Frontend loads?
curl http://localhost:3000

# Can predict?
# Visit http://localhost:3000/predict-price and try

# All pages work?
# Check: Home, Predict, Explorer, About, Privacy, Terms

# No errors?
# Check: Browser console (F12) and Backend terminal
```

---

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [Tailwind Docs](https://tailwindcss.com)
- [scikit-learn Docs](https://scikit-learn.org)

---

## 💡 Tips & Tricks

### Speed Up npm Install
```bash
npm install --legacy-peer-deps
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Speed Up Python
```bash
# Use PyPy instead of Python
pip install pypy3
```

### Monitor Backend
```bash
# Watch file changes and auto-restart
pip install watchdog
```

---

## 🆘 Emergency Reset

### Reset Everything
```bash
# Remove everything and start fresh
rm -rf backend/venv
rm -rf frontend/node_modules
rm -rf frontend/.env.local

# Reinstall
cd backend
python -m venv venv
pip install -r requirements.txt

cd ../frontend
npm install
```

---
