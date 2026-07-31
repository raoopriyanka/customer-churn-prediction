import React from 'react';
import { Activity, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className={`border-b sticky top-0 z-50 backdrop-blur-xl transition-colors ${darkMode ? 'border-slate-800 bg-[#07090e]/80' : 'border-slate-200 bg-white/80'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 p-2.5 rounded-xl shadow-lg text-white">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">ChurnShield AI</h1>
              
            </div>
            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>AI-Powered Telecom Customer Churn Intelligence & Retention</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className={`hidden md:flex items-center space-x-2 text-xs px-3.5 py-1.5 rounded-full border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold">Random Forest Engine Active</span>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition shadow-sm ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>
        </div>
      </div>
    </header>
  );
}