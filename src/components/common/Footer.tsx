import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SITE, NAV } from "@/data/site";
import { SERVICES } from "@/data/content";
import logo from "@/assets/suryoday-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[#0a2540] text-white/85">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-[var(--color-solar-orange)] blur-3xl opacity-30" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[var(--color-solar-blue)] blur-3xl opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo.url} alt="" className="h-12 w-12 rounded-lg bg-white/90 p-1" />
              <div>
                <div className="font-display text-xl font-bold text-white">Suryoday</div>
                <div className="text-[10px] font-semibold tracking-widest text-[var(--color-solar-yellow)]">SOLAR ENERGY</div>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Trusted solar installation partner for homes, businesses and industries across India. MNRE-approved channel partner.
            </p>
            <div className="mt-5 flex gap-3">
              {[{ Icon: FaFacebookF, href: SITE.socials.facebook }, { Icon: FaInstagram, href: SITE.socials.instagram }, { Icon: FaLinkedinIn, href: SITE.socials.linkedin }, { Icon: FaYoutube, href: SITE.socials.youtube }].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener" aria-label="social" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:gradient-sunrise transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-[var(--color-solar-yellow)]">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}><Link to="/services" hash={s.slug} className="hover:text-[var(--color-solar-yellow)]">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-white">Get In Touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3"><FaMapMarkerAlt className="mt-1 shrink-0 text-[var(--color-solar-yellow)]" /><span>{SITE.address}</span></li>
              <li className="flex gap-3"><FaPhoneAlt className="mt-1 shrink-0 text-[var(--color-solar-yellow)]" /><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
              <li className="flex gap-3"><FaEnvelope className="mt-1 shrink-0 text-[var(--color-solar-yellow)]" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex gap-2">
              <input type="email" placeholder="Your email" required className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm placeholder:text-white/50 outline-none focus:bg-white/15" />
              <button className="rounded-full gradient-sunrise px-4 py-2 text-xs font-semibold">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Suryoday Solar Energy. All rights reserved.</p>
          <p>MNRE Approved · ISO 9001:2015 · GST Registered</p>
        </div>
      </div>
    </footer>
  );
}
