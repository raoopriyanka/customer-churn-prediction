import React from 'react';
import { Layers, RefreshCw, ArrowRight } from 'lucide-react';

export default function PredictionForm({ formData, setFormData, handlePredict, loading, darkMode }) {
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    let updatedData = { ...formData };

    if (name === 'tenure' || name === 'MonthlyCharges' || name === 'TotalCharges') {
      // Allow empty string while typing, otherwise parse cleanly to remove leading zeros
      if (value === '') {
        updatedData[name] = '';
      } else {
        const parsed = name === 'tenure' ? parseInt(value, 10) : parseFloat(value);
        updatedData[name] = isNaN(parsed) ? value : parsed;

        // Automatically update Total Charges when Monthly Charges or Tenure changes
        if (name === 'MonthlyCharges' || name === 'tenure') {
          const monthly = name === 'MonthlyCharges' ? (parseFloat(value) || 0) : formData.MonthlyCharges;
          const tenureMonths = name === 'tenure' ? (parseInt(value, 10) || 0) : formData.tenure;
          updatedData.TotalCharges = +(monthly * tenureMonths).toFixed(2);
        }
      }
    } else {
      updatedData[name] = value;
    }

    setFormData(updatedData);
  };

  return (
    <div className={`border rounded-3xl p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div>
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold tracking-tight">Interactive Customer Prediction</h3>
            <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Modify account attributes to test churn probability in real time</p>
          </div>
          <div className="bg-indigo-500/10 p-2.5 rounded-2xl text-indigo-400 border border-indigo-500/20">
            <Layers className="w-5 h-5" />
          </div>
        </div>

        <form onSubmit={handlePredict} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2.5 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Senior Citizen</label>
              <select name="SeniorCitizen" value={formData.SeniorCitizen} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2.5 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value={0}>No (0)</option>
                <option value={1}>Yes (1)</option>
              </select>
            </div>
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Tenure (Months)</label>
              <input type="text" inputMode="numeric" name="tenure" value={formData.tenure} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2.5 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Partner</label>
              <select name="Partner" value={formData.Partner} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Dependents</label>
              <select name="Dependents" value={formData.Dependents} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Phone Service</label>
              <select name="PhoneService" value={formData.PhoneService} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Tech Support</label>
              <select name="TechSupport" value={formData.TechSupport} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Contract Type</label>
              <select name="Contract" value={formData.Contract} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2.5 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value="Month-to-month">Month-to-month</option>
                <option value="One year">One year</option>
                <option value="Two year">Two year</option>
              </select>
            </div>
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Monthly Charges ($)</label>
              <input type="text" inputMode="decimal" name="MonthlyCharges" value={formData.MonthlyCharges} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2.5 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
            </div>
            <div>
              <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Total Charges ($)</label>
              <input type="text" inputMode="decimal" name="TotalCharges" value={formData.TotalCharges} onChange={handleChange} className={`w-full border rounded-xl px-3 py-2.5 text-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
            </div>
          </div>
        </form>
      </div>

      <button
        type="button"
        onClick={handlePredict}
        disabled={loading}
        className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3.5 rounded-2xl transition shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 disabled:opacity-50"
      >
        {loading ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span>Evaluating Churn Vulnerability...</span>
          </>
        ) : (
          <>
            <span>Predict Churn</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </div>
  );
}