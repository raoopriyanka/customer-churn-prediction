import React from 'react';
import { Cpu, Database } from 'lucide-react';

export default function Hero({ darkMode }) {
  return (
    <div className={`p-8 rounded-3xl border shadow-xl ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-950/40 border-slate-800' : 'bg-gradient-to-br from-white via-indigo-50/50 to-indigo-100/50 border-indigo-100'}`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
            Predictive Business Intelligence
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Anticipate Attrition. Secure Revenue.</h2>
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Leverage advanced machine learning analytics to identify high-risk telecom subscribers, understand behavioral drivers, and deploy high-impact retention workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="text-[11px] font-bold uppercase opacity-60">Model Used</div>
            <div className="text-sm font-black text-indigo-400 flex items-center space-x-1 mt-1">
              <Cpu className="w-4 h-4" />
              <span>Random Forest</span>
            </div>
          </div>
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="text-[11px] font-bold uppercase opacity-60">Dataset Size</div>
            <div className="text-sm font-black text-emerald-400 flex items-center space-x-1 mt-1">
              <Database className="w-4 h-4" />
              <span>7,043 Records</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}