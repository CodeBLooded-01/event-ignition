import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "When and where is NovaFest 2026?", a: "NovaFest takes place August 15–17, 2026 at the Neo Arena in Los Angeles, California. Gates open at 4 PM each day." },
  { q: "Are tickets refundable?", a: "Tickets are fully refundable up to 30 days before the event. After that, a 50% refund is available up to 7 days prior." },
  { q: "What should I bring?", a: "Bring valid ID, your ticket (digital or printed), comfortable shoes, sunscreen, and a portable charger. No outside food or beverages allowed." },
  { q: "Is there camping available?", a: "Yes! General ticket holders get access to community camping. VIP and ULTRA guests get premium glamping options with power and showers." },
  { q: "Can I upgrade my ticket on-site?", a: "Subject to availability, upgrades can be purchased at the festival box office or through our app." },
  { q: "What's the age requirement?", a: "NovaFest is 18+. Valid government-issued photo ID is required for entry." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-card/50">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3 text-glow-cyan">Got Questions?</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold gradient-neon-text">FAQ</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`faq-${i}`} className="border-glow rounded-xl px-5 overflow-hidden">
              <AccordionTrigger className="text-left font-display font-medium text-foreground hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
