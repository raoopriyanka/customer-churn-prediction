import React from 'react';
import { Grid } from 'lucide-react';

export default function CorrelationMatrix({ darkMode }) {
  const variables = ['Tenure', 'Monthly Ch.', 'Total Ch.', 'Churn'];
  // Pearson correlation coefficient matrix
  const matrix = [
    [1.00, -0.30,  0.83, -0.35],
    [-0.30, 1.00,  0.65,  0.19],
    [0.83,  0.65,  1.00, -0.20],
    [-0.35, 0.19, -0.20,  1.00]
  ];

  const getColor = (val) => {
    if (val === 1) return darkMode ? 'bg-indigo-950 text-indigo-300' : 'bg-indigo-100 text-indigo-800';
    if (val > 0.5) return darkMode ? 'bg-purple-900/60 text-purple-300' : 'bg-purple-100 text-purple-800';
    if (val > 0) return darkMode ? 'bg-emerald-950/60 text-emerald-300' : 'bg-emerald-100 text-emerald-800';
    if (val < -0.2) return darkMode ? 'bg-rose-950/60 text-rose-300' : 'bg-rose-100 text-rose-800';
    return darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-100 text-slate-700';
  };

  return (
    <div className={`border rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between h-full ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div>
        <h4 className="text-sm font-bold mb-1 flex items-center space-x-2">
          <Grid className="w-4 h-4 text-indigo-400" />
          <span>Numerical Correlation Matrix</span>
        </h4>
        <p className={`text-xs mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Pearson correlation coefficients across customer metadata attributes.
        </p>
      </div>

      <div className="overflow-x-auto my-auto">
        <table className="w-full text-center text-xs">
          <thead>
            <tr>
              <th className="p-2"></th>
              {variables.map((v, i) => (
                <th key={i} className={`p-2 font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{v}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                <td className={`p-2 font-bold text-left ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{variables[i]}</td>
                {row.map((val, j) => (
                  <td key={j} className="p-1.5">
                    <div className={`py-2 px-1 rounded-xl font-mono font-bold ${getColor(val)}`}>
                      {val.toFixed(2)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}