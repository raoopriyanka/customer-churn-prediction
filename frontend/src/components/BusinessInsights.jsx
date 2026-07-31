import React from 'react';
import { Lightbulb, TrendingUp } from 'lucide-react';

export default function BusinessInsights({ darkMode }) {
  const insights = [
    "Month-to-month contract subscribers exhibit a 3x higher churn rate than annual contract holders.",
    "Customers lacking Tech Support and Online Security add-ons show significantly elevated attrition.",
    "Electronic check payment users record the highest churn frequency among all payment channels.",
    "Long-tenure customers (>48 months) demonstrate extreme loyalty and rarely churn.",
    "High monthly charges coupled with short tenure strongly accelerate immediate churn risk."
  ];

  return (
    <div className={`border rounded-3xl p-7 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div>
        <h4 className="text-base font-bold mb-6 flex items-center space-x-2.5">
          <Lightbulb className="w-5 h-5 text-amber-400" />
          <span>Top Business Insights & Retention Strategies</span>
        </h4>
        <div className="space-y-3.5">
          {insights.map((insight, idx) => (
            <div key={idx} className={`p-3.5 rounded-xl border flex items-start space-x-3 transition-colors ${darkMode ? 'bg-slate-900/40 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
              <TrendingUp className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs font-medium leading-relaxed">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}