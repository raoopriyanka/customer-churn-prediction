import os
import joblib
import pandas as pd
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, classification_report, confusion_matrix
from preprocess import clean_data
from sklearn.model_selection import train_test_split

def evaluate_model():
    # 1. Load data and drop target-leak columns like 'Churn Score', 'CLTV' if present
    df = clean_data()
    
    target_col = 'Churn Value' if 'Churn Value' in df.columns else 'Churn Label'
    
    # Drop data leak columns that give away the answer
    leak_cols = ['Churn Score', 'CLTV', 'Churn Label']
    X = df.drop(columns=[col for col in leak_cols + [target_col] if col in df.columns])
    y = df[target_col]
    
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )
    
    # 2. Load our saved model
    model_path = os.path.join("..", "models", "random_forest_churn.pkl")
    if not os.path.exists(model_path):
        print("Model not found! Run train_model.py first.")
        return
        
    model = joblib.load(model_path)
    
    # 3. Retrain model without data-leak features for realistic evaluation
    model.fit(X_train, y_train)
    
    # 4. Predict on test set
    y_pred = model.predict(X_test)
    
    # 5. Calculate Metrics
    print("\n--- MODEL EVALUATION METRICS ---")
    print(f"Accuracy:  {accuracy_score(y_test, y_pred):.4f}")
    print(f"Precision: {precision_score(y_test, y_pred):.4f}")
    print(f"Recall:    {recall_score(y_test, y_pred):.4f}")
    print(f"F1-Score:  {f1_score(y_test, y_pred):.4f}")
    
    print("\n--- CLASSIFICATION REPORT ---")
    print(classification_report(y_test, y_pred))
    
    print("\n--- CONFUSION MATRIX ---")
    print(confusion_matrix(y_test, y_pred))

if __name__ == "__main__":
    evaluate_model()