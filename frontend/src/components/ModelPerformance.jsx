import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function ModelPerformance({ darkMode }) {
  return (
    <div className={`border rounded-3xl p-7 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div>
        <h3 className="text-base font-bold mb-6 flex items-center space-x-2.5">
          <ShieldCheck className="w-5 h-5 text-indigo-400" />
          <span>Model Performance & Metrics</span>
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className={`p-5 rounded-2xl border text-center shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[11px] uppercase font-extrabold tracking-wider opacity-60 mb-1">Accuracy</div>
            <div className="text-xl font-black text-indigo-400">87.0%</div>
          </div>
          <div className={`p-5 rounded-2xl border text-center shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[11px] uppercase font-extrabold tracking-wider opacity-60 mb-1">Precision</div>
            <div className="text-xl font-black text-emerald-400">84.0%</div>
          </div>
          <div className={`p-5 rounded-2xl border text-center shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[11px] uppercase font-extrabold tracking-wider opacity-60 mb-1">Recall</div>
            <div className="text-xl font-black text-purple-400">81.0%</div>
          </div>
          <div className={`p-5 rounded-2xl border text-center shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[11px] uppercase font-extrabold tracking-wider opacity-60 mb-1">ROC-AUC</div>
            <div className="text-xl font-black text-amber-400">0.89</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className={`flex justify-between items-center py-3.5 px-4 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
          <span className="text-xs font-semibold opacity-75">Algorithm Architecture</span>
          <span className="text-xs font-bold text-indigo-400">Random Forest Classifier</span>
        </div>
        <div className={`flex justify-between items-center py-3.5 px-4 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
          <span className="text-xs font-semibold opacity-75">Cross-Validation F1</span>
          <span className="text-xs font-bold text-emerald-400">0.865 (5-Fold CV)</span>
        </div>
        <div className={`flex justify-between items-center py-3.5 px-4 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
          <span className="text-xs font-semibold opacity-75">Source Dataset</span>
          <a 
            href="https://www.kaggle.com/datasets/yeanzc/telco-customer-churn-ibm-dataset" 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs font-bold text-indigo-400 hover:underline flex items-center space-x-1.5"
          >
            <span>IBM Telco Churn (Kaggle)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}