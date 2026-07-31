import React from 'react';
import { ShieldAlert, CheckCircle2, Cpu, AlertTriangle, CheckSquare } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export default function PredictionResult({ result, error, darkMode }) {
  const chartData = result ? [
    { name: 'Retention', probability: +(1 - result.churn_probability).toFixed(4) * 100 },
    { name: 'Churn Risk', probability: +(result.churn_probability * 100).toFixed(4) }
  ] : [];

  return (
    <div className={`border rounded-3xl p-7 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div>
        <h3 className="text-base font-bold mb-4 flex items-center justify-between">
          <span>Prediction Result & Recommendations</span>
          <Cpu className="w-5 h-5 text-indigo-400" />
        </h3>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-2xl text-sm flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {!result && !error && (
          <div className={`text-center py-20 border border-dashed rounded-2xl ${darkMode ? 'text-slate-500 border-slate-800 bg-slate-900/20' : 'text-slate-400 border-slate-300 bg-slate-50'}`}>
            <p className="text-sm font-medium">Run prediction to view risk probability and actionable recommendations.</p>
          </div>
        )}

        {result && (
          <div className="space-y-5 animate-fadeIn">
            <div className={`p-4 rounded-2xl border flex items-center justify-between ${
              result.prediction === 1 
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' 
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            }`}>
              <div className="flex items-center space-x-3">
                {result.prediction === 1 ? <ShieldAlert className="w-6 h-6 text-rose-400 animate-bounce" /> : <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-extrabold opacity-75">Status Assessment</div>
                  <div className="text-lg font-black">{result.status === 'High Risk' ? 'HIGH RISK' : 'LOW RISK'}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider font-extrabold opacity-75">Probability</div>
                <div className="text-xl font-black">{(result.churn_probability * 100).toFixed(1)}%</div>
              </div>
            </div>

            <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 text-indigo-400">Actionable Recommendations</h4>
              <ul className="space-y-1.5">
                {result.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-center space-x-2 text-xs font-medium">
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {result && (
        <div className={`p-3.5 rounded-2xl border mt-4 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Risk Probability Gauge</h4>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical">
                <XAxis type="number" domain={[0, 100]} stroke="#64748b" fontSize={11} />
                <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={11} width={80} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? '#0f172a' : '#ffffff', borderColor: darkMode ? '#334155' : '#cbd5e1', borderRadius: '12px' }} />
                <Bar dataKey="probability" radius={[0, 6, 6, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'Churn Risk' ? '#f43f5e' : '#10b981'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}