# 📞 Telco Customer Churn & Retention Analytics

An end-to-end **Machine Learning + Business Intelligence** project that predicts telecom customer churn using a **Random Forest Classifier** and presents actionable retention insights through an **interactive Power BI dashboard**.

---

## 📌 Project Overview

Customer churn is a major revenue risk for telecom companies. This project combines:

* **Python + Scikit-learn** for data preprocessing, model training, evaluation, and prediction.
* **Power BI** for interactive business analytics and churn monitoring.

The dashboard enables business users to track churn KPIs, analyze churn by contract type, and filter results by payment method.

---

## 🎯 Objectives

* Predict whether a customer is likely to churn.
* Identify the most influential churn drivers.
* Evaluate model performance using standard classification metrics.
* Provide an interactive dashboard for retention analysis.
* Enable predictions for new customer records.

---

## 🛠️ Tech Stack

### Programming & ML

* Python 3.x
* Pandas
* NumPy
* Scikit-learn
* Matplotlib
* Joblib

### Business Intelligence

* Microsoft Power BI Desktop

---

## 📂 Project Structure

```text
CHURN-PREDICTION/
│
├── dashboard/
│   └── Telco_Churn_Dashboard.pbix      # Power BI dashboard
│
├── data/
│   └── Telco_customer_churn.csv        # Source dataset
├── reports/
│   └── feature_importance.png          # Feature importance chart
│
├── src/
│   ├── eda.py                          # Exploratory Data Analysis
│   ├── preprocess.py                   # Data cleaning & preprocessing
│   ├── train_test_split.py             # Train/test split
│   ├── train_model.py                  # Random Forest training
│   ├── tune_model.py                   # Hyperparameter tuning
│   ├── evaluate.py                     # Model evaluation
│   ├── feature_importance.py           # Feature importance generation
│   └── predict.py                      # Churn prediction for new customers
│
├── .gitignore
├── requirements.txt
└── README.md
```

---

## 📊 Dataset

**Dataset:** Telco Customer Churn (Kaggle)

### Shape

* **Rows:** 7,043
* **Columns:** 21

### Available Fields

| Column           | Description                          |
| ---------------- | ------------------------------------ |
| customerID       | Unique customer identifier           |
| gender           | Customer gender                      |
| SeniorCitizen    | Whether customer is a senior citizen |
| Partner          | Whether customer has a partner       |
| Dependents       | Whether customer has dependents      |
| tenure           | Number of months with the company    |
| PhoneService     | Whether phone service is subscribed  |
| MultipleLines    | Multiple phone lines subscription    |
| InternetService  | Internet service type                |
| OnlineSecurity   | Online security subscription         |
| OnlineBackup     | Online backup subscription           |
| DeviceProtection | Device protection subscription       |
| TechSupport      | Tech support subscription            |
| StreamingTV      | Streaming TV subscription            |
| StreamingMovies  | Streaming movies subscription        |
| Contract         | Contract type                        |
| PaperlessBilling | Paperless billing status             |
| PaymentMethod    | Payment method                       |
| MonthlyCharges   | Monthly bill amount                  |
| TotalCharges     | Total charges to date                |
| Churn            | Target variable (Yes/No)             |

---

## 📈 Power BI Dashboard

### Dashboard KPIs

| KPI                   |       Value |
| --------------------- | ----------: |
| Total Customers       |      **7K** |
| Churned Customers     |      **2K** |
| Total Monthly Revenue | **456.12K** |
| Churn Rate            |  **26.54%** |

### Visualizations Included

1. **KPI Cards** – Total customers, churned customers, monthly revenue, and churn rate.
2. **Donut Chart** – Distribution of churned vs retained customers.
3. **Horizontal Bar Chart** – Churned customers by **Contract** type.
4. **Payment Method Slicer** – Filter all visuals by payment method.

### Key Insight

* **Month-to-month contracts account for the overwhelming majority of churned customers**, while one-year and two-year contracts show significantly lower churn.

---

## 🤖 Machine Learning Pipeline

```text
Raw CSV
   ↓
Data Cleaning & Type Conversion
   ↓
Categorical Encoding
   ↓
Train/Test Split
   ↓
Random Forest Training
   ↓
Hyperparameter Tuning (GridSearchCV)
   ↓
Model Evaluation
   ↓
Feature Importance Analysis
   ↓
Prediction on New Customer Data
```

---

## 🚀 How to Run

### 1️⃣ Clone the repository

```bash
git clone https://github.com/raoopriyanka/customer-churn-prediction.git
cd churn-prediction
```

### 2️⃣ Create and activate a virtual environment

**Windows**

```bash
python -m venv venv
venv\Scripts\activate
```

**macOS / Linux**

```bash
python -m venv venv
source venv/bin/activate
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the pipeline

```bash
# Preprocess data
python src/preprocess.py

# Train model
python src/train_model.py

# Tune hyperparameters
python src/tune_model.py

# Evaluate model
python src/evaluate.py

# Generate feature importance plot
python src/feature_importance.py

# Predict churn for new customer data
python src/predict.py
```

---

## 📊 Example Dashboard Insights

* **73.46%** of customers were retained (**5.17K** customers).
* **26.54%** of customers churned (**1.87K** customers).
* Churn is heavily concentrated among **month-to-month** contract customers.
* The payment method slicer allows targeted analysis of churn patterns across different payment types.

---

## 🔮 Future Enhancements

* Deploy the model using **FastAPI** or **Flask**.
* Build a **Streamlit** web application.
* Add **SHAP** explainability for individual predictions.
* Compare Random Forest with **XGBoost** and **LightGBM**.
* Automate the pipeline with **CI/CD** and Docker.

---

## 👩‍💻 Author

**Priyanka Rao**
B.Tech Information Technology — Rajiv Gandhi Institute of Technology (Mumbai University)

* GitHub: https://github.com/raoopriyanka
* LinkedIn: https://www.linkedin.com/in/priyankarao-1506p/

---

## ⭐ Star This Repository

If you found this project useful, please consider **starring the repository** to support the work and make it easier for others to discover.
