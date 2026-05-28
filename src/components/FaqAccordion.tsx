import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { faqData, FAQ } from "../data";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq1"); // Open first one by default for engagement

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto" id="faq-accordion-group">
      {faqData.map((faq: FAQ) => {
        const isOpen = openId === faq.id;
        return (
          <div 
            key={faq.id}
            className={`border rounded-2xl transition-all duration-300 ${
              isOpen 
                ? "bg-slate-900/60 border-brand-blue/40 shadow-[0_4px_20px_rgba(37,99,235,0.05)]" 
                : "bg-white/[0.02] border-white/5 hover:border-white/10"
            }`}
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base md:text-lg cursor-pointer focus:outline-none select-none text-white header-faq-btn"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isOpen ? "bg-brand-blue text-white" : "bg-white/5 text-slate-400"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm md:text-base text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
