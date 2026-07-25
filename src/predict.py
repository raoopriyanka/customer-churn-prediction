import os
import joblib
import pandas as pd

def predict_churn():
    # 1. Load the saved model
    model_path = os.path.join("..", "models", "random_forest_churn.pkl")
    if not os.path.exists(model_path):
        print("Model file not found! Please run tune_model.py first.")
        return
        
    model = joblib.load(model_path)
    print("Tuned Random Forest model loaded successfully from disk.")
    
    # 2. Simulate a new incoming customer record (matching our feature structure)
    # This represents a customer on a month-to-month contract, low tenure, high monthly charges
    sample_customer = {
        'Gender': 1,
        'Senior Citizen': 0,
        'Partner': 0,
        'Dependents': 0,
        'Tenure Months': 2,
        'Phone Service': 1,
        'Multiple Lines': 0,
        'Internet Service': 1,
        'Online Security': 0,
        'Online Backup': 0,
        'Device Protection': 0,
        'Tech Support': 0,
        'Streaming TV': 1,
        'Streaming Movies': 1,
        'Contract': 0,  # Month-to-month
        'Paperless Billing': 1,
        'Payment Method': 2,
        'Monthly Charges': 89.85,
        'Total Charges': 180.50,
        'Churn Value': 0,
        'Churn Score': 75,
        'CLTV': 2500
    }
    
    # Convert to DataFrame
    input_df = pd.DataFrame([sample_customer])
    
    # Drop leak columns if present in input
    leak_cols = ['Churn Score', 'CLTV', 'Churn Label', 'Churn Value']
    input_features = input_df.drop(columns=[col for col in leak_cols if col in input_df.columns])
    
    # 3. Predict class and probability
    prediction = model.predict(input_features)[0]
    probability = model.predict_proba(input_features)[0][1] # Probability of churning (class 1)
    
    print("\n--- NEW CUSTOMER PREDICTION RESULT ---")
    print(f"Prediction: {'CHURN (Will Leave)' if prediction == 1 else 'RETAIN (Will Stay)'}")
    print(f"Churn Probability: {probability * 100:.2f}%")

if __name__ == "__main__":
    predict_churn()