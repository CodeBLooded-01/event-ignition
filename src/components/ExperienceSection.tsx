import { motion } from "framer-motion";
import { Sparkles, Music, Zap, Eye } from "lucide-react";
import experienceBg from "@/assets/experience-bg.jpg";

const features = [
  { icon: Sparkles, title: "Immersive Art", desc: "Walk through massive interactive art installations powered by AI and projection mapping." },
  { icon: Music, title: "3 Stages", desc: "Main Stage, Neon Stage, and the intimate Horizon Stage — each with unique sound design." },
  { icon: Zap, title: "Laser Valley", desc: "An entire zone dedicated to lasers, fog, and synchronized light shows throughout the night." },
  { icon: Eye, title: "VR Experience", desc: "Step into virtual worlds with exclusive VR sets from artists performing live on stage." },
];

const ExperienceSection = () => (
  <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
    {/* Parallax BG */}
    <div className="absolute inset-0">
      <img src={experienceBg} alt="Festival aerial" loading="lazy" width={1920} height={768} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
    </div>

    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-neon-yellow uppercase tracking-[0.3em] text-sm mb-3">Beyond Music</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold gradient-neon-text">THE EXPERIENCE</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          NovaFest isn't just a festival — it's a portal to another dimension.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-glow rounded-xl p-6 hover:bg-muted/20 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg gradient-neon flex items-center justify-center mb-4 group-hover:box-glow-cyan transition-shadow">
              <f.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
