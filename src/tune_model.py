import os
import joblib
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.metrics import classification_report, f1_score
from preprocess import clean_data

def tune_random_forest():
    # 1. Load data and drop leak columns
    df = clean_data()
    target_col = 'Churn Value' if 'Churn Value' in df.columns else 'Churn Label'
    leak_cols = ['Churn Score', 'CLTV', 'Churn Label']
    X = df.drop(columns=[col for col in leak_cols + [target_col] if col in df.columns])
    y = df[target_col]
    
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )
    
    print("\n--- TUNING HYPERPARAMETERS WITH GRIDSEARCHCV ---")
    
    # 2. Define parameter grid to search over
    param_grid = {
        'n_estimators': [50, 100, 200],
        'max_depth': [10, 20, None],
        'min_samples_split': [2, 5, 10],
        'min_samples_leaf': [1, 2, 4]
    }
    
    # 3. Instantiate GridSearchCV with 3-fold cross validation optimizing for f1 score
    rf = RandomForestClassifier(random_state=42)
    grid_search = estimator = GridSearchCV(
        estimator=rf,
        param_grid=param_grid,
        cv=3,
        scoring='f1',
        n_jobs=-1,
        verbose=1
    )
    
    # 4. Fit grid search on training data
    grid_search.fit(X_train, y_train)
    
    print(f"\nBest Hyperparameters Found:")
    print(grid_search.best_params_)
    
    # 5. Evaluate best model on test set
    best_model = grid_search.best_estimator_
    y_pred = best_model.predict(X_test)
    
    print(f"\nTuned Test F1-Score: {f1_score(y_test, y_pred):.4f}")
    print("\nTuned Classification Report:")
    print(classification_report(y_test, y_pred))
    
    # 6. Save tuned model
    os.makedirs("../models", exist_ok=True)
    model_path = os.path.join("..", "models", "random_forest_churn.pkl")
    joblib.dump(best_model, model_path)
    print(f"Tuned model successfully saved to {model_path}")

if __name__ == "__main__":
    tune_random_forest()