import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Twitter } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-3 text-glow-magenta">Get In Touch</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold gradient-neon-text">CONTACT</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="border-glow rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-primary" size={20} />
              <h3 className="font-display font-bold text-foreground">Venue</h3>
            </div>
            <p className="text-muted-foreground text-sm">Neo Arena<br />1234 Sunset Blvd, Los Angeles, CA 90028</p>
          </div>
          <div className="border-glow rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-primary" size={20} />
              <h3 className="font-display font-bold text-foreground">Email</h3>
            </div>
            <p className="text-muted-foreground text-sm">info@novafest.com</p>
          </div>
          <div className="border-glow rounded-xl p-6">
            <h3 className="font-display font-bold text-foreground mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={22} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={22} /></a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border-glow rounded-xl p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Name</label>
            <input className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Email</label>
            <input type="email" className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="your@email.com" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Message</label>
            <textarea rows={4} className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Your message..." />
          </div>
          <button type="submit" className="w-full gradient-neon text-primary-foreground py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
