from pydantic import BaseModel
from typing import Optional

class PredictionRequest(BaseModel):
    location: str
    companyName: str
    modelName: str
    modelYear: int
    transmission: str
    mileage: float
    fuelType: str
    engineCapacity: str
    kmsDriven: int
    horsepower: str
    exteriorColor: str
    interiorColor: str
    condition: str
    sellingPrice: float
    presentPrice: float
    sellerType: str
    owner: int

class PredictionResponse(BaseModel):
    predicted_price: float
    confidence: float
    message: Optional[str] = None
