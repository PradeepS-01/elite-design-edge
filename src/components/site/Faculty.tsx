import { motion } from "framer-motion";

const faculty = [
  { name: "Dr. Anitha Raman", role: "Lead · NEET Biology", badge: "AIIMS · 14 yrs", hue: 280 },
  { name: "Prof. Karthik V.", role: "Lead · JEE Physics", badge: "IIT-M · 11 yrs", hue: 220 },
  { name: "Selvi Meena", role: "Lead · TNPSC", badge: "Ex-IAS coach", hue: 320 },
  { name: "Joseph A.", role: "IELTS Trainer", badge: "Cambridge · CELTA", hue: 180 },
  { name: "Dr. Priya N.", role: "Chemistry · NEET", badge: "PhD IISc", hue: 260 },
  { name: "Arun Kumar", role: "Math · JEE", badge: "IIT-B alum", hue: 200 },
];

export function Faculty() {
  return (
    <section id="faculty" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">Faculty</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Mentors who've been <span className="gradient-text">in your shoes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {faculty.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-3xl p-5 text-center hover:border-primary/40 transition"
            >
              <div className="relative mx-auto size-24 rounded-full p-[2px] gradient-primary">
                <div
                  className="size-full rounded-full grid place-items-center text-3xl font-display font-semibold text-foreground"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, oklch(0.55 0.2 ${p.hue}), oklch(0.25 0.05 ${p.hue}))`,
                  }}
                >
                  {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition glow-primary" />
              </div>
              <div className="mt-4 font-display font-semibold">{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.role}</div>
              <div className="mt-3 inline-block text-[10px] uppercase tracking-wider glass rounded-full px-2.5 py-1 text-electric">
                {p.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
