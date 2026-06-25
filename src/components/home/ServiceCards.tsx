import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/content";
import { Reveal } from "@/components/common/Reveal";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export function ServiceCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
      {SERVICES.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.05}>
          <motion.div whileHover={{ y: -8 }} className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:shadow-premium">
            <div className="relative h-48 overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground">{s.short}</p>
              <ul className="mt-4 space-y-2">
                {s.benefits.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <FaCheck className="mt-1 h-3 w-3 shrink-0 text-[var(--color-solar-green)]" /> {b}
                  </li>
                ))}
              </ul>
              <Link to="/services" hash={s.slug} className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-solar-orange)] hover:gap-2 transition-all gap-1">
                Learn more →
              </Link>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
