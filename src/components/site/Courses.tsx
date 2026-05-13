import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  FaStethoscope, FaAtom, FaLandmark, FaGlobe, FaMicrophone, FaLaptopCode,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const courses: { icon: IconType; name: string; duration: string; features: string[]; color: string }[] = [
  {
    icon: FaStethoscope, name: "NEET", duration: "1–2 years",
    features: ["Live + recorded", "Daily mock tests", "AIIMS faculty"],
    color: "from-rose-500/30 to-pink-500/10",
  },
  {
    icon: FaAtom, name: "JEE Main + Advanced", duration: "1–2 years",
    features: ["IIT-rank framework", "Weekly Olympiads", "Doubt rooms 24/7"],
    color: "from-electric/30 to-violet/10",
  },
  {
    icon: FaLandmark, name: "TNPSC Group I–IV", duration: "6–12 months",
    features: ["Tamil + English", "Current affairs daily", "Prelims + mains"],
    color: "from-amber-500/30 to-orange-500/10",
  },
  {
    icon: FaGlobe, name: "IELTS Academic", duration: "8–12 weeks",
    features: ["Band 7+ guarantee", "1:1 speaking labs", "AI essay scoring"],
    color: "from-emerald-500/30 to-teal-500/10",
  },
  {
    icon: FaMicrophone, name: "Spoken English", duration: "3 months",
    features: ["Confidence drills", "Accent training", "Live conversations"],
    color: "from-violet/30 to-fuchsia-500/10",
  },
  {
    icon: FaLaptopCode, name: "Computer Courses", duration: "3–6 months",
    features: ["MS Office, Tally", "Python & web dev", "Industry certificate"],
    color: "from-cyan-500/30 to-electric/10",
  },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">Programs</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold max-w-xl">
              Built for every <span className="gradient-text">ambition</span>
            </h2>
          </motion.div>
          <p className="text-muted-foreground max-w-md">
            From medical entrance to civil services — every course is engineered
            with the discipline of a startup product team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-3xl p-7 overflow-hidden hover:border-primary/40 transition"
              >
                <div className={`absolute -top-20 -right-20 size-60 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${c.color}`} />

                <div className="relative flex items-start justify-between">
                  <div className="size-12 rounded-2xl glass-strong grid place-items-center text-electric text-xl">
                    <Icon />
                  </div>
                  <span className="text-xs glass rounded-full px-3 py-1 text-muted-foreground">
                    {c.duration}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-2xl font-semibold">{c.name}</h3>

                <ul className="relative mt-4 space-y-2 text-sm text-muted-foreground">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-electric" /> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-electric transition"
                >
                  Explore program <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
