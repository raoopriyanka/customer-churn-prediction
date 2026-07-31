from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import os

app = FastAPI(
    title="Telco Customer Churn Prediction API",
    description="Enterprise-grade backend for churn analytics and machine learning inference.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_PATH = os.path.join(os.path.dirname(__file__), "../models/random_forest_churn.pkl")

try:
    model = joblib.load(MODEL_PATH)
except Exception as e:
    model = None

class CustomerData(BaseModel):
    gender: str
    SeniorCitizen: int
    Partner: str
    Dependents: str
    tenure: int
    InternetService: str
    PhoneService: str
    MultipleLines: str
    OnlineSecurity: str
    OnlineBackup: str
    DeviceProtection: str
    TechSupport: str
    StreamingTV: str
    StreamingMovies: str
    Contract: str
    PaperlessBilling: str
    PaymentMethod: str
    MonthlyCharges: float
    TotalCharges: float

@app.get("/")
def read_root():
    return {"message": "Welcome to the Telco Customer Churn Prediction API!"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "model_loaded": model is not None}

@app.post("/predict")
def predict_churn(data: CustomerData):
    if model is None:
        raise HTTPException(status_code=500, detail="Machine learning model is not loaded on the server.")
    
    try:
        raw_data = data.model_dump()
        
        mapped_data = {
            "Gender": raw_data["gender"],
            "Senior Citizen": raw_data["SeniorCitizen"],
            "Partner": raw_data["Partner"],
            "Dependents": raw_data["Dependents"],
            "Tenure Months": raw_data["tenure"],
            "Phone Service": raw_data["PhoneService"],
            "Multiple Lines": raw_data["MultipleLines"],
            "Internet Service": raw_data["InternetService"],
            "Online Security": raw_data["OnlineSecurity"],
            "Online Backup": raw_data["OnlineBackup"],
            "Device Protection": raw_data["DeviceProtection"],
            "Tech Support": raw_data["TechSupport"],
            "Streaming TV": raw_data["StreamingTV"],
            "Streaming Movies": raw_data["StreamingMovies"],
            "Contract": raw_data["Contract"],
            "Paperless Billing": raw_data["PaperlessBilling"],
            "Payment Method": raw_data["PaymentMethod"],
            "Monthly Charges": raw_data["MonthlyCharges"],
            "Total Charges": raw_data["TotalCharges"]
        }
        
        input_df = pd.DataFrame([mapped_data])
        
        if hasattr(model, "feature_names_in_"):
            input_df = input_df[model.feature_names_in_]
        
        # Encoding string categories to numeric if the estimator requires it
        for col in input_df.select_dtypes(include=['object']).columns:
            if not hasattr(model, "steps"):
                input_df[col] = input_df[col].map({
                    'Yes': 1, 'No': 0, 'Female': 1, 'Male': 0, 
                    'Month-to-month': 0, 'One year': 1, 'Two year': 2,
                    'Fiber optic': 2, 'DSL': 1, 'No internet service': 0, 'No phone service': 0,
                    'Electronic check': 3, 'Mailed check': 2, 'Bank transfer (automatic)': 1, 'Credit card (automatic)': 0
                }).fillna(0)

        prediction = int(model.predict(input_df)[0])
        probability = float(model.predict_proba(input_df)[0][1])
        
        return {
            "prediction": prediction,
            "churn_probability": round(probability, 4),
            "status": "High Risk" if prediction == 1 else "Retained",
            "recommendations": [
                "Offer 20% annual contract discount",
                "Provide complimentary Premium Tech Support",
                "Assign dedicated customer retention success manager"
            ] if prediction == 1 else [
                "No immediate intervention required",
                "Maintain standard loyalty rewards schedule"
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))