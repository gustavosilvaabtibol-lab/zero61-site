import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOGO_URL, WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Eventos", href: "#eventos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-primary/10 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="Zero61 Produções"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-sm uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full neon-glow" />
            </button>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:+${WHATSAPP_DISPLAY.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-primary text-primary-foreground font-display uppercase text-sm tracking-wider rounded neon-glow hover:bg-primary/90 transition-all duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-primary/10 overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-lg uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-display uppercase text-center tracking-wider rounded neon-glow"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
