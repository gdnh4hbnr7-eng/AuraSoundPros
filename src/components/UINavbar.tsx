import React, { useState, useEffect } from "react";
import { Menu, X, Star, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function UINavbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-brand-navy/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl" 
            : "bg-transparent py-6"
        }`}
        id="main-nav-bar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Left */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer select-none text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center font-display font-black text-white text-lg tracking-tighter shadow-[0_0_15px_rgba(37,99,235,0.6)]">
              A
            </div>
            <span className="font-display font-black text-xl tracking-tight text-white">
              AuraSound<span className="text-brand-blue">.</span>Pro
            </span>
          </button>

          {/* Links Center */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <button onClick={() => scrollToSection("features")} className="hover:text-white transition-colors cursor-pointer">Features</button>
            <button onClick={() => scrollToSection("reviews")} className="hover:text-white transition-colors cursor-pointer">Reviews</button>
            <button onClick={() => scrollToSection("comparison")} className="hover:text-white transition-colors cursor-pointer">Comparison</button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors cursor-pointer">FAQ</button>
          </div>

          {/* CTA Right */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("pricing")}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Launch Deal</span>
              <span className="text-brand-gold font-bold font-mono">$129.99</span>
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue hover:bg-blue-600 active:scale-95 text-white transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.6)] flex items-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Buy Now</span>
            </button>
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => scrollToSection("pricing")}
              className="px-4 py-2 rounded-full text-xs font-bold bg-brand-blue text-white mr-1 active:scale-95"
            >
              $129
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-all focus:outline-none"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[74px] left-0 right-0 bg-brand-navy border-b border-white/10 px-6 py-8 z-40 md:hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col gap-5 select-none"
          >
            <button 
              onClick={() => scrollToSection("features")} 
              className="w-full text-left py-2 border-b border-white/5 text-lg font-semibold text-slate-300 hover:text-white"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("reviews")} 
              className="w-full text-left py-2 border-b border-white/5 text-lg font-semibold text-slate-300 hover:text-white"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("comparison")} 
              className="w-full text-left py-2 border-b border-white/5 text-lg font-semibold text-slate-300 hover:text-white"
            >
              Comparison Table
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="w-full text-left py-2 border-b border-white/5 text-lg font-semibold text-slate-300 hover:text-white"
            >
              FAQ
            </button>
            
            <div className="pt-4 flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection("pricing")}
                className="w-full py-3.5 rounded-xl font-bold bg-brand-blue text-white text-center shadow-lg active:scale-95 transition-transform"
              >
                Claim Exclusive Discount – $129.99
              </button>
              <div className="text-center text-xs text-slate-500 font-mono">
                ⭐ 4.9/5 Rating | Free Shipping Included
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
