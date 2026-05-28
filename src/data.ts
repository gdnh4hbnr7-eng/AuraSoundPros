export interface Feature {
  id: string;
  iconName: string; // Used to select Lucide icons
  title: string;
  description: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  avatarBg: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProblemSolution {
  type: 'problem' | 'transition' | 'solution';
  emoji: string;
  title: string;
  description: string;
}

export const featuresData: Feature[] = [
  {
    id: "f1",
    iconName: "BatteryCharging",
    title: "48-Hour Elite Battery",
    description: "Keep the symphony alive. Get up to 10 hours of straight uncompromised playback, plus an additional 38 hours in the dynamic wireless casing.",
    badge: "Indestructible"
  },
  {
    id: "f2",
    iconName: "VolumeX",
    title: "Active Noise Cancellation Pro",
    description: "Silence the world. Experience a deep 45dB block-out of background hums and static chatter with our industry-leading machine learning ANC engine.",
    badge: "Best-in-Class"
  },
  {
    id: "f3",
    iconName: "Droplets",
    title: "IPX7 Waterproof Defense",
    description: "Unfazed by storms. Completely submerge-proof and engineered with nanomaterial defense shields to block heavy sweat, rains, and accidental drops.",
  },
  {
    id: "f4",
    iconName: "Zap",
    title: "10-Min Hyper Charge",
    description: "Zero downtime. A breakthrough high-amperage charge delivers a full 3 hours of spatial-grade audio in just 10 quick minutes under the hood.",
    badge: "Proprietary"
  },
  {
    id: "f5",
    iconName: "Mic",
    title: "AI Voice Isolation",
    description: "Acoustic perfection. Six beamforming microphones scan surroundings and erase wind or crowd roar, rendering your voice with direct studio precision.",
  },
  {
    id: "f6",
    iconName: "SmartphoneNfc",
    title: "Instant Universal Pairing",
    description: "Infinite connectivity. Auto-synch with iOS, Android, tablet, or PC in less than 0.1 seconds, featuring continuous dual-device pairing.",
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "James D.",
    initials: "JD",
    rating: 5,
    text: "Truly better than my $400 over-ear studio monitors. The ANC operates with a spooky silent calm, and the heavy bass response is perfectly pure.",
    avatarBg: "bg-indigo-600"
  },
  {
    id: "t2",
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    text: "The battery life is an absolute powerhouse. I charge the case once a week and commute every single day without a single low-power beep.",
    avatarBg: "bg-pink-600"
  },
  {
    id: "t3",
    name: "Michael K.",
    initials: "MK",
    rating: 5,
    text: "As an ultra-marathoner, finding secure earbuds was impossible until AuraSound. They stay locked in through miles of heavy sweat and downpours.",
    avatarBg: "bg-emerald-600"
  }
];

export const faqData: FAQ[] = [
  {
    id: "faq1",
    question: "Is AuraSound Pro compatible with both iOS and Android?",
    answer: "Absolutely. AuraSound Pro utilizes advanced Bluetooth 5.3 architecture which integrates seamlessly with Apple iOS, Google Android, Windows, macOS, and Linux hardware."
  },
  {
    id: "faq2",
    question: "How long does the battery actually last during calls vs. music?",
    answer: "You get 10 hours of continuous music playback with ANC disabled (8 hours with ANC Pro active). For continuous calls, the extreme beamforming microphones hold a robust 7-hour active threshold. The case recharges them completely 4 times over."
  },
  {
    id: "faq3",
    question: "What makes the Active Noise Cancellation 'AI-Powered'?",
    answer: "Traditional ANC only blocks constant frequencies. AuraSound Pro implements our patented 2026 neural acoustic co-processor which samples ambient audio 48,000 times per second, dynamically tailoring out sudden noises like trains, shouting, and high-frequency screeching."
  },
  {
    id: "faq4",
    question: "Can I shower, swim, or get rained on with the earbuds?",
    answer: "Yes. With a fully verified IPX7 waterproof rating, the earbuds can withstand complete immersion in water up to 1 meter (3 feet) for 30 minutes. It's perfectly safe for intense sweat, rain showers, and intense athletic use (not intended for deep salt-water scuba diving)."
  },
  {
    id: "faq5",
    question: "What is your return policy and warranty guarantee?",
    answer: "We offer an ironclad, no-questions-asked 30-day money-back guarantee. If you are not absolutely blown away by the clarity, return them for a 100% refund. We also provide a full 1-year product replacement warranty on every order."
  },
  {
    id: "faq6",
    question: "How long does shipping take and how is my order tracked?",
    answer: "All US orders are shipped via premium FedEx or UPS 2-day priority (absolutely free). You will receive an automated tracking link via email the second your package leaves our fulfillment center in California."
  }
];

export const problemSolutions: ProblemSolution[] = [
  {
    type: "problem",
    emoji: "😫",
    title: "Cheap, Tinny Earbuds",
    description: "Generic models bleed audio, hurt your ear canals after an hour, and die when you need them most in noisy, high-stress environments."
  },
  {
    type: "transition",
    emoji: "⚡",
    title: "Uncompromising Tech",
    description: "Our engineers refused to trade battery life for comfort. We designed an advanced custom driver system around pure human anatomy."
  },
  {
    type: "solution",
    emoji: "✨",
    title: "AuraSound Pro Audio",
    description: "Flawless studio-fidelity sound, a weightless ergonomic lock-in fit, and an industry-first 48-hour intelligent cycle case."
  }
];
