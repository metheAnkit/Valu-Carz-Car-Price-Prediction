# Valu Carz - Car Price Prediction Application

A full-stack web application for predicting car prices using AI-powered machine learning models.

## 🚀 Features

- **AI-Powered Price Prediction**: Accurate car price predictions based on multiple factors
- **Comprehensive Car Explorer**: Browse and search through a wide collection of vehicles
- **User-Friendly Interface**: Intuitive and responsive design for all devices
- **Real-time Predictions**: Get instant price valuations
- **Detailed Vehicle Information**: Input various car specifications for accurate predictions

## 🏗️ Project Structure

```
Valu Carz/
├── frontend/                 # React.js application
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── styles/         # Global styles
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/                  # FastAPI application
│   ├── app/
│   │   ├── main.py         # FastAPI app
│   │   ├── model.py        # ML model
│   │   └── schemas.py      # Pydantic schemas
│   ├── main.py             # Entry point
│   └── requirements.txt
│
└── Car_Price_Prediction_Dataset.csv  # Training data
```

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**
- **pip**

## 🛠️ Installation & Setup

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the FastAPI server:
```bash
python main.py
```

Or use uvicorn directly:
```bash
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

The backend API will be available at `http://localhost:8000`

## 🎯 Usage

### Making a Prediction

1. Navigate to the "Predict Price" page
2. Fill in the vehicle details:
   - Location (State)
   - Company Name
   - Model Name
   - Model Year
   - Transmission type
   - Mileage
   - Fuel type
   - Engine capacity
   - Kilometers driven
   - Horsepower
   - Colors (interior & exterior)
   - Vehicle condition
   - Selling price
   - Present price
   - Seller type
   - Number of previous owners

3. Click "Predict Price" to get the market valuation

### Exploring Cars

1. Go to the "Car Explorer" page
2. Browse the car collection
3. Use filters to search by:
   - Brand
   - Fuel type
   - Keywords

## 📊 API Endpoints

### Health Check
```
GET /health
```

### Price Prediction
```
POST /predict
Content-Type: application/json

{
  "location": "Mumbai",
  "companyName": "BMW",
  "modelName": "M4",
  ...
}
```

### Get Options
```
GET /options
```
Returns all available options for dropdowns.

## 🎨 Pages

1. **Home** - Landing page with overview and key features
2. **Predict Price** - Form for car price prediction
3. **Car Explorer** - Browse and search vehicles
4. **About** - Information about Valu Carz
5. **Privacy Policy** - Data protection information
6. **Terms of Use** - Usage terms and conditions

## 🔧 Technology Stack

### Frontend
- React.js
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- Axios for API calls
- Lucide React for icons

### Backend
- FastAPI
- scikit-learn for ML models
- pandas for data processing
- numpy for numerical operations

## 📝 Configuration

### Environment Variables

**Frontend (.env)**
```
VITE_API_URL=http://localhost:8000
```

## 🖼️ Car Explorer Images

- Local image folder: `frontend/public/images/explorer/`
- Naming rule: `car-1.png`, `car-2.png`, ..., `car-200.png`
- The explorer now auto-loads images by car id using `/images/explorer/car-{id}.png`
- If a local file is missing, it falls back to the existing remote URL, then to placeholder

**Backend**
Uses `Car_Price_Prediction_Dataset.csv` automatically

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
```

### Backend (Heroku/AWS)
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app.main:app
```

## 📄 License

© 2026 Valu Carz. All rights reserved.
