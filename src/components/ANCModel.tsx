import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Sparkles, Play, ShieldAlert, BadgeInfo } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ANCModel() {
  const [ancActive, setAncActive] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className="glass-premium rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
      {/* Decorative inner glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-brand-blue to-violet-500 opacity-60"></div>
      
      {/* Waveform Visualization Left Column */}
      <div className="flex-1 w-full space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${ancActive ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse" : "bg-brand-blue shadow-[0_0_12px_rgba(37,99,237,0.8)] animate-pulse"}`}></span>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-dim text-slate-400">
              {ancActive ? "ANC Active (45dB Cancellation)" : "Transparency Pass-Through On"}
            </span>
          </div>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            id="toggle-simulate-audio"
            className="flex items-center gap-1.5 text-xs text-brand-blue hover:underline bg-brand-blue/10 px-3 py-1.5 rounded-full transition-all"
          >
            <Play className={`w-3.5 h-3.5 ${isPlaying ? "animate-spin" : ""}`} />
            {isPlaying ? "Pause Ambient Sound" : "Simulate City Noise"}
          </button>
        </div>

        {/* Ambient Noises Wave Screen */}
        <div className="relative h-32 w-full rounded-2xl bg-black/40 border border-slate-800 flex items-center justify-center overflow-hidden">
          {ancActive ? (
            /* Silent stabilized clean line with very tiny ripples */
            <div className="relative w-full h-full flex items-center justify-center px-4">
              <span className="absolute text-xs font-mono text-emerald-500/60 uppercase tracking-widest">AuraSound Pro Active Shield</span>
              <div className="w-full flex justify-between px-8 gap-0.5 items-center">
                {[...Array(30)].map((_, i) => {
                  const delay = i * 0.05;
                  return (
                    <motion.div
                      key={i}
                      animate={{ height: isPlaying ? [1, 4, 1] : [1, 2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: delay }}
                      className="w-1 bg-emerald-500/80 rounded"
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            /* Wild city noise waveforms with high amplitudes */
            <div className="relative w-full h-full flex items-center justify-center px-4">
              <span className="absolute text-xs font-mono text-brand-blue/60 uppercase tracking-widest">Unfiltered Crowd / Traffic Noise</span>
              <div className="w-full flex justify-between px-8 gap-0.5 items-center">
                {[...Array(30)].map((_, i) => {
                  // Simulate random chaotic frequency
                  const hMax = isPlaying ? [20, 64, 12, 48, 20] : [10, 32, 8, 24, 10];
                  return (
                    <motion.div
                      key={i}
                      animate={{ height: hMax }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.03 }}
                      className="w-1 bg-violet-500/80 rounded"
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Informative description */}
        <p className="text-sm text-slate-400">
          {ancActive 
            ? "AuraSound Pro neural filters scan the static city environment 48,000 times a second to dynamically generate an opposing anti-phase wave, silencing traffic, high-pitched hums, and crowd noise instantly."
            : "Transparency mode lets you stay perfectly safe and contextually aware on busy street runs, using 3D spatial micro-mics to pass ambient traffic and natural acoustics right into your system."
          }
        </p>
      </div>

      {/* Control Module Right Column */}
      <div className="flex-shrink-0 w-full md:w-80 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center justify-center relative">
        <div className="absolute top-4 right-4 flex gap-1 text-brand-gold">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xs">★</span>
          ))}
        </div>

        <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-950 rounded-full border border-slate-700 shadow-xl flex items-center justify-center mb-4 relative group">
          <AnimatePresence mode="wait">
            {ancActive ? (
              <motion.div
                key="anc-on"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                className="text-emerald-400"
              >
                <VolumeX className="w-8 h-8 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </motion.div>
            ) : (
              <motion.div
                key="anc-off"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                className="text-brand-blue"
              >
                <Volume2 className="w-8 h-8 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <h4 className="text-lg font-bold text-white mb-2">Noise Isolation Dashboard</h4>
        <p className="text-xs text-slate-400 mb-6">Tap the button to toggle and experience the instant audio acoustic isolation filter.</p>
        
        <button 
          onClick={() => setAncActive(!ancActive)}
          id="toggle-anc"
          className={`w-full py-3.5 px-6 rounded-full font-bold flex items-center justify-center gap-2 transition-all cursor-pointer select-none active:scale-95 ${
            ancActive 
              ? "bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-[0_4px_20px_rgba(16,185,129,0.4)]" 
              : "bg-brand-blue hover:bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)]"
          }`}
        >
          {ancActive ? (
            <>
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>ANC Pro Active (On)</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4" />
              <span>Transparency Mode Active</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
