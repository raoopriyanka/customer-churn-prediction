import os
import joblib
from train_test_split import prepare_data
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

def train_random_forest():
    # 1. Get our prepared and split data
    X_train, X_test, y_train, y_test = prepare_data()
    
    print("\n--- TRAINING RANDOM FOREST MODEL ---")
    
    # 2. Initialize Random Forest Classifier
    # n_estimators=100 means the forest will build 100 decision trees
    # random_state=42 ensures reproducibility
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    
    # 3. Fit (train) the model on the training data
    rf_model.fit(X_train, y_train)
    
    # 4. Evaluate preliminary training vs testing accuracy
    train_acc = accuracy_score(y_train, rf_model.predict(X_train))
    test_acc = accuracy_score(y_test, rf_model.predict(X_test))
    
    print(f"Training Accuracy: {train_acc:.4f}")
    print(f"Testing Accuracy: {test_acc:.4f}")
    
    # 5. Save the trained model to the models/ folder using joblib
    os.makedirs("../models", exist_ok=True)
    model_path = os.path.join("..", "models", "random_forest_churn.pkl")
    joblib.dump(rf_model, model_path)
    print(f"Model successfully saved to {model_path}")
    
    return rf_model, X_test, y_test

if __name__ == "__main__":
    train_random_forest()