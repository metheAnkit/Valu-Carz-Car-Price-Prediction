# Valu Carz Backend

FastAPI application for Valu Carz - Car Price Prediction API

## Quick Start

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py
```

## API Documentation

Once running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Project Structure

```
app/
├── main.py       # FastAPI application and routes
├── model.py      # Machine learning model
├── schemas.py    # Pydantic request/response schemas
└── __init__.py   # Package init
```

## Environment Setup

The application automatically loads the `Car_Price_Prediction_Dataset.csv` from the project root.

## Key Features

- **RESTful API**: Built with FastAPI
- **ML Model**: Random Forest Regressor with scikit-learn
- **Data Processing**: Pandas for data manipulation
- **CORS Support**: Enables cross-origin requests
- **Type Validation**: Pydantic for request validation

## Endpoints

### Root
```
GET /
```
Returns API information

### Health Check
```
GET /health
```

### Predict Price
```
POST /predict
Content-Type: application/json
```

Request body:
```json
{
  "location": "Mumbai",
  "companyName": "BMW",
  "modelName": "M4",
  "modelYear": 2023,
  "transmission": "Automatic",
  "mileage": 12.5,
  "fuelType": "Petrol",
  "engineCapacity": "1998 cc",
  "kmsDriven": 50000,
  "horsepower": "300 HP",
  "exteriorColor": "Black",
  "interiorColor": "Brown",
  "condition": "Good",
  "sellingPrice": 5400000,
  "presentPrice": 5400000,
  "sellerType": "Dealer",
  "owner": 1
}
```

Response:
```json
{
  "predicted_price": 5250000.50,
  "confidence": 0.85,
  "message": "Prediction successful"
}
```

### Get Options
```
GET /options
```
Returns available options for all dropdowns

## Dependencies

- fastapi
- uvicorn
- pandas
- numpy
- scikit-learn
- pydantic
- python-multipart
- python-dotenv

## Model Details

- **Algorithm**: Random Forest Regressor
- **Features**: 16 input features
- **Training Data**: Car_Price_Prediction_Dataset.csv
- **Accuracy**: Confident prediction based on market data

## Deployment

For production deployment:

```bash
# Using Gunicorn
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app.main:app
```

## Notes

- The model is trained on startup
- Data preprocessing handles both numeric and categorical variables
- CORS is enabled for frontend communication
- Predictions are estimates and may vary based on additional factors
