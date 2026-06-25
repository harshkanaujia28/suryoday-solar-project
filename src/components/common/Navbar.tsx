import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/data/site";
import logo from "@/assets/ChatGPT Image Jun 24, 2026, 09_01_04 PM.png";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Suryoday Solar Energy"
            className="h-35 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-[var(--color-solar-orange)]"
                    : "text-foreground hover:text-[var(--color-solar-orange)]"
                }`}
              >
                {item.label}

                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full gradient-sunrise"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden md:inline-flex items-center rounded-full gradient-sunrise px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition hover:shadow-glow"
          >
            Get Free Quote
          </a>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[88vw] max-w-sm p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <img
                    src={logo}
                    alt="Suryoday Solar Energy"
                    className="h-14 w-auto object-contain"
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-1 p-4">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 text-base font-medium hover:bg-accent"
                      activeProps={{
                        className:
                          "rounded-lg bg-accent px-4 py-3 text-base font-medium text-[var(--color-solar-orange)]",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto space-y-2 border-t p-4">
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="block w-full rounded-full gradient-sunrise px-5 py-3 text-center text-sm font-semibold text-white"
                  >
                    Call {SITE.phone}
                  </a>

                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}