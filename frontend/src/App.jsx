import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KPICards from './components/KPICards';
import CustomerCharts from './components/CustomerCharts';
import FeatureImportance from './components/FeatureImportance';
import CorrelationMatrix from './components/CorrelationMatrix';
import BusinessInsights from './components/BusinessInsights';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';
import ModelPerformance from './components/ModelPerformance';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    gender: 'Female',
    SeniorCitizen: 0,
    Partner: 'Yes',
    Dependents: 'No',
    tenure: 12,
    InternetService: 'Fiber optic',
    PhoneService: 'Yes',
    MultipleLines: 'No',
    OnlineSecurity: 'No',
    OnlineBackup: 'Yes',
    DeviceProtection: 'No',
    TechSupport: 'No',
    StreamingTV: 'Yes',
    StreamingMovies: 'Yes',
    Contract: 'Month-to-month',
    PaperlessBilling: 'Yes',
    PaymentMethod: 'Electronic check',
    MonthlyCharges: 85.5,
    TotalCharges: 1026.0
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', formData);
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || 'Failed to connect to the prediction backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-all duration-500 flex flex-col justify-between ${darkMode ? 'bg-[#07090e] text-slate-100' : 'bg-[#f8fafc] text-slate-900'}`}>
      <div className="space-y-8">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="max-w-7xl mx-auto px-6 space-y-8">
          <Hero darkMode={darkMode} />
          <KPICards darkMode={darkMode} />
          <CustomerCharts darkMode={darkMode} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <FeatureImportance darkMode={darkMode} />
            </div>
            <div className="lg:col-span-5">
              <CorrelationMatrix darkMode={darkMode} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <PredictionForm 
                formData={formData} 
                setFormData={setFormData} 
                handlePredict={handlePredict} 
                loading={loading} 
                darkMode={darkMode} 
              />
            </div>
            <div className="lg:col-span-5">
              <PredictionResult result={result} error={error} darkMode={darkMode} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <BusinessInsights darkMode={darkMode} />
            </div>
            <div className="lg:col-span-5">
              <ModelPerformance darkMode={darkMode} />
            </div>
          </div>
        </main>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;