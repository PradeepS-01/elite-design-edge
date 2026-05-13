import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why" },
  { label: "Faculty", href: "#faculty" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <div className="size-9 rounded-xl gradient-primary grid place-items-center font-display font-bold text-primary-foreground glow-primary">
              V
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              Vidya<span className="gradient-text">Edge</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-foreground transition-colors relative"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Sign in
            </a>
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-full gradient-primary text-primary-foreground font-medium hover:scale-105 transition-transform"
            >
              Book Demo
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-center px-4 py-2 rounded-full gradient-primary text-primary-foreground font-medium"
            >
              Book Demo
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
