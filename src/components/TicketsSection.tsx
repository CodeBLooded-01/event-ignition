import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "GENERAL",
    price: "$149",
    highlight: false,
    features: ["3-day access", "All stages", "Food village access", "Community camping"],
  },
  {
    name: "VIP",
    price: "$349",
    highlight: true,
    features: ["Everything in General", "VIP viewing decks", "Premium bar access", "Artist meet & greet", "Exclusive merch pack"],
  },
  {
    name: "ULTRA",
    price: "$799",
    highlight: false,
    features: ["Everything in VIP", "Backstage access", "Private lounge", "Luxury glamping", "After-party pass", "Shuttle service"],
  },
];

const TicketsSection = () => (
  <section id="tickets" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-3 text-glow-magenta">Secure Your Spot</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold gradient-neon-text">TICKETS</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative rounded-2xl p-8 flex flex-col ${
              tier.highlight
                ? "gradient-neon box-glow-cyan"
                : "border-glow"
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-background px-4 py-1 rounded-full text-xs font-bold text-primary border border-primary/30">
                <Star size={12} /> MOST POPULAR
              </div>
            )}
            <h3 className={`font-display font-bold text-xl mb-2 ${tier.highlight ? "text-primary-foreground" : "text-foreground"}`}>
              {tier.name}
            </h3>
            <div className={`text-4xl font-display font-bold mb-6 ${tier.highlight ? "text-primary-foreground" : "text-primary text-glow-cyan"}`}>
              {tier.price}
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {tier.features.map((f) => (
                <li key={f} className={`flex items-center gap-2 text-sm ${tier.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  <Check size={16} className={tier.highlight ? "text-primary-foreground" : "text-primary"} />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-full font-bold text-sm transition-all ${
                tier.highlight
                  ? "bg-background text-primary hover:bg-background/90"
                  : "gradient-neon text-primary-foreground hover:opacity-90"
              }`}
            >
              Buy {tier.name}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TicketsSection;
