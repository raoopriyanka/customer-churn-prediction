import os
import joblib
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from preprocess import clean_data
from sklearn.model_selection import train_test_split

def analyze_feature_importance():
    # 1. Load data and drop leak columns
    df = clean_data()
    target_col = 'Churn Value' if 'Churn Value' in df.columns else 'Churn Label'
    leak_cols = ['Churn Score', 'CLTV', 'Churn Label']
    X = df.drop(columns=[col for col in leak_cols + [target_col] if col in df.columns])
    y = df[target_col]
    
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )
    
    # 2. Load our tuned model
    model_path = os.path.join("..", "models", "random_forest_churn.pkl")
    if not os.path.exists(model_path):
        print("Tuned model not found! Run tune_model.py first.")
        return
        
    model = joblib.load(model_path)
    
    # 3. Extract feature importances
    importances = model.feature_importances_
    features = X.columns
    
    # Create a DataFrame for clean sorting
    fi_df = pd.DataFrame({'Feature': features, 'Importance': importances})
    fi_df = fi_df.sort_values(by='Importance', ascending=False)
    
    print("\n--- TOP 10 MOST IMPORTANT FEATURES FOR CHURN ---")
    print(fi_df.head(10))
    
    # 4. Plot and save feature importance chart
    os.makedirs("../reports", exist_ok=True)
    plt.figure(figsize=(10, 6))
    sns.barplot(x='Importance', y='Feature', data=fi_df.head(10), palette='viridis')
    plt.title('Top 10 Feature Importances - Random Forest Churn Prediction')
    plt.xlabel('Mean Decrease in Impurity (Importance Score)')
    plt.ylabel('Features')
    plt.tight_layout()
    
    plot_path = os.path.join("..", "reports", "feature_importance.png")
    plt.savefig(plot_path)
    print(f"\nFeature importance plot saved successfully to {plot_path}")

if __name__ == "__main__":
    analyze_feature_importance()