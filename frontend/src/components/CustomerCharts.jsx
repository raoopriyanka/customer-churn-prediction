import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PieChart as PieIcon, BarChart2 } from 'lucide-react';

export default function CustomerCharts({ darkMode }) {
  const churnData = [
    { name: 'Stayed', value: 74, color: '#10b981' },
    { name: 'Churned', value: 26, color: '#f43f5e' }
  ];

  const contractData = [
    { contract: 'Month-to-Month', churnRate: 42 },
    { contract: 'One Year', churnRate: 11 },
    { contract: 'Two Year', churnRate: 3 }
  ];

  const paymentData = [
    { method: 'Electronic Check', churnRate: 45 },
    { method: 'Mailed Check', churnRate: 19 },
    { method: 'Bank Transfer', churnRate: 15 },
    { method: 'Credit Card', churnRate: 15 }
  ];

  const internetData = [
    { service: 'Fiber Optic', churnRate: 42 },
    { service: 'DSL', churnRate: 19 },
    { service: 'No Internet', churnRate: 7 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Churn Distribution Pie Chart */}
      <div className={`border rounded-3xl p-6 shadow-xl backdrop-blur-xl ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
        <h4 className="text-sm font-bold mb-4 flex items-center space-x-2">
          <PieIcon className="w-4 h-4 text-indigo-400" />
          <span>Overall Churn Distribution</span>
        </h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={churnData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {churnData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#0f172a' : '#ffffff', borderColor: darkMode ? '#334155' : '#cbd5e1', borderRadius: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Contract Type vs Churn Bar Chart */}
      <div className={`border rounded-3xl p-6 shadow-xl backdrop-blur-xl ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
        <h4 className="text-sm font-bold mb-4 flex items-center space-x-2">
          <BarChart2 className="w-4 h-4 text-indigo-400" />
          <span>Contract Type vs Churn Rate (%)</span>
        </h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={contractData} layout="vertical">
              <XAxis type="number" domain={[0, 50]} stroke="#64748b" fontSize={12} />
              <YAxis type="category" dataKey="contract" stroke="#64748b" fontSize={12} width={110} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#0f172a' : '#ffffff', borderColor: darkMode ? '#334155' : '#cbd5e1', borderRadius: '12px' }} />
              <Bar dataKey="churnRate" fill="#6366f1" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Payment Method vs Churn */}
      <div className={`border rounded-3xl p-6 shadow-xl backdrop-blur-xl ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
        <h4 className="text-sm font-bold mb-4 flex items-center space-x-2">
          <BarChart2 className="w-4 h-4 text-indigo-400" />
          <span>Payment Method vs Churn Rate (%)</span>
        </h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={paymentData}>
              <XAxis dataKey="method" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#0f172a' : '#ffffff', borderColor: darkMode ? '#334155' : '#cbd5e1', borderRadius: '12px' }} />
              <Bar dataKey="churnRate" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Internet Service vs Churn */}
      <div className={`border rounded-3xl p-6 shadow-xl backdrop-blur-xl ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
        <h4 className="text-sm font-bold mb-4 flex items-center space-x-2">
          <BarChart2 className="w-4 h-4 text-indigo-400" />
          <span>Internet Service vs Churn Rate (%)</span>
        </h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={internetData}>
              <XAxis dataKey="service" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#0f172a' : '#ffffff', borderColor: darkMode ? '#334155' : '#cbd5e1', borderRadius: '12px' }} />
              <Bar dataKey="churnRate" fill="#ec4899" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}