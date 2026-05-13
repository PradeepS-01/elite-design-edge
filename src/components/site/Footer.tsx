import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-xl gradient-primary grid place-items-center font-display font-bold text-primary-foreground">V</div>
              <span className="font-display text-lg font-semibold">Vidya<span className="gradient-text">Edge</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Tamil Nadu's most trusted coaching institute — engineering toppers
              in NEET, JEE, TNPSC and more since 2014.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="size-9 rounded-full glass grid place-items-center text-muted-foreground hover:text-electric hover:scale-110 transition">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick links" items={["About us", "Faculty", "Results", "Centers", "Careers"]} />
          <FooterCol title="Courses" items={["NEET", "JEE", "TNPSC", "IELTS", "Spoken English"]} />
          <FooterCol title="Support" items={["Contact", "Help center", "Refund policy", "Terms", "Privacy"]} />
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} VidyaEdge Coaching Pvt. Ltd. All rights reserved.</div>
          <div>Crafted with care in Chennai 🇮🇳</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-medium mb-4">{title}</div>
      <ul className="space-y-2.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
