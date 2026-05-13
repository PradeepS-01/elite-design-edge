import { motion } from "framer-motion";
import { HiArrowRight, HiPlay, HiSparkles } from "react-icons/hi";
import { FaTrophy, FaUserGraduate, FaStar } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 grid-bg -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 -left-20 size-72 rounded-full bg-electric/30 blur-[100px] -z-10"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-0 size-96 rounded-full bg-violet/30 blur-[120px] -z-10"
      />

      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <HiSparkles className="text-electric" />
          <span>Tamil Nadu's #1 ranked coaching institute · 2024</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tighter max-w-5xl mx-auto"
        >
          Build your future with{" "}
          <span className="gradient-text">Tamil Nadu's leading</span> coaching institute
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          NEET, JEE, TNPSC, IELTS and more — taught by India's top mentors
          inside a smart, futuristic learning experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#courses"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-primary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform"
          >
            Start learning
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-strong text-foreground font-medium hover:bg-white/5 transition"
          >
            <HiPlay /> Book a free demo
          </a>
        </motion.div>

        {/* Floating stats cards */}
        <div className="relative mt-24 max-w-5xl mx-auto h-72 md:h-80">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-0 top-8 glass-strong rounded-2xl p-5 w-56 animate-float"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-electric/20 grid place-items-center text-electric">
                <FaTrophy />
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-semibold">428+</div>
                <div className="text-xs text-muted-foreground">NEET ranks under 1000</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute right-0 top-0 glass-strong rounded-2xl p-5 w-56 animate-float [animation-delay:1s]"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-violet/20 grid place-items-center text-violet">
                <FaUserGraduate />
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-semibold">12,500+</div>
                <div className="text-xs text-muted-foreground">Active learners</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 glass-strong rounded-3xl p-6 w-[min(560px,90%)] glow-violet"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="size-9 rounded-full border-2 border-background"
                      style={{
                        background: `linear-gradient(135deg, oklch(0.72 0.2 ${200 + i * 30}), oklch(0.65 0.24 ${260 + i * 20}))`,
                      }}
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">98.4% success rate</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <FaStar className="text-yellow-400" /> 4.9/5 from 6,200+ reviews
                  </div>
                </div>
              </div>
              <div className="hidden md:block text-xs glass rounded-full px-3 py-1.5 text-muted-foreground">
                Live · enrolling now
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
