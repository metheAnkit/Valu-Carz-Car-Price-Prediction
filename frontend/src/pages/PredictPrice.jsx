import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import axios from 'axios';

const PredictPrice = () => {
  const [formData, setFormData] = useState({
    location: '',
    companyName: '',
    modelName: '',
    modelYear: '',
    transmission: 'Automatic',
    mileage: '',
    fuelType: 'Petrol',
    engineCapacity: '',
    kmsDriven: '',
    horsepower: '',
    exteriorColor: '',
    interiorColor: '',
    condition: 'Good',
    sellingPrice: '',
    presentPrice: '',
    sellerType: 'Dealer',
    owner: '0',
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const locations = [
    // States (28)
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 
    'West Bengal',
    // Union Territories (8)
    'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli and Daman & Diu', 
    'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];
  const transmissions = ['Automatic', 'Manual'];
  const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Hydrogen', 'Electric Power', 'Solar Power'];
  const conditions = ['New', 'Like New', 'Good', 'Fair'];
  const sellerTypes = ['Dealer', 'Individual'];

  useEffect(() => {
    // Options data is available through the component constants above
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await axios.post('http://localhost:8000/predict', {
        ...formData,
        modelYear: parseInt(formData.modelYear),
        mileage: parseFloat(formData.mileage),
        kmsDriven: parseInt(formData.kmsDriven),
        sellingPrice: parseFloat(formData.sellingPrice),
        presentPrice: parseFloat(formData.presentPrice),
        owner: parseInt(formData.owner),
      });

      setPrediction({
        predictedPrice: response.data.predicted_price,
        confidence: response.data.confidence || 0.95,
      });
    } catch (err) {
      setError('Failed to predict price. Please check your inputs and try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
          <style>{`
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type="number"] {
              -moz-appearance: textfield;
            }
          `}</style>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Predict Your Car Price
            </span>
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-8">
            Enter your car details to get an accurate market price prediction
          </p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Location (State or Union Territory) *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Select Location</option>
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="e.g., Maruti Suzuki"
                    />
                  </div>

                  {/* Model Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Model Name *
                    </label>
                    <input
                      type="text"
                      name="modelName"
                      value={formData.modelName}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="e.g., Swift"
                    />
                  </div>

                  {/* Model Year */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Model Year *
                    </label>
                    <input
                      type="number"
                      name="modelYear"
                      value={formData.modelYear}
                      onChange={handleChange}
                      min="2000"
                      max={new Date().getFullYear()}
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="2020"
                    />
                  </div>

                  {/* Transmission */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Transmission *
                    </label>
                    <select
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    >
                      {transmissions.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Mileage */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Mileage (km/l) *
                    </label>
                    <input
                      type="number"
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleChange}
                      step="0.01"
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="15.5"
                    />
                  </div>

                  {/* Fuel Type */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Fuel Type *
                    </label>
                    <select
                      name="fuelType"
                      value={formData.fuelType}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    >
                      {fuelTypes.map(fuel => (
                        <option key={fuel} value={fuel}>{fuel}</option>
                      ))}
                    </select>
                  </div>

                  {/* Engine Capacity */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Engine Capacity (cc) *
                    </label>
                    <input
                      type="number"
                      name="engineCapacity"
                      value={formData.engineCapacity}
                      onChange={handleChange}
                      required
                      min="500"
                      max="8000"
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="e.g., 1998"
                    />
                  </div>

                  {/* KMS Driven */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Kms Driven *
                    </label>
                    <input
                      type="number"
                      name="kmsDriven"
                      value={formData.kmsDriven}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="50000"
                    />
                  </div>

                  {/* Horsepower */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Horsepower (HP) *
                    </label>
                    <input
                      type="number"
                      name="horsepower"
                      value={formData.horsepower}
                      onChange={handleChange}
                      required
                      min="30"
                      max="1000"
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="e.g., 118"
                    />
                  </div>

                  {/* Exterior Color */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Exterior Color *
                    </label>
                    <input
                      type="text"
                      name="exteriorColor"
                      value={formData.exteriorColor}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="e.g., Red"
                    />
                  </div>

                  {/* Interior Color */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Interior Color *
                    </label>
                    <input
                      type="text"
                      name="interiorColor"
                      value={formData.interiorColor}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="e.g., Black"
                    />
                  </div>

                  {/* Condition */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Condition *
                    </label>
                    <select
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    >
                      {conditions.map(cond => (
                        <option key={cond} value={cond}>{cond}</option>
                      ))}
                    </select>
                  </div>

                  {/* Selling Price */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Selling Price (₹) *
                    </label>
                    <input
                      type="number"
                      name="sellingPrice"
                      value={formData.sellingPrice}
                      onChange={handleChange}
                      step="1000"
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="500000"
                    />
                  </div>

                  {/* Present Price */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Present Price (₹) *
                    </label>
                    <input
                      type="number"
                      name="presentPrice"
                      value={formData.presentPrice}
                      onChange={handleChange}
                      step="1000"
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="600000"
                    />
                  </div>

                  {/* Seller Type */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Seller Type *
                    </label>
                    <select
                      name="sellerType"
                      value={formData.sellerType}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    >
                      {sellerTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Owner */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Previous Owners *
                    </label>
                    <input
                      type="number"
                      name="owner"
                      value={formData.owner}
                      onChange={handleChange}
                      min="0"
                      max="10"
                      required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="0"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-3"
                >
                  {loading ? 'Predicting...' : 'Predict Price'}
                </Button>

                {error && (
                  <div className="bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-lg">
                    {error}
                  </div>
                )}
              </form>
            </Card>
          </motion.div>

          {/* Prediction Result */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {prediction && (
              <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 sticky top-24">
                <div className="space-y-6">
                  <div className="text-center">
                    <img src="/car-predict-price.png" alt="Car Analytics" className="w-24 h-24 mx-auto mb-4 rounded" />
                    <h3 className="text-2xl font-bold text-foreground">Predicted Price</h3>
                  </div>

                  <div className="bg-background/50 rounded-lg p-6 space-y-4">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">Estimated Market Price</p>
                      <p className="text-4xl font-bold text-accent">
                        ₹{prediction.predictedPrice.toLocaleString('en-IN', {
                          maximumFractionDigits: 0
                        })}
                      </p>
                    </div>

                    <div className="bg-primary/20 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Confidence Level</span>
                        <span className="text-sm font-semibold text-primary">
                          {(prediction.confidence * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-background/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                          style={{ width: `${prediction.confidence * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>• This prediction is based on market data and AI analysis</p>
                      <p>• Actual price may vary based on additional factors</p>
                      <p>• Use this as a reference for negotiations</p>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {!prediction && (
              <div className="text-center">
                <div className="space-y-4">
                  <img 
                    src="/car-predict-price.png" 
                    alt="Car Price Prediction" 
                    className="w-90 h-70 mx-auto rounded-2xl"
                    onError={(e) => { e.currentTarget.src = '/images/car-placeholder.svg'; }}
                  />
                  <Card className="p-6 bg-muted/50">
                    <p className="text-muted-foreground font-bold text-base">
                      Fill out the form and click "Predict Price" to see the estimated market value of your car.
                    </p>
                  </Card>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PredictPrice;
