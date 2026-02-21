from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import PredictionRequest, PredictionResponse
from app.model import model

# Create FastAPI app
app = FastAPI(
    title="Valu Carz API",
    description="Car Price Prediction API",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to Valu Carz API",
        "version": "1.0.0",
        "endpoints": {
            "predict": "/predict",
            "health": "/health"
        }
    }

@app.get("/health")
async def health():
    """Health check endpoint"""
    return {"status": "healthy"}

@app.post("/predict", response_model=PredictionResponse)
async def predict_price(request: PredictionRequest):
    """
    Predict car price based on vehicle details
    
    Args:
        request: PredictionRequest with vehicle details
    
    Returns:
        PredictionResponse with predicted price and confidence
    """
    try:
        # Convert request to dictionary
        data = {
            'Location (State)': request.location,
            'Company Name': request.companyName,
            'Model Name (Specific Model)': request.modelName,
            'Model Year (Year of Manufacturing)': request.modelYear,
            'Transmission': request.transmission,
            'Mileage (km/l)': request.mileage,
            'Fuel Type': request.fuelType,
            'Engine Capacity': request.engineCapacity,
            'Kms Driven': request.kmsDriven,
            'Horsepower': request.horsepower,
            'Exterior Color': request.exteriorColor,
            'Interior Color': request.interiorColor,
            'Condition': request.condition,
            'Selling Price (Owner Price in ₹)': request.sellingPrice,
            'Seller Type': request.sellerType,
            'Owner (No. of Previous Owners)': request.owner,
            'Present Price (Market Price in ₹)': request.presentPrice
        }
        
        # Make prediction
        result = model.predict(data)
        
        return PredictionResponse(
            predicted_price=result['predicted_price'],
            confidence=result['confidence'],
            message="Prediction successful"
        )
        
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Error making prediction: {str(e)}"
        )

@app.get("/options")
async def get_options():
    """Get available options for dropdowns"""
    return {
        "locations": [
            "Telangana", "Tamil Nadu", "Rajasthan", "Gujarat", "Punjab",
            "Karnataka", "West Bengal", "Delhi", "Maharashtra", "Kerala"
        ],
        "companies": [
            "Hyundai", "Volkswagen", "Audi", "Tata", "Mahindra", "Kia",
            "Mercedes-Benz", "Toyota", "Ford", "BMW", "Honda", "Maruti Suzuki"
        ],
        "models": [
            "X1", "Creta", "City", "EcoSport", "Innova", "Seltos", "Scorpio",
            "Swift", "A4", "C-Class", "Polo", "Baleno", "Altroz"
        ],
        "transmissions": ["Automatic", "Manual"],
        "fuelTypes": [
            "Petrol", "Diesel", "CNG", "Hydrogen", "Electric Power", "Solar Power"
        ],
        "engineCapacities": ["800 cc", "1197 cc", "1998 cc", "2996 cc"],
        "horsepowers": ["68 HP", "82 HP", "118 HP", "138 HP", "300 HP"],
        "colors": [
            "Red", "Blue", "Black", "White", "Silver", "Grey", "Green",
            "Gold", "Brown", "Beige", "Tan"
        ],
        "conditions": ["New", "Like New", "Good", "Fair"],
        "sellerTypes": ["Dealer", "Individual"]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
