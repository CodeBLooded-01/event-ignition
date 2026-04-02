import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

type ScheduleItem = { time: string; artist: string; stage: string; genre: string };

const schedule: Record<string, ScheduleItem[]> = {
  "Day 1 — Aug 15": [
    { time: "6:00 PM", artist: "SONIC BLOOM", stage: "Neon Stage", genre: "Opening Set" },
    { time: "7:30 PM", artist: "DIGITAL KARMA", stage: "Horizon Stage", genre: "Synthwave" },
    { time: "9:00 PM", artist: "PULSE ENGINE", stage: "Neon Stage", genre: "Techno" },
    { time: "10:30 PM", artist: "AURORA WAVE", stage: "Main Stage", genre: "Headliner" },
  ],
  "Day 2 — Aug 16": [
    { time: "5:00 PM", artist: "ZERO GRAVITY", stage: "Horizon Stage", genre: "Ambient" },
    { time: "7:00 PM", artist: "ASTRAL GROOVE", stage: "Neon Stage", genre: "House" },
    { time: "9:00 PM", artist: "NEON PROPHET", stage: "Main Stage", genre: "Headliner" },
    { time: "11:00 PM", artist: "CIPHER", stage: "Main Stage", genre: "Headliner" },
  ],
  "Day 3 — Aug 17": [
    { time: "5:00 PM", artist: "CHROME HEARTS", stage: "Horizon Stage", genre: "Indie" },
    { time: "7:00 PM", artist: "VORTEX", stage: "Neon Stage", genre: "Drum & Bass" },
    { time: "9:00 PM", artist: "ECHO DRIFT", stage: "Main Stage", genre: "Headliner" },
    { time: "11:00 PM", artist: "NOVA SYNC", stage: "Main Stage", genre: "Closing Set" },
  ],
};

const days = Object.keys(schedule);

const ScheduleSection = () => {
  const [active, setActive] = useState(days[0]);

  return (
    <section id="schedule" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-3 text-glow-magenta">When & Where</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-neon-text">SCHEDULE</h2>
        </motion.div>

        {/* Day tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActive(day)}
              className={`px-5 py-3 rounded-full font-display font-medium text-sm transition-all ${
                active === day
                  ? "gradient-neon text-primary-foreground box-glow-cyan"
                  : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {schedule[active].map((item, i) => (
              <motion.div
                key={item.artist}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-glow rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-primary min-w-[110px]">
                  <Clock size={16} />
                  <span className="font-display font-bold">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-foreground text-lg">{item.artist}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {item.stage}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs border border-secondary/30 text-secondary self-start sm:self-center">
                  {item.genre}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ScheduleSection;
