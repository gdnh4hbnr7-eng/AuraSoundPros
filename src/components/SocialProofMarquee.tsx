import React from "react";
import { Sparkles } from "lucide-react";

export default function SocialProofMarquee() {
  const partners = [
    { text: "TechCrunch", icon: "📰" },
    { text: "Forbes", icon: "💎" },
    { text: "WIRED", icon: "🌐" },
    { text: "TIME", icon: "⏳" },
    { text: "Product of the Year 2026", icon: "🏆", highlight: true },
    { text: "CNET Best Buy", icon: "🥇" }
  ];

  // Repeat twice for seamless scrolling
  const list = [...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-6 md:py-8 overflow-hidden select-none relative mb-12">
      {/* Absolute shadow fade left/right */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-brand-navy to-transparent z-10 pointers-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-brand-navy to-transparent z-10 pointers-events-none"></div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {list.map((item, idx) => (
            <div 
              key={idx} 
              className={`inline-flex items-center gap-2.5 mx-8 md:mx-16 text-sm md:text-lg font-bold font-display tracking-wider ${
                item.highlight 
                  ? "text-brand-gold drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]" 
                  : "text-slate-500/80 hover:text-slate-300 transition-colors"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
