import { motion } from "framer-motion";

const tiles = [
  { h: "h-64", hue: 260, label: "Smart classroom" },
  { h: "h-80", hue: 220, label: "NEET batch" },
  { h: "h-56", hue: 300, label: "Topper meet" },
  { h: "h-72", hue: 200, label: "Lab session" },
  { h: "h-64", hue: 320, label: "Annual day" },
  { h: "h-80", hue: 240, label: "Seminar 2024" },
  { h: "h-56", hue: 280, label: "Library" },
  { h: "h-72", hue: 210, label: "Award ceremony" },
];

export function Gallery() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">Campus life</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Inside <span className="gradient-text">VidyaEdge</span>
            </h2>
          </div>
        </motion.div>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className={`group relative ${t.h} rounded-3xl overflow-hidden glass break-inside-avoid`}
              style={{
                background: `linear-gradient(135deg, oklch(0.4 0.2 ${t.hue}), oklch(0.2 0.05 ${t.hue + 30}))`,
              }}
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-sm font-medium">{t.label}</div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-soft)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
