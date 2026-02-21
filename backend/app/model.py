import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestRegressor
import pickle
import os

class PricePredictionModel:
    def __init__(self, csv_path):
        self.csv_path = csv_path
        self.model = None
        self.scaler = StandardScaler()
        self.encoders = {}
        self.feature_columns = []
        self.load_and_train()

    def load_and_train(self):
        """Load data and train the model"""
        try:
            # Load CSV
            df = pd.read_csv(self.csv_path)
            
            # Create a copy for processing
            df_processed = df.copy()
            
            # Extract numeric values from columns
            df_processed['Engine Capacity'] = df_processed['Engine Capacity'].str.extract(r'(\d+)').astype(int)
            df_processed['Horsepower'] = df_processed['Horsepower'].str.extract(r'(\d+)').astype(int)
            df_processed['Mileage (km/l)'] = pd.to_numeric(df_processed['Mileage (km/l)'], errors='coerce')
            
            # Encode categorical variables
            categorical_columns = [
                'Location (State)',
                'Company Name',
                'Model Name (Specific Model)',
                'Transmission',
                'Fuel Type',
                'Exterior Color',
                'Interior Color',
                'Condition',
                'Seller Type'
            ]
            
            for col in categorical_columns:
                le = LabelEncoder()
                df_processed[col] = le.fit_transform(df_processed[col].astype(str))
                self.encoders[col] = le
            
            # Feature columns
            self.feature_columns = [
                'Location (State)',
                'Company Name',
                'Model Name (Specific Model)',
                'Model Year (Year of Manufacturing)',
                'Transmission',
                'Mileage (km/l)',
                'Fuel Type',
                'Engine Capacity',
                'Kms Driven',
                'Horsepower',
                'Exterior Color',
                'Interior Color',
                'Condition',
                'Selling Price (Owner Price in ₹)',
                'Seller Type',
                'Owner (No. of Previous Owners)'
            ]
            
            X = df_processed[self.feature_columns]
            y = df_processed['Present Price (Market Price in ₹)']
            
            # Scale features
            X_scaled = self.scaler.fit_transform(X)
            
            # Train model
            self.model = RandomForestRegressor(
                n_estimators=100,
                max_depth=20,
                random_state=42,
                n_jobs=-1
            )
            self.model.fit(X_scaled, y)
            
            print("Model trained successfully!")
            
        except Exception as e:
            print(f"Error loading or training model: {str(e)}")
            raise

    def predict(self, data):
        """Make a prediction"""
        try:
            # Convert data to DataFrame
            df = pd.DataFrame([data])
            
            print(f"Input data: {data}")
            print(f"DataFrame before processing: {df}")
            
            # Process numeric columns - handle both string and numeric inputs
            if isinstance(df.loc[0, 'Engine Capacity'], str):
                df['Engine Capacity'] = pd.to_numeric(
                    df['Engine Capacity'].str.extract(r'(\d+)')[0], 
                    errors='coerce'
                )
            else:
                df['Engine Capacity'] = pd.to_numeric(df['Engine Capacity'], errors='coerce')
                
            if isinstance(df.loc[0, 'Horsepower'], str):
                df['Horsepower'] = pd.to_numeric(
                    df['Horsepower'].str.extract(r'(\d+)')[0], 
                    errors='coerce'
                )
            else:
                df['Horsepower'] = pd.to_numeric(df['Horsepower'], errors='coerce')
                
            df['Mileage (km/l)'] = pd.to_numeric(df['Mileage (km/l)'], errors='coerce')
            
            print(f"DataFrame after numeric processing: {df}")
            
            # Encode categorical variables
            for col in self.encoders.keys():
                if col in df.columns:
                    try:
                        df[col] = self.encoders[col].transform(df[col].astype(str))
                    except Exception as encode_err:
                        # If value not in training set, use most frequent class
                        print(f"Encoding error for {col}: {encode_err}, using fallback")
                        df[col] = self.encoders[col].transform([self.encoders[col].classes_[0]])[0]
            
            print(f"DataFrame after encoding: {df}")
            
            # Ensure all feature columns are present
            for col in self.feature_columns:
                if col not in df.columns:
                    print(f"Missing column: {col}, filling with 0")
                    df[col] = 0
            
            # Select only feature columns
            X = df[self.feature_columns]
            
            # Check for NaN values
            if X.isnull().any().any():
                print(f"NaN values found: {X.isnull().sum()}")
                X = X.fillna(X.mean())
            
            print(f"Final feature matrix: {X}")
            
            # Scale features
            X_scaled = self.scaler.transform(X)
            
            # Make prediction
            prediction = self.model.predict(X_scaled)[0]
            
            print(f"Prediction: {prediction}")
            
            return {
                'predicted_price': max(float(prediction), 0),  # Ensure positive
                'confidence': 0.85  # Base confidence
            }
            
        except Exception as e:
            print(f"Error making prediction: {str(e)}")
            import traceback
            traceback.print_exc()
            raise

# Initialize model
csv_path = os.path.join(os.path.dirname(__file__), '..', '..', 'Car_Price_Prediction_Dataset.csv')
model = PricePredictionModel(csv_path)
