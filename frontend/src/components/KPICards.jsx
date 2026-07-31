import React from 'react';
import { Users, UserX, TrendingDown, TrendingUp, DollarSign, Clock } from 'lucide-react';

export default function KPICards({ darkMode }) {
  const kpis = [
    { title: 'Total Customers', value: '7,043', change: '+12% vs last month', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { title: 'Predicted Churn', value: '1,869', change: 'High risk segment', icon: UserX, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { title: 'Churn Rate', value: '26.5%', change: 'Industry baseline', icon: TrendingDown, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { title: 'Retention Rate', value: '73.5%', change: '+2.4% target', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Avg Monthly Charge', value: '₹64.76', change: 'Per subscriber', icon: DollarSign, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { title: 'Avg Tenure', value: '32 Mos', change: 'Customer lifetime', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-500/10' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {kpis.map((kpi, idx) => {
        const Icon = kpi.icon;
        return (
          <div key={idx} className={`p-5 rounded-2xl border transition-all hover:scale-[1.01] shadow-lg ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{kpi.title}</span>
              <div className={`p-2 rounded-xl ${kpi.bg} ${kpi.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-2xl font-black tracking-tight">{kpi.value}</span>
              <span className="text-xs font-medium text-emerald-500">{kpi.change}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}