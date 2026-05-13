import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const reviews = [
  { name: "Dharshini R.", role: "NEET 2024 · AIR 412", text: "The mentors didn't just teach — they engineered my discipline. Every test review felt like a strategy session.", hue: 280 },
  { name: "Mr. Sundaram (parent)", role: "Father of JEE topper", text: "We've tried two big institutes before. The transparency, the dashboards, the personal calls — VidyaEdge is on a different level.", hue: 220 },
  { name: "Hari Prasad", role: "JEE Advanced · AIR 891", text: "The doubt rooms at midnight literally saved my Mains. The faculty actually answers — not assistants, the actual faculty.", hue: 320 },
  { name: "Nivetha K.", role: "TNPSC Group 2 selected", text: "Tamil + English bilingual classes were the difference. The current affairs sessions are pure gold.", hue: 200 },
  { name: "Mrs. Latha (parent)", role: "Mother of NEET aspirant", text: "I get a weekly mentor call about my daughter's progress. No coaching ever did this. Worth every rupee.", hue: 260 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">Loved by students & parents</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Real stories. <span className="gradient-text">Real results.</span>
            </h2>
          </motion.div>
          <div className="hidden md:flex gap-2">
            <button onClick={prev} className="size-11 rounded-full glass-strong grid place-items-center hover:bg-white/5">
              <HiArrowLeft />
            </button>
            <button onClick={next} className="size-11 rounded-full glass-strong grid place-items-center hover:bg-white/5">
              <HiArrowRight />
            </button>
          </div>
        </div>

        <div className="relative h-[320px] md:h-[280px]">
          {reviews.map((r, idx) => {
            const offset = (idx - i + reviews.length) % reviews.length;
            const visible = offset <= 2;
            return (
              <motion.div
                key={r.name}
                animate={{
                  opacity: visible ? (offset === 0 ? 1 : 0.4) : 0,
                  scale: offset === 0 ? 1 : 0.92,
                  x: offset * 40,
                  y: offset * 16,
                  zIndex: reviews.length - offset,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 mx-auto max-w-2xl glass-strong rounded-3xl p-8 md:p-10"
              >
                <FaQuoteLeft className="text-electric/40 text-3xl" />
                <p className="mt-4 text-lg md:text-xl font-display leading-relaxed">{r.text}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-11 rounded-full"
                      style={{ background: `radial-gradient(circle at 30% 30%, oklch(0.55 0.2 ${r.hue}), oklch(0.25 0.05 ${r.hue}))` }}
                    />
                    <div>
                      <div className="font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, k) => <FaStar key={k} size={12} />)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="md:hidden flex justify-center gap-2 mt-6">
          <button onClick={prev} className="size-10 rounded-full glass-strong grid place-items-center"><HiArrowLeft /></button>
          <button onClick={next} className="size-10 rounded-full glass-strong grid place-items-center"><HiArrowRight /></button>
        </div>
      </div>
    </section>
  );
}
