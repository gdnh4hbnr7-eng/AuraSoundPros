import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Standard high CRO practice: Initialize 48 hour target in localStorage
    // to preserve urgency on refresh.
    const localStorageKey = "aurasound_countdown_target";
    let targetTimeStr = localStorage.getItem(localStorageKey);
    let targetTime: number;

    if (!targetTimeStr) {
      targetTime = Date.now() + 48 * 60 * 60 * 1000;
      localStorage.setItem(localStorageKey, targetTime.toString());
    } else {
      targetTime = parseInt(targetTimeStr, 10);
      // If of previous visits, expired, reset target so countdown is always alive and exciting
      if (targetTime < Date.now()) {
        targetTime = Date.now() + 48 * 60 * 60 * 1000;
        localStorage.setItem(localStorageKey, targetTime.toString());
      }
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        // Recycle just in case to maintain live countdown
        const nextTarget = Date.now() + 48 * 60 * 60 * 1000;
        localStorage.setItem(localStorageKey, nextTarget.toString());
        setTimeLeft({ hours: 48, minutes: 0, seconds: 0 });
      } else {
        const totalSeconds = Math.floor(diff / 1000);
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        setTimeLeft({ hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex gap-4 md:gap-6 bg-red-500/10 border border-red-500/20 px-6 py-3.5 rounded-2xl items-center shadow-[0_0_24px_rgba(239,68,68,0.05)] select-none">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
      </span>
      <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider hidden sm:inline">
        Offer Ends In:
      </span>
      <div className="flex gap-4 font-mono font-black text-xs">
        <div className="flex flex-col items-center">
          <span className="text-lg md:text-xl text-red-500 leading-none" id="hero-hours">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] text-red-400/60 uppercase font-sans mt-1">Hrs</span>
        </div>
        <div className="text-lg md:text-xl text-red-500/50 leading-none self-center font-sans">:</div>
        <div className="flex flex-col items-center">
          <span className="text-lg md:text-xl text-red-500 leading-none" id="hero-minutes">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] text-red-400/60 uppercase font-sans mt-1">Min</span>
        </div>
        <div className="text-lg md:text-xl text-red-500/50 leading-none self-center font-sans">:</div>
        <div className="flex flex-col items-center">
          <span className="text-lg md:text-xl text-red-500 leading-none" id="hero-seconds">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] text-red-400/60 uppercase font-sans mt-1">Sec</span>
        </div>
      </div>
    </div>
  );
}
