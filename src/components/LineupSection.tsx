import { motion } from "framer-motion";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import artist4 from "@/assets/artist-4.jpg";

const headliners = [
  { name: "AURORA WAVE", genre: "Electronic / Synthwave", image: artist1 },
  { name: "CIPHER", genre: "Techno / Industrial", image: artist2 },
  { name: "NEON PROPHET", genre: "Hip-Hop / Future Bass", image: artist3 },
  { name: "ECHO DRIFT", genre: "Indie / Alt-Rock", image: artist4 },
];

const additionalArtists = [
  "VORTEX", "MIDNIGHT SUN", "PULSE ENGINE", "DIGITAL KARMA",
  "ZERO GRAVITY", "PHANTOM CIRCUIT", "ASTRAL GROOVE", "NOVA SYNC",
  "DEEP CURRENT", "SONIC BLOOM", "ULTRAVIOLET", "CHROME HEARTS",
];

const LineupSection = () => (
  <section id="lineup" className="py-24 md:py-32 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3 text-glow-cyan">The Artists</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold gradient-neon-text">LINEUP</h2>
      </motion.div>

      {/* Headliners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {headliners.map((artist, i) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-xl border-glow cursor-pointer"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={artist.image}
                alt={artist.name}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-display font-bold text-xl text-foreground">{artist.name}</h3>
              <p className="text-sm text-primary">{artist.genre}</p>
            </div>
            <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold gradient-neon text-primary-foreground">
              HEADLINER
            </div>
          </motion.div>
        ))}
      </div>

      {/* More artists */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-glow rounded-xl p-8"
      >
        <h3 className="font-display font-bold text-xl text-center text-foreground mb-6">+ More Artists</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {additionalArtists.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-pointer"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default LineupSection;
