import React, { useState } from "react";
import { 
  Star, 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  VolumeX, 
  Sparkles, 
  BatteryCharging, 
  Droplets, 
  Zap, 
  Mic, 
  SmartphoneNfc, 
  Shield, 
  Check, 
  X, 
  Play, 
  CheckCircle,
  HelpCircle,
  Lock,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import UINavbar from "./components/UINavbar";
import SocialProofMarquee from "./components/SocialProofMarquee";
import ANCModel from "./components/ANCModel";
import CountdownTimer from "./components/CountdownTimer";
import StockProgress from "./components/StockProgress";
import FaqAccordion from "./components/FaqAccordion";

import { 
  featuresData, 
  testimonialsData, 
  problemSolutions 
} from "./data";

export default function App() {
  const [demoOpen, setDemoOpen] = useState<boolean>(false);
  const [checkoutSimulated, setCheckoutSimulated] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<"cosmic" | "aurora">("cosmic");

  const handleCheckout = () => {
    setCheckoutSimulated(true);
    setTimeout(() => {
      setCheckoutSimulated(false);
    }, 6000);
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "BatteryCharging": return <BatteryCharging className="w-6 h-6 text-brand-blue" />;
      case "VolumeX": return <VolumeX className="w-6 h-6 text-brand-blue" />;
      case "Droplets": return <Droplets className="w-6 h-6 text-brand-blue" />;
      case "Zap": return <Zap className="w-6 h-6 text-brand-blue" />;
      case "Mic": return <Mic className="w-6 h-6 text-brand-blue" />;
      case "SmartphoneNfc": return <SmartphoneNfc className="w-6 h-6 text-brand-blue" />;
      default: return <Sparkles className="w-6 h-6 text-brand-blue" />;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-blue selection:text-white pb-20 sm:pb-0" id="landing-page-root">
      
      {/* Navigation Header */}
      <UINavbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center items-center select-none" id="hero">
        {/* Background Mesh Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10 flex flex-col items-center">
          
          {/* Real-time Ticking Countdown Alert */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <CountdownTimer />
          </motion.div>

          {/* Epic Main Headline with high-converting punchiness */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent max-w-4xl"
          >
            Hear Everything.<br />
            <span className="bg-gradient-to-r from-brand-blue via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Block Out the Rest.
            </span>
          </motion.h1>

          {/* Sub-headline stating unique selling points */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Experience pure studio-grade audio with active head tracking, 48-hour endurance cycles, and our AI-powered noise-blocking shields. The best-selling earbud of 2026.
          </motion.p>

          {/* CTA Button Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => scrollToSection("pricing")}
              className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-brand-blue hover:bg-blue-600 border border-brand-blue active:scale-95 text-white transition-all shadow-[0_4px_25px_rgba(37,99,235,0.5)] hover:shadow-[0_4px_35px_rgba(37,99,235,0.7)] flex items-center justify-center gap-2 cursor-pointer"
              id="hero-cta-primary"
            >
              <span>Order Now - Save $70</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection("interactive-demo")}
              className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-white/5 hover:bg-white/10 active:scale-95 text-white border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-cta-secondary"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Interactive Demo</span>
            </button>
          </motion.div>

          {/* Inline trust seals */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-y-4 gap-6 text-xs font-semibold text-slate-400 border-t border-white/5 pt-8 w-full max-w-4xl"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold" />
                ))}
              </div>
              <span>4.9/5 Rating (12,847 Reviews)</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-brand-blue" />
              <span>Free 2-Day Priority Delivery</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-brand-blue" />
              <span>30-Day Risk-Free Trials</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>Secure Encrypted Checkout</span>
            </div>
          </motion.div>

          {/* Premium CSS Mockup of earbuds to highlight 2026 slick finish */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 w-full max-w-2xl flex flex-col items-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 bg-brand-blue/20 rounded-full filter blur-3xl animate-pulse" />
              
              {/* Simulated Charging Case (Top View) */}
              <div className="absolute w-60 h-60 md:w-64 md:h-64 rounded-[80px] bg-gradient-to-b from-slate-900 via-slate-950 to-black border-2 border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] flex items-center justify-center p-6 relative">
                
                {/* Silver / Gold accent rim */}
                <div className="absolute inset-2 border border-slate-800 rounded-[70px] pointer-events-none" />
                
                {/* Visualizer internal core (LED battery indicator) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Battery Shield</span>
                  <span className="text-xl font-display font-black text-white">100% Full</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                </div>

                {/* Left Earbud Mockup Inside Custom Shell */}
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-20 h-24 bg-gradient-to-b from-slate-800 to-slate-950 rounded-[28px] border border-white/5 flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700/50 relative">
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="text-xs font-black font-display text-slate-400">L</span>
                  </div>
                </div>

                {/* Right Earbud Mockup Inside Custom Shell */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-20 h-24 bg-gradient-to-b from-slate-800 to-slate-950 rounded-[28px] border border-white/5 flex items-center justify-center shadow-xl -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700/50 relative">
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="text-xs font-black font-display text-slate-400">R</span>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Color switcher badge */}
            <div className="mt-8 flex gap-3 text-xs bg-white/5 p-1 rounded-full border border-white/10">
              <button 
                onClick={() => setSelectedColor("cosmic")}
                className={`px-4 py-1.5 rounded-full font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedColor === "cosmic" ? "bg-brand-blue text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                🌌 Cosmic Black
              </button>
              <button 
                onClick={() => setSelectedColor("aurora")}
                className={`px-4 py-1.5 rounded-full font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedColor === "aurora" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                🌊 Aurora Blue
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Social Proof Bar marquee */}
      <SocialProofMarquee />

      {/* Problem / Solution Section */}
      <section className="py-20 bg-black/20" id="problem-solution">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">The Audio Revolution</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 text-white">Why We Created AuraSound</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              The electronics ecosystem is flooded with average earbuds. We set a new standard for acoustic freedom in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">
            {problemSolutions.map((item, index) => {
              const isHighlight = item.type === "solution";
              return (
                <div 
                  key={index} 
                  className={`relative p-8 md:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                    isHighlight 
                      ? "bg-gradient-to-b from-brand-blue/15 to-transparent border border-brand-blue shadow-[0_4px_30px_rgba(37,99,235,0.08)]" 
                      : "bg-white/[0.02] border border-white/5"
                  }`}
                >
                  <div>
                    <span className="text-5xl block mb-6">{item.emoji}</span>
                    <span className={`text-[11px] font-bold tracking-widest uppercase font-mono px-2.5 py-1 rounded-full mb-3 inline-block ${
                      item.type === "problem" 
                        ? "bg-red-500/10 text-red-400" 
                        : item.type === "transition" 
                          ? "bg-amber-500/10 text-amber-400" 
                          : "bg-emerald-500/10 text-emerald-400"
                    }`}>
                      {item.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white mt-1 mb-4">{item.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive ANC Simulation Module */}
      <section className="py-20" id="interactive-demo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">Experience The Technology</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 text-white">Interactive Sound Filter Demo</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              Toggle the digital filter knob below to see how AuraSound Pro strips out ambient chatter, subway acoustics, and roaring winds.
            </p>
          </div>
          
          <ANCModel />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">Perfect Specifications</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 text-white">Engineered for Extreme Comfort</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              Packed with proprietary silicon and custom co-processors to establish unparalleled audio performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.map((f) => (
              <div 
                key={f.id}
                className="group p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-brand-blue/30 rounded-3xl transition-all duration-300 relative overflow-hidden"
              >
                {f.badge && (
                  <span className="absolute top-4 right-4 text-[9px] font-black tracking-widest uppercase bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-2.5 py-1 rounded-full">
                    {f.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 mb-6 shadow-inner">
                  {getFeatureIcon(f.iconName)}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works (3 Steps) */}
      <section className="py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">Effortless Integration</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 text-white">Pair in 3 Swift Steps</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              Zero complicated configurations. Ready to rumble straight out of the container boxes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 border-t border-dashed border-white/10 z-0" />
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue text-white font-display font-black text-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-brand-blue/20">
                1
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Unbox & Auto-Pair</h3>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Flip open the metal case next to your phone. It synchs and binds instantly via our ultra Bluetooth 5.3 module.
              </p>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue text-white font-display font-black text-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-brand-blue/20">
                2
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Customize EQ</h3>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Open the iOS/Android quick dashboard to dial in custom acoustic settings or turn on AI spatial tracking.
              </p>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue text-white font-display font-black text-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-brand-blue/20">
                3
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Enjoy Audio Freedom</h3>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Bask in extreme auditory luxury. Perfect fit, absolute zero noise leakage, and robust durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Social proof testimonials */}
      <section className="py-20 bg-black/20" id="reviews">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">Endorsed Globally</span>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full mt-2 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span>Join 50,000+ Happy Listeners</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mt-4 text-white">What The Audiophiles Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((t) => (
              <div 
                key={t.id}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors"
              >
                <div>
                  <div className="flex gap-1 text-brand-gold mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm ${t.avatarBg}`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400 stroke-[3px]" />
                      <span>Verified Buyer</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20" id="comparison">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">Direct Comparison</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 text-white">The Pure Auditory Metric</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              See how AuraSound Pro completely dwarfs standard commercial generic earbuds and premium high-priced competitors.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-slate-900/60">
                  <th className="p-6 font-display font-extrabold text-white text-sm uppercase tracking-wider">Acoustic Specs</th>
                  <th className="p-6 font-display font-extrabold text-brand-blue text-sm uppercase tracking-wider bg-brand-blue/5 border-x border-white/5">
                    AuraSound Pro
                  </th>
                  <th className="p-6 font-display font-extrabold text-slate-400 text-sm uppercase tracking-wider">Generic Brand</th>
                  <th className="p-6 font-display font-extrabold text-slate-400 text-sm uppercase tracking-wider">Overpriced Competitor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-slate-300">
                <tr>
                  <td className="p-6 font-bold text-white">Total Active Battery Cycle</td>
                  <td className="p-6 font-semibold text-white bg-brand-blue/5 border-x border-white/5">
                    🌐 48 Hours
                  </td>
                  <td className="p-6">12 Hours</td>
                  <td className="p-6">24 Hours</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Active Noise Cancellation Depth</td>
                  <td className="p-6 font-semibold text-white bg-brand-blue/5 border-x border-white/5">
                    🔊 45dB AI Pro Filters
                  </td>
                  <td className="p-6">15dB Standard</td>
                  <td className="p-6">35dB Fixed</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Waterproof Certificate</td>
                  <td className="p-6 font-semibold text-white bg-brand-blue/5 border-x border-white/5">
                    💦 IPX7 Certified
                  </td>
                  <td className="p-6">None</td>
                  <td className="p-6">IPX4 (Sweat Spray Only)</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Quick High Amperage Charging</td>
                  <td className="p-6 font-semibold text-white bg-brand-blue/5 border-x border-white/5">
                    ⚡ 10 Min = 3 Hour Loop
                  </td>
                  <td className="p-6">Not Available</td>
                  <td className="p-6">15 Min = 1 Hour Loop</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Voice Beam Microphones</td>
                  <td className="p-6 font-semibold text-white bg-brand-blue/5 border-x border-white/5">
                    🎙️ 6 Beam-form AI Mics
                  </td>
                  <td className="p-6">2 Mics (No Isolation)</td>
                  <td className="p-6">4 Mics Standard</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Moneback Guarantee Terms</td>
                  <td className="p-6 font-semibold text-emerald-400 bg-brand-blue/5 border-x border-white/5">
                    🔒 30-Day Pure Refund
                  </td>
                  <td className="p-6">14-Day Store Credit</td>
                  <td className="p-6">No Refunds Permitted</td>
                </tr>
                <tr className="bg-slate-900/30">
                  <td className="p-6 font-bold text-white">Final Retail Pricing</td>
                  <td className="p-6 bg-brand-blue/5 border-x border-white/5">
                    <span className="text-xl font-black text-brand-gold">$129.99</span>
                    <span className="text-xs text-slate-400 block line-through font-mono">$199.99</span>
                  </td>
                  <td className="p-6 text-slate-400 font-mono">$49.99</td>
                  <td className="p-6 text-slate-400 font-mono">$249.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* High Converting Pricing Offer section */}
      <section className="py-20 bg-gradient-to-t from-black/60 to-transparent relative" id="pricing">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-mono">Guaranteed Launch Deal</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Claim Your Discount Today</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              Our lowest price ever. This exclusive promotion back-flashes to $199.99 once this current production batch depletes completely.
            </p>
          </div>

          <div className="w-full max-w-lg glass-premium rounded-[36px] p-8 md:p-12 border-brand-blue flex flex-col items-center relative overflow-hidden text-center">
            
            {/* Promo banner header */}
            <div className="absolute top-0 left-0 right-0 bg-brand-gold text-slate-900 font-black text-xs uppercase tracking-widest py-2.5">
              🔥 Best Value Launch Coupon Applied
            </div>

            {/* Price Tags */}
            <div className="mt-8 flex flex-col items-center select-none">
              <span className="text-slate-500 font-semibold line-through text-base md:text-lg">$199.99 Original Price</span>
              <span className="text-5xl md:text-6xl font-black text-white mt-1 mb-2 tracking-tight">
                $129.99
              </span>
              <span className="text-xs font-bold text-emerald-400 tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">
                Save $70.00 Instantly (35% OFF)
              </span>
            </div>

            {/* Stock meter */}
            <div className="mt-8 w-full border-t border-b border-white/5 py-6">
              <StockProgress />
            </div>

            {/* Direct Add to Cart Action */}
            <button 
              onClick={handleCheckout}
              className="mt-8 w-full py-4 rounded-2xl bg-brand-blue hover:bg-blue-600 border border-brand-blue active:scale-[0.98] text-white font-black text-base uppercase tracking-wider transition-all cursor-pointer shadow-[0_4px_25px_rgba(37,99,235,0.4)] hover:shadow-[0_4px_35px_rgba(37,99,235,0.6)]"
              id="cta-buy-main"
            >
              Add to Cart – $129.99
            </button>

            {/* Mini billing features */}
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-semibold text-slate-400 font-mono">
              <span>✓ Free Express Shipping</span>
              <span>✓ 1-Year Full Warranty</span>
              <span>✓ Zero Sales Tax</span>
            </div>

            {/* Payment systems layout */}
            <div className="mt-8 flex items-center justify-center gap-4 opacity-50 select-none">
              <div className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-black text-white">VISA</div>
              <div className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-black text-white">MC</div>
              <div className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-black text-white">PAYPAL</div>
              <div className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-black text-white">APPLE PAY</div>
            </div>

            {/* Secure certification badge */}
            <p className="mt-8 text-xs text-slate-400 max-w-xs leading-relaxed border-t border-white/5 pt-6 w-full flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span><strong>30-Day Moneyback Guarantee:</strong> Fully risk-free. No questions, no hoop-jumping.</span>
            </p>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 border-t border-white/5" id="faq">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">Pure Clarification</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 text-white">Frequently Questions</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              Everything you need to verify our premium 2026 audio standard before making a sound decision.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Final Urgently Triggered Call to Action */}
      <section className="py-24 bg-brand-blue text-white text-center relative overflow-hidden select-none" id="final-cta">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-brand-blue to-indigo-700 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <span className="text-[11px] font-black uppercase tracking-widest bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full mb-6">
            Limited stock warning
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Your Perfect Sound.<br />
            Guaranteed.
          </h2>
          <p className="text-white/80 mt-6 text-sm sm:text-lg max-w-xl leading-relaxed">
            Order your AuraSound Pro earbuds today risk-free. If you are not entirely satisfied with the acoustics, return them anytime within 30 days. No questions asked.
          </p>
          
          <button 
            onClick={() => scrollToSection("pricing")}
            className="mt-10 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider bg-white text-brand-blue hover:bg-slate-50 border border-white active:scale-95 shadow-2.5xl transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Claim My Launch Discount Now</span>
            <ArrowRight className="w-4 h-4 stroke-[3px]" />
          </button>
        </div>
      </section>

      {/* Standard Footers */}
      <footer className="py-12 border-t border-white/5 bg-slate-950/40 text-slate-500 font-medium text-xs md:text-sm" id="footer">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 select-none">
            <div className="w-7 h-7 rounded-lg bg-brand-blue flex items-center justify-center font-display font-black text-white text-xs tracking-tighter">
              A
            </div>
            <span className="font-display font-extrabold text-[#ffffff] tracking-tight">
              AuraSound Pro
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#landing-page-root" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#landing-page-root" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#landing-page-root" className="hover:text-white transition-colors">Contact Support</a>
            <a href="#landing-page-root" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>

          <div className="text-center font-mono text-[11px] opacity-80 select-none">
            © {new Date().getFullYear()} AuraSound Technologies. All rights reserved.
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM MOBILE CTA (Visible only on mobile screens under 768px for CRO optimization) */}
      <div className="md:hidden fixed bottom-1.5 left-1.5 right-1.5 z-40 bg-brand-navy/95 border border-white/10 p-2.5 rounded-2xl backdrop-blur-md shadow-2xl flex gap-2">
        <div className="flex flex-col justify-center pl-2.5 select-none">
          <span className="text-[9px] text-red-400 capitalize font-mono leading-none font-bold animate-pulse">Running Out!</span>
          <span className="text-base font-black text-white leading-tight mt-0.5">$129.99</span>
        </div>
        <button 
          onClick={() => scrollToSection("pricing")}
          className="flex-1 py-3.5 rounded-xl font-bold text-xs uppercase bg-brand-blue text-white transition-transform active:scale-[0.97] shadow-lg flex items-center justify-center gap-1.5 cursor-pointer ml-auto"
        >
          <span>Claim Save $70 Deal</span>
        </button>
      </div>

      {/* Simulated purchase success trigger drawer overlay */}
      <AnimatePresence>
        {checkoutSimulated && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-slate-900 border border-brand-blue/30 rounded-3xl p-8 md:p-10 max-w-sm w-full text-center shadow-[0_0_50px_rgba(37,99,235,0.3)] relative"
            >
              <button 
                onClick={() => setCheckoutSimulated(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">Offer Secured</span>
              <h3 className="text-2xl font-black text-white mt-1 mb-3">Order Simulated!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                You have successfully claimed your AuraSound Pro launch discount of $129.99! This verifies that the page's conversion flows are active and ready to process real transactions instantly.
              </p>

              <button 
                onClick={() => setCheckoutSimulated(false)}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase"
              >
                Continue Demonstrating
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
