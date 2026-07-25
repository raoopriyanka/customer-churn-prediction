import os
import pandas as pd
from sklearn.preprocessing import LabelEncoder

# Define paths relative to the project root
DATA_PATH = os.path.join("..", "data", "Telco_customer_churn.csv")

def clean_data():
    # Load dataset
    df = pd.read_csv(DATA_PATH)
    
    print(f"Original shape: {df.shape}")
    
    # 1. Drop unnecessary columns that don't help prediction or cause data leakage
    drop_cols = ['CustomerID', 'Count', 'Country', 'State', 'City', 'Zip Code', 'Lat Long', 'Latitude', 'Longitude', 'Churn Reason']
    df = df.drop(columns=[col for col in drop_cols if col in df.columns])
    
    # 2. Handle 'Total Charges' (convert spaces/strings to numeric, fill NaNs safely without inplace=True)
    df['Total Charges'] = pd.to_numeric(df['Total Charges'], errors='coerce')
    df['Total Charges'] = df['Total Charges'].fillna(df['Total Charges'].median())
    
    # 3. Encode Target Variable ('Churn Label': Yes/No -> 1/0)
    if 'Churn Label' in df.columns:
        df['Churn Label'] = df['Churn Label'].apply(lambda x: 1 if x == 'Yes' else 0)
        
    # 4. Explicitly select object or string columns for categorical encoding
    cat_cols = df.select_dtypes(include=['object', 'str']).columns
    
    le = LabelEncoder()
    for col in cat_cols:
        df[col] = le.fit_transform(df[col].astype(str))
        
    # 5. Drop any remaining rows with missing values (if any) to ensure 0 missing values
    df = df.dropna()
        
    print(f"Cleaned shape: {df.shape}")
    print("Missing values after cleaning:", df.isnull().sum().sum())
    
    return df

if __name__ == "__main__":
    cleaned_df = clean_data()