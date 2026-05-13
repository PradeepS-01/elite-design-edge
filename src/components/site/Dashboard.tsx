import { motion } from "framer-motion";
import { FaUserGraduate, FaRupeeSign, FaChartLine, FaBell, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const bars = [42, 68, 55, 82, 71, 90, 65];

export function Dashboard() {
  return (
    <section id="dashboard" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">Admin Dashboard</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            One control room for your <span className="gradient-text">entire institute</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-strong rounded-3xl p-4 md:p-6 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/3 size-72 rounded-full bg-electric/30 blur-3xl -z-0" />
          <div className="absolute -bottom-32 right-10 size-72 rounded-full bg-violet/30 blur-3xl -z-0" />

          <div className="relative grid grid-cols-12 gap-4">
            {/* KPI cards */}
            {[
              { icon: FaUserGraduate, label: "Active students", value: "12,548", trend: "+8.4%" },
              { icon: FaRupeeSign, label: "Fees collected", value: "₹84.2L", trend: "+12.1%" },
              { icon: FaChartLine, label: "Avg test score", value: "72.6%", trend: "+3.2%" },
              { icon: FaCheckCircle, label: "Attendance", value: "94.3%", trend: "+1.8%" },
            ].map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.label} className="col-span-6 md:col-span-3 glass rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="size-9 rounded-xl bg-electric/15 grid place-items-center text-electric"><Icon /></div>
                    <span className="text-[10px] text-emerald-400 glass rounded-full px-2 py-0.5">{k.trend}</span>
                  </div>
                  <div className="mt-3 font-display text-2xl font-semibold">{k.value}</div>
                  <div className="text-xs text-muted-foreground">{k.label}</div>
                </div>
              );
            })}

            {/* Chart */}
            <div className="col-span-12 md:col-span-8 glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Test performance</div>
                  <div className="text-xs text-muted-foreground">Last 7 weeks</div>
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-electric" /> NEET</span>
                  <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-violet" /> JEE</span>
                </div>
              </div>
              <div className="mt-6 flex items-end gap-3 h-40">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.06 }}
                      className="w-full rounded-t-lg gradient-primary opacity-90"
                      style={{ minHeight: 4 }}
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h * 0.6}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
                      className="w-full rounded-t-lg bg-violet/60"
                      style={{ minHeight: 4 }}
                    />
                    <span className="text-[10px] text-muted-foreground">W{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="col-span-12 md:col-span-4 glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Notifications</div>
                <FaBell className="text-electric" />
              </div>
              <ul className="mt-4 space-y-3 text-xs">
                {[
                  { t: "5 new admissions today", c: "text-emerald-400" },
                  { t: "Fees pending: 14 students", c: "text-yellow-400" },
                  { t: "Mock test results published", c: "text-electric" },
                  { t: "Parent meeting · Saturday", c: "text-violet" },
                ].map((n) => (
                  <li key={n.t} className="flex items-start gap-2">
                    <span className={`size-1.5 mt-1.5 rounded-full ${n.c.replace("text", "bg")}`} />
                    <span className="text-muted-foreground">{n.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming exams */}
            <div className="col-span-12 md:col-span-7 glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Upcoming exams</div>
                <FaCalendarAlt className="text-electric" />
              </div>
              <div className="mt-4 divide-y divide-white/5">
                {[
                  { name: "NEET Mock 12", date: "May 18", count: "1,240 students" },
                  { name: "JEE Advanced Test 4", date: "May 22", count: "860 students" },
                  { name: "TNPSC Group 2 Practice", date: "May 25", count: "420 students" },
                ].map((e) => (
                  <div key={e.name} className="flex items-center justify-between py-3 text-sm">
                    <div>
                      <div className="font-medium">{e.name}</div>
                      <div className="text-xs text-muted-foreground">{e.count}</div>
                    </div>
                    <span className="text-xs glass rounded-full px-3 py-1 text-electric">{e.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance ring */}
            <div className="col-span-12 md:col-span-5 glass rounded-2xl p-5 flex items-center gap-6">
              <div className="relative size-32 shrink-0">
                <svg viewBox="0 0 100 100" className="size-full -rotate-90">
                  <circle cx="50" cy="50" r="42" stroke="oklch(1 0 0 / 0.08)" strokeWidth="10" fill="none" />
                  <motion.circle
                    cx="50" cy="50" r="42" fill="none" strokeWidth="10" strokeLinecap="round"
                    stroke="url(#g1)" strokeDasharray="264"
                    initial={{ strokeDashoffset: 264 }}
                    whileInView={{ strokeDashoffset: 264 - 264 * 0.943 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.2 255)" />
                      <stop offset="100%" stopColor="oklch(0.65 0.24 295)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 grid place-items-center font-display text-2xl font-semibold">94.3%</div>
              </div>
              <div>
                <div className="text-sm font-medium">Today's attendance</div>
                <div className="text-xs text-muted-foreground mt-1">11,830 of 12,548 present</div>
                <div className="mt-3 text-xs text-emerald-400">+1.8% vs last week</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
