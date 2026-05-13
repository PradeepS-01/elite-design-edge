import { motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaBell, FaPlay, FaCheckCircle } from "react-icons/fa";

export function AppPromo() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">Mobile App</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Your entire prep, in your <span className="gradient-text">pocket</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-md">
              Track progress, attend live classes, take mock tests and chat with mentors —
              all inside one beautifully designed app.
            </p>

            <ul className="mt-8 space-y-3">
              {["Live attendance & schedule", "AI-powered weak-topic alerts", "Offline lecture downloads", "Parent dashboard included"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <FaCheckCircle className="text-electric" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass-strong hover:bg-white/5">
                <FaApple size={20} /> <div className="text-left leading-tight"><div className="text-[10px] text-muted-foreground">Download on</div><div className="text-sm font-medium">App Store</div></div>
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass-strong hover:bg-white/5">
                <FaGooglePlay size={18} /> <div className="text-left leading-tight"><div className="text-[10px] text-muted-foreground">Get it on</div><div className="text-sm font-medium">Google Play</div></div>
              </a>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-60" style={{ background: "var(--gradient-primary)" }} />

            <div className="relative animate-float">
              <div className="w-[280px] h-[580px] rounded-[44px] glass-strong p-3 border border-white/10 shadow-2xl">
                <div className="size-full rounded-[34px] bg-gradient-to-br from-[oklch(0.18_0.03_270)] to-[oklch(0.12_0.02_270)] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />

                  <div className="pt-10 px-5">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Mon, 12 May</span>
                      <FaBell />
                    </div>

                    <div className="mt-4">
                      <div className="text-xs text-muted-foreground">Welcome back,</div>
                      <div className="text-xl font-display font-semibold">Karthik 👋</div>
                    </div>

                    <div className="mt-5 rounded-2xl p-4 gradient-primary text-primary-foreground">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs opacity-80">Today's class</div>
                          <div className="font-semibold mt-0.5">Organic Chem · L24</div>
                          <div className="text-xs opacity-80 mt-1">Starts in 12 min</div>
                        </div>
                        <div className="size-10 rounded-full bg-white/20 grid place-items-center">
                          <FaPlay size={12} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl glass p-3">
                        <div className="text-[10px] text-muted-foreground">Weekly streak</div>
                        <div className="text-2xl font-display font-semibold gradient-text">28d</div>
                      </div>
                      <div className="rounded-2xl glass p-3">
                        <div className="text-[10px] text-muted-foreground">Mock score</div>
                        <div className="text-2xl font-display font-semibold gradient-text">684</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl glass p-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Physics progress</span>
                        <span className="text-electric">72%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-[72%] gradient-primary rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-xs mt-3">
                        <span className="text-muted-foreground">Chemistry</span>
                        <span className="text-electric">58%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-[58%] gradient-primary rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -left-16 top-32 hidden md:block glass-strong rounded-2xl p-3 w-52"
              >
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-xl bg-electric/20 grid place-items-center text-electric"><FaBell size={12} /></div>
                  <div className="text-xs">
                    <div className="font-medium">Mock test available</div>
                    <div className="text-muted-foreground">Physics · 90 min</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
