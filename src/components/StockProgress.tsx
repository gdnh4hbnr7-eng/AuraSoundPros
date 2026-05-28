import React, { useState, useEffect } from "react";

export default function StockProgress() {
  const [stockLeft, setStockLeft] = useState<number>(47);

  useEffect(() => {
    // Keep a persistent stock state in sessionStorage of this session active
    const storedStock = sessionStorage.getItem("aurasound_stock_active");
    if (storedStock) {
      setStockLeft(parseInt(storedStock, 10));
    } else {
      sessionStorage.setItem("aurasound_stock_active", "47");
    }

    const interval = setInterval(() => {
      setStockLeft((prev) => {
        if (prev <= 4) return prev; // Keep it low but let's not let it reach zero
        const decrement = Math.random() > 0.65 ? 1 : 0;
        const nextVal = prev - decrement;
        sessionStorage.setItem("aurasound_stock_active", nextVal.toString());
        return nextVal;
      });
    }, 12000); // Check every 12 seconds to drop stock randomly

    return () => clearInterval(interval);
  }, []);

  // Compute percentage for progress bar (assuming 50 max stock in current batch)
  const percent = Math.max(6, (stockLeft / 50) * 100);

  return (
    <div className="space-y-2.5 w-full select-none" id="stock-progress-container">
      <div className="flex justify-between text-xs font-semibold">
        <span className="text-red-400 flex items-center gap-1.5 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span>Limited Quantity Scarcity</span>
        </span>
        <span className="text-slate-400">
          Only <strong className="text-white font-mono">{stockLeft} units</strong> left
        </span>
      </div>
      
      {/* Dynamic progress bar background */}
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-amber-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(239,68,68,0.5)]"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="text-[11px] text-red-400/80 text-center font-medium">
        ⚡ 47 users are viewing this special $129.99 flash offer right now
      </div>
    </div>
  );
}
