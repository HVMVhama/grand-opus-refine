import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Menu, X } from "lucide-react";
import { navItems } from "@/data/content";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-effect shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="section-padding flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg viewBox="0 0 180 50" className="h-10 md:h-12" fill="none">
                <text
                  x="0"
                  y="38"
                  className="font-heading"
                  style={{
                    fontSize: "42px",
                    fontWeight: 800,
                    fill: scrolled ? "hsl(var(--primary))" : "white",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  CETA
                </text>
                <text
                  x="0"
                  y="48"
                  style={{
                    fontSize: "9px",
                    fontWeight: 400,
                    fill: scrolled ? "hsl(var(--accent))" : "hsl(var(--accent))",
                    letterSpacing: "3px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  INGÉNIERIE
                </text>
              </svg>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
              className={`text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {lang}
            </button>
            <a
              href="https://www.linkedin.com/company/ceta-ingenierie"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="btn-primary text-xs px-6 py-2.5">
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-heading font-bold text-primary-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
                className="text-sm font-semibold tracking-widest px-4 py-2 rounded-full border border-primary-foreground/30 text-primary-foreground"
              >
                {lang}
              </button>
              <Linkedin className="text-primary-foreground" size={20} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
