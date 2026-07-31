import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Cpu } from 'lucide-react';

export default function FeatureImportance({ darkMode }) {
  const featureData = [
    { feature: 'Contract', importance: 0.155 },
    { feature: 'Tenure Months', importance: 0.148 },
    { feature: 'Total Charges', importance: 0.132 },
    { feature: 'Monthly Charges', importance: 0.129 },
    { feature: 'Online Security', importance: 0.083 },
    { feature: 'Tech Support', importance: 0.065 },
    { feature: 'Dependents', importance: 0.062 },
    { feature: 'Internet Service', importance: 0.042 },
    { feature: 'Payment Method', importance: 0.038 },
    { feature: 'Online Backup', importance: 0.024 }
  ];

  return (
    <div className={`border rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between h-full ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div>
        <h4 className="text-sm font-bold mb-1 flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-indigo-400" />
          <span>Top 10 Feature Importances (Random Forest)</span>
        </h4>
        <p className={`text-xs mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Mean decrease in impurity evaluation scores.
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={featureData} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <XAxis type="number" stroke="#64748b" fontSize={11} />
            <YAxis type="category" dataKey="feature" stroke="#64748b" fontSize={11} width={100} />
            <Tooltip contentStyle={{ backgroundColor: darkMode ? '#0f172a' : '#ffffff', borderColor: darkMode ? '#334155' : '#cbd5e1', borderRadius: '12px' }} />
            <Bar dataKey="importance" fill="#6366f1" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}