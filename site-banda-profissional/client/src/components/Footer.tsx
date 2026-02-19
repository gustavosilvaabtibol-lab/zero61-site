import { LOGO_URL, INSTAGRAM_FERNANDO, INSTAGRAM_ZERO61, WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/lib/constants";
import { Instagram, Phone, MapPin } from "lucide-react";
import Equalizer from "@/components/Equalizer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary/10 bg-card/50">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Description */}
          <div>
            <img
              src={LOGO_URL}
              alt="Zero61 Produções"
              className="h-16 w-auto mb-4"
            />
            <p className="text-foreground/50 font-body text-sm leading-relaxed">
              Banda profissional para casamentos, formaturas, eventos
              corporativos e festas em Brasília (DF) e Goiás.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-foreground/70 mb-4">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Eventos", href: "#eventos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-foreground/50 hover:text-primary font-body text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-foreground/70 mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/50 hover:text-primary font-body text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {WHATSAPP_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_ZERO61}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/50 hover:text-primary font-body text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @zero61producoes
              </a>
              <a
                href={INSTAGRAM_FERNANDO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/50 hover:text-primary font-body text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @fernandobocaooficial
              </a>
              <div className="flex items-center gap-2 text-foreground/50 font-body text-sm">
                <MapPin className="w-4 h-4" />
                Brasília (DF) e Goiás
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/30 font-body text-sm">
            &copy; {currentYear} Zero61 Produções. Todos os direitos reservados.
          </p>
          <Equalizer bars={6} className="h-4 opacity-30" />
        </div>
      </div>
    </footer>
  );
}
