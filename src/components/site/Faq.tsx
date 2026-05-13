import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus } from "react-icons/hi";

const faqs = [
  { q: "Do you offer both online and offline batches?", a: "Yes — every program runs in three modes: in-classroom at our 8 Tamil Nadu centers, live online with full interactivity, and on-demand recorded with mentor support." },
  { q: "Can I switch courses after enrollment?", a: "Absolutely. You can switch streams within the first 21 days with a full credit transfer. Our mentors will help you re-plan your roadmap." },
  { q: "Are there scholarships available?", a: "We award merit scholarships up to 100% based on our entrance test, and need-based scholarships through our trust. Over ₹1.2 Cr awarded last year." },
  { q: "How are doubt sessions handled?", a: "24/7 doubt rooms with response under 15 minutes during day hours and dedicated 1:1 weekly mentor calls for every student." },
  { q: "What if I miss a live class?", a: "Every class is recorded and uploaded within 30 minutes. You also get a 5-minute AI-generated recap and notes." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">FAQ</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Questions, <span className="gradient-text">answered</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-electric">
                    <HiPlus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
