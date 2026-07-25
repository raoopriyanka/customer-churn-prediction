import os
import pandas as pd

# Define paths relative to the project root
DATA_PATH = os.path.join("..", "data", "Telco_customer_churn.csv")

def load_and_inspect_data():
    # Load dataset
    df = pd.read_csv(DATA_PATH)
    
    print("--- 1. SHAPE OF THE DATASET ---")
    print(f"Rows: {df.shape[0]}, Columns: {df.shape[1]}\n")
    
    print("--- 2. DATASET INFO ---")
    print(df.info())
    print("\n")
    
    print("--- 3. STATISTICAL SUMMARY (Numerical Columns) ---")
    print(df.describe())
    
if __name__ == "__main__":
    load_and_inspect_data()