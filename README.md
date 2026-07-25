# 📞 Telecom Customer Churn Prediction & Retention Analytics

An end-to-end Machine Learning project that predicts whether a telecom customer is likely to churn using the **IBM Telco Customer Churn Dataset**. The project follows the complete machine learning lifecycle, including data preprocessing, exploratory data analysis (EDA), feature engineering, model training, hyperparameter tuning, evaluation, feature importance analysis, customer churn prediction, and business intelligence visualization using **Power BI**.

---

## 📌 Project Overview

Customer churn is a major challenge for telecom companies because acquiring new customers is significantly more expensive than retaining existing ones. By leveraging machine learning, businesses can identify customers who are at high risk of leaving and implement targeted retention strategies.

This project combines predictive analytics with interactive business intelligence to help stakeholders understand churn trends and make informed decisions.

---

## 🎯 Objectives

- Predict customer churn using historical telecom customer data.
- Identify the most influential factors contributing to churn.
- Evaluate the performance of a Random Forest classification model.
- Visualize customer churn metrics and trends using Power BI.
- Provide actionable insights to improve customer retention.

---

## 🛠️ Tech Stack

### Programming Language
- Python

### Libraries
- Pandas
- NumPy
- Scikit-learn
- Matplotlib
- Joblib

### Machine Learning
- Random Forest Classifier
- GridSearchCV

### Visualization
- Microsoft Power BI

### Development Environment
- Visual Studio Code
- Jupyter Notebook

---

## 📂 Project Structure

```
CHURN-PREDICTION/
│
├── dashboard/
│   └── Telco_Churn_Dashboard.pbix
├── reports/
│   └── feature_importance.png
│
├── src/
│   ├── eda.py
│   ├── preprocess.py
│   ├── train_test_split.py
│   ├── train_model.py
│   ├── tune_model.py
│   ├── evaluate.py
│   ├── feature_importance.py
│   └── predict.py
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

# 🔄 Machine Learning Workflow

```
IBM Telco Customer Churn Dataset
                │
                ▼
       Data Preprocessing
                │
                ▼
 Exploratory Data Analysis (EDA)
                │
                ▼
      Feature Engineering
                │
                ▼
        Train-Test Split
                │
                ▼
   Random Forest Model Training
                │
                ▼
     Hyperparameter Tuning
                │
                ▼
       Model Evaluation
                │
                ▼
    Feature Importance Analysis
                │
                ▼
 Customer Churn Prediction
                │
                ▼
      Power BI Dashboard
```

---

# 📊 Dataset

This project uses the **IBM Telco Customer Churn Dataset**, containing **7,043 customer records** and **33 features** describing customer demographics, geographic information, subscribed services, billing details, customer lifetime value, and churn status.

### Dataset Features

| Category | Features |
| :--- | :--- |
| **Customer Information** | CustomerID, Count, Gender, Senior Citizen, Partner, Dependents |
| **Geographic Information** | Country, State, City, Zip Code, Latitude, Longitude, Lat Long |
| **Account Information** | Tenure Months, Contract, Paperless Billing, Payment Method |
| **Services** | Phone Service, Multiple Lines, Internet Service, Online Security, Online Backup, Device Protection, Tech Support, Streaming TV, Streaming Movies |
| **Billing** | Monthly Charges, Total Charges |
| **Churn Information** | Churn Label, Churn Value, Churn Score, Churn Reason |
| **Customer Value** | CLTV (Customer Lifetime Value) |

### Target Variable

- **Churn Value**
  - 0 → Customer Retained
  - 1 → Customer Churned

> **Note:** Features such as **Churn Label**, **Churn Score**, and **Churn Reason** were excluded during model training to prevent data leakage.

---

# 🔍 Exploratory Data Analysis

EDA was performed to understand customer behavior and identify important patterns before model training.

Key analyses included:

- Missing value detection
- Distribution of categorical and numerical features
- Churn distribution
- Contract type analysis
- Payment method analysis
- Monthly charges analysis
- Correlation analysis
- Class imbalance analysis

---

# 🤖 Machine Learning Model

### Algorithm Used

✅ Random Forest Classifier

Random Forest was selected because it:

- Performs well on structured tabular datasets.
- Handles categorical and numerical variables effectively.
- Reduces overfitting using ensemble learning.
- Provides feature importance scores for model interpretation.
- Delivers strong classification performance with minimal preprocessing.

### Hyperparameter Tuning

Model performance was improved using **GridSearchCV**, which optimized parameters such as:

- Number of Estimators
- Maximum Depth
- Minimum Samples Split
- Minimum Samples Leaf

---

# 📈 Model Evaluation

The model was evaluated using standard classification metrics:

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC Score
- Confusion Matrix

Feature importance was also generated to identify the variables with the highest impact on customer churn.

---

# 📊 Power BI Dashboard

The project includes an interactive **Customer Churn & Retention Analytics Dashboard** designed for business users.

## Dashboard KPIs

- 👥 Total Customers
- ❌ Churned Customers
- 💰 Total Monthly Revenue
- 📉 Overall Churn Rate

## Dashboard Visualizations

- Customer Churn Distribution (Donut Chart)
- Churned Customers by Contract Type (Horizontal Bar Chart)
- Payment Method Interactive Slicer
- KPI Summary Cards

The dashboard enables business users to monitor customer churn, analyze churn by contract type, and interactively filter customers by payment method for deeper insights.

---

# 💡 Key Insights

- Approximately **26.54%** of customers have churned.
- Customers with **Month-to-Month contracts** exhibit the highest churn rate.
- **One-Year** and **Two-Year** contracts have significantly lower churn.
- The dashboard enables dynamic filtering based on payment methods for customer segmentation.
- Long-term contracts contribute to improved customer retention.

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/raoopriyanka/customer-churn-prediction.git
```

## Navigate to Project

```bash
cd churn-prediction
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# ▶️ Running the Project

### Data Preprocessing

```bash
python src/preprocess.py
```

### Train-Test Split

```bash
python src/train_test_split.py
```

### Train Random Forest Model

```bash
python src/train_model.py
```

### Hyperparameter Tuning

```bash
python src/tune_model.py
```

### Evaluate Model

```bash
python src/evaluate.py
```

### Generate Feature Importance

```bash
python src/feature_importance.py
```

### Predict New Customer

```bash
python src/predict.py
```

---

Example Dashboard Components:

- KPI Cards
- Churn Distribution
- Contract-wise Churn Analysis
- Interactive Payment Method Filter

---

# 📈 Future Enhancements

- Deploy the model using Flask or FastAPI.
- Develop an interactive Streamlit web application.
- Compare Random Forest with XGBoost, LightGBM, and CatBoost.
- Integrate SHAP for Explainable AI (XAI).
- Dockerize the application.
- Deploy on AWS, Azure, or Google Cloud.
- Build a real-time prediction API.

---

---

## 👩‍💻 Author

**Priyanka Rao**
B.Tech Information Technology — Rajiv Gandhi Institute of Technology (Mumbai University)

* GitHub: https://github.com/raoopriyanka
* LinkedIn: https://www.linkedin.com/in/priyankarao-1506p

---

## ⭐ Star This Repository

If you found this project useful, please consider **starring the repository** to support the work and make it easier for others to discover.
