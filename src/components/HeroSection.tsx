import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const EVENT_DATE = new Date("2026-08-15T18:00:00");

const calcTimeLeft = () => {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="border-glow rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px] text-center">
      <span className="text-3xl md:text-5xl font-display font-bold text-primary text-glow-cyan">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-widest">{label}</span>
  </div>
);

const HeroSection = () => {
  const [time, setTime] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Festival stage" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-4 text-glow-cyan"
        >
          August 15–17, 2026 · Neo Arena, Los Angeles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none mb-6"
        >
          <span className="gradient-neon-text">NOVA</span>
          <span className="text-foreground">FEST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Three nights of transcendent music, immersive art, and futuristic experiences.
          The future of festivals starts here.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-3 md:gap-6 mb-12"
        >
          <CountdownUnit value={time.days} label="Days" />
          <CountdownUnit value={time.hours} label="Hours" />
          <CountdownUnit value={time.minutes} label="Min" />
          <CountdownUnit value={time.seconds} label="Sec" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.querySelector("#tickets")?.scrollIntoView({ behavior: "smooth" })}
            className="gradient-neon text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity box-glow-cyan"
          >
            Get Your Pass
          </button>
          <button
            onClick={() => document.querySelector("#lineup")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-primary/30 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/10 transition-colors"
          >
            See Lineup
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
