import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBrain, FaBookOpen, FaTasks, FaUsers, FaLaptop } from "react-icons/fa";

const features = [
  { icon: FaChalkboardTeacher, title: "Expert mentors", desc: "IIT, AIIMS & top university alumni guiding every batch.", span: "md:col-span-2 md:row-span-2" },
  { icon: FaLaptop, title: "Smart classrooms", desc: "4K displays, AI-driven attendance, immersive labs." },
  { icon: FaBrain, title: "Personal mentoring", desc: "1:1 weekly sessions with your dedicated mentor." },
  { icon: FaBookOpen, title: "Study materials", desc: "Curated, exam-aligned, updated every quarter." },
  { icon: FaTasks, title: "Weekly assessments", desc: "Adaptive testing that learns where you struggle." },
  { icon: FaUsers, title: "Online tests", desc: "All-India test series with detailed analytics." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">Why VidyaEdge</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            An institute that thinks like a <span className="gradient-text">product team</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative glass rounded-3xl p-6 overflow-hidden hover:border-primary/40 transition group ${f.span ?? ""}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-soft)" }} />
                <div className="relative flex flex-col h-full justify-between">
                  <div className="size-11 rounded-2xl glass-strong grid place-items-center text-electric">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
