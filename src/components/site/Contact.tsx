import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-electric mb-3">Get in touch</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Ready to begin your <span className="gradient-text">success story?</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Talk to a counsellor today. We'll design a personalised study plan
              for you in under 20 minutes.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><div className="size-10 rounded-xl glass-strong grid place-items-center text-electric"><FaPhoneAlt /></div> +91 98765 43210</div>
              <div className="flex items-center gap-3"><div className="size-10 rounded-xl glass-strong grid place-items-center text-electric"><FaEnvelope /></div> hello@vidyaedge.in</div>
              <div className="flex items-center gap-3"><div className="size-10 rounded-xl glass-strong grid place-items-center text-electric"><FaMapMarkerAlt /></div> Anna Nagar, Chennai · 8 centers across TN</div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-56 rounded-3xl glass overflow-hidden relative">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, oklch(0.72 0.2 255 / 0.3), transparent 60%)" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="size-12 rounded-full gradient-primary grid place-items-center text-white animate-glow-pulse">
                    <FaMapMarkerAlt />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 left-4 text-xs text-muted-foreground">Anna Nagar Campus · Chennai</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong rounded-3xl p-7 md:p-9 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Karthik R." />
              <Field label="Phone" placeholder="+91" />
            </div>
            <Field label="Email" placeholder="you@email.com" />
            <div>
              <label className="text-xs text-muted-foreground">Course interested in</label>
              <select className="mt-2 w-full bg-transparent glass rounded-xl px-4 py-3 text-sm border-0 outline-none focus:ring-2 focus:ring-electric/50">
                <option>NEET</option><option>JEE</option><option>TNPSC</option><option>IELTS</option><option>Spoken English</option><option>Computer Courses</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea rows={4} placeholder="Tell us your goal" className="mt-2 w-full bg-transparent glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric/50 resize-none" />
            </div>
            <button className="w-full px-6 py-3.5 rounded-full gradient-primary text-primary-foreground font-medium glow-primary hover:scale-[1.02] transition-transform">
              Book my free demo
            </button>
            <div className="flex justify-center gap-3 pt-2">
              {[FaInstagram, FaYoutube, FaFacebook, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="size-10 rounded-full glass grid place-items-center text-muted-foreground hover:text-electric hover:scale-110 transition">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.form>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-emerald-500 grid place-items-center text-white shadow-2xl hover:scale-110 transition animate-glow-pulse"
        style={{ boxShadow: "0 0 40px oklch(0.7 0.2 150 / 0.6)" }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric/50"
      />
    </div>
  );
}
