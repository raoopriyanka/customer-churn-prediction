import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function Footer({ darkMode }) {
  return (
    <footer className={`border-t mt-12 transition-colors ${darkMode ? 'border-slate-800/80 bg-slate-950 text-slate-300' : 'border-slate-200 bg-white text-slate-700'}`}>
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-6 border-b border-slate-800/60 items-center">
          
          {/* Brand & Mission */}
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ChurnShield AI
              </span>
            </div>
            <p className={`text-xs leading-relaxed max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Enterprise-grade customer attrition analytics platform engineered with Random Forest machine learning models to maximize user retention and lifetime value.
            </p>
            <div className="flex items-center space-x-2 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>System Operational • FastAPI & React Engine Active</span>
            </div>
          </div>

          {/* Developer Professional Links */}
          <div className="md:col-span-4 space-y-2 md:text-right">
            <h4 className={`text-[11px] font-extrabold uppercase tracking-widest ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Developer Profile</h4>
            <div className="flex flex-col md:items-end space-y-2 text-xs font-semibold">
              <a href="https://github.com/raoopriyanka" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-indigo-400 transition">
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <a href="https://www.linkedin.com/in/priyankarao-1506p/" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-indigo-400 transition">
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

        </div>

        {/* Centered Bottom Copyright */}
        <div className="pt-6 text-center text-xs font-medium opacity-80">
          <p>© 2026 ChurnShield AI. Designed & Developed by <span className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Priyanka Rao</span>.</p>
        </div>
      </div>
    </footer>
  );
}