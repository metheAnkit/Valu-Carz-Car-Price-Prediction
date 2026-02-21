# Development Instructions for Valu Carz

## 🎯 Getting Started

This document provides step-by-step instructions to run the Valu Carz application locally.

## 📦 System Requirements

- **OS**: Windows 10/11, macOS, or Linux
- **Node.js**: v16.0.0 or higher
- **Python**: v3.8 or higher
- **npm**: v8.0.0 or higher
- **RAM**: At least 4GB
- **Storage**: At least 2GB

## 🚀 Step-by-Step Setup

### Phase 1: Backend Setup

#### 1.1 Navigate to Backend Directory
```bash
cd "Valu Carz/backend"
```

#### 1.2 Create Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

#### 1.3 Install Dependencies
```bash
pip install -r requirements.txt
```

**Note**: First run will take 2-3 minutes as it trains the ML model.

#### 1.4 Start Backend Server
```bash
python main.py
```

**Expected Output**:
```
Model trained successfully!
INFO:     Started server process [XXXX]
INFO:     Waiting for application startup.
INFO:     Application startup complete
INFO:     Uvicorn running on http://0.0.0.0:8000
```

✅ Backend is ready at http://localhost:8000

### Phase 2: Frontend Setup

#### 2.1 Open New Terminal/Command Prompt

#### 2.2 Navigate to Frontend Directory
```bash
cd "Valu Carz/frontend"
```

#### 2.3 Install Dependencies
```bash
npm install
```

**Note**: This may take 3-5 minutes

#### 2.4 Start Frontend Server
```bash
npm start
```

**Expected Output**:
```
webpack compiled successfully
Compiled successfully!
Local: http://localhost:3000
```

✅ Frontend is ready at http://localhost:3000

## 🌐 Access the Application

Once both servers are running:

1. **Frontend**: Open http://localhost:3000 in your browser
2. **Backend API Docs**: Visit http://localhost:8000/docs
3. **Backend ReDoc**: Visit http://localhost:8000/redoc

## 📝 Available Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | http://localhost:3000 | Landing page |
| Predict Price | http://localhost:3000/predict-price | Price prediction form |
| Car Explorer | http://localhost:3000/car-explorer | Browse cars |
| About | http://localhost:3000/about | Company information |
| Privacy Policy | http://localhost:3000/privacy-policy | Privacy terms |
| Terms of Use | http://localhost:3000/terms-of-use | Usage terms |

## 🧪 Testing the Application

### 1. Test Home Page
- Open http://localhost:3000
- Verify all sections load
- Click on navigation items

### 2. Test Predict Price
- Navigate to http://localhost:3000/predict-price
- Fill in sample vehicle details:
  - Location: "Telangana"
  - Company: "Hyundai"
  - Model: "Creta"
  - Year: 2023
  - Mileage: 15.5
  - And other required fields
- Click "Predict Price"
- Verify prediction appears

### 3. Test Car Explorer
- Navigate to http://localhost:3000/car-explorer
- Try searching for cars
- Use filters by brand and fuel type

### 4. Test Navigation
- Verify all navigation links work
- Check responsive design on mobile

## 🔧 Troubleshooting

### Backend Issues

**Error: "No module named 'pandas'"**
```bash
pip install -r requirements.txt
```

**Error: "CSV file not found"**
- Ensure `Car_Price_Prediction_Dataset.csv` is in the project root
- Check file path in `app/model.py`

**Port 8000 already in use**
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :8000
kill -9 <PID>
```

### Frontend Issues

**Error: "npm command not found"**
- Reinstall Node.js from nodejs.org
- Restart terminal after installation

**Error: "Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

## 📊 API Testing

### Using Swagger UI
1. Go to http://localhost:8000/docs
2. Click on "POST /predict"
3. Click "Try it out"
4. Fill in sample data
5. Click "Execute"

### Using cURL
```bash
curl -X POST "http://localhost:8000/predict" \
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

## 🎨 Customization

### Change Colors
Edit `/frontend/tailwind.config.js`

### Change API URL
Edit `/frontend/.env`

### Add New Features
- Add page components in `/frontend/src/pages/`
- Add backend routes in `/backend/app/main.py`

## 📚 Project Documentation

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)
- [Main README](README.md)

## 🆘 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review backend console for errors
3. Check browser console (F12) for frontend errors
4. Verify both servers are running
5. Ensure ports 3000 and 8000 are available

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [scikit-learn Documentation](https://scikit-learn.org)

## ✅ Checklist

- [ ] Backend server running on port 8000
- [ ] Frontend server running on port 3000
- [ ] Can access home page
- [ ] Can navigate to all pages
- [ ] Price prediction works
- [ ] Car explorer displays cars
- [ ] Responsive design works

## 📞 Support

For issues or questions:
- Email: support@valucarz.com
- Phone: +91 98765 43210

---

**Happy coding! 🚀**
