import os
import pandas as pd
from sklearn.model_selection import train_test_split
from preprocess import clean_data

def prepare_data():
    # Load cleaned data from our preprocessing pipeline
    df = clean_data()
    
    # Define features (X) and target (y)
    # 'Churn Value' or 'Churn Label' is our target variable. Let's use 'Churn Value'.
    target_col = 'Churn Value' if 'Churn Value' in df.columns else 'Churn Label'
    
    X = df.drop(columns=[target_col])
    y = df[target_col]
    
    # If both Churn Label and Churn Value exist, drop redundant target column
    if 'Churn Label' in X.columns and 'Churn Value' in X.columns:
        X = X.drop(columns=['Churn Label'])
        
    # Split data: 80% training, 20% testing with stratification
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, 
        test_size=0.20, 
        random_state=42, 
        stratify=y
    )
    
    print(f"\n--- DATA SPLIT SUMMARY ---")
    print(f"Training features shape: {X_train.shape}")
    print(f"Testing features shape: {X_test.shape}")
    print(f"Training target churn distribution:\n{y_train.value_counts(normalize=True)}")
    
    return X_train, X_test, y_train, y_test

if __name__ == "__main__":
    prepare_data()