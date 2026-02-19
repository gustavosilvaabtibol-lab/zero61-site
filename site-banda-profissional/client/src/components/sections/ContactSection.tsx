import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Instagram, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import {
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY,
  INSTAGRAM_FERNANDO,
  INSTAGRAM_ZERO61,
} from "@/lib/constants";
import Equalizer from "@/components/Equalizer";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipoEvento: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.nome}.%0A%0ATipo de evento: ${formData.tipoEvento}%0AEmail: ${formData.email}%0AWhatsApp: ${formData.whatsapp}%0A%0AMensagem: ${formData.mensagem}`;
    const whatsappUrl = `https://wa.me/5561982079816?text=${message}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <Equalizer bars={8} className="h-6" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
            Entre em{" "}
            <span className="text-primary neon-text">Contato</span>
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Reserve a Zero61 Produções para o seu próximo evento! Preencha o
            formulário ou entre em contato diretamente pelo WhatsApp.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card rounded-lg p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-display text-sm uppercase tracking-wider text-foreground/70 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 bg-input border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block font-display text-sm uppercase tracking-wider text-foreground/70 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-input border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-display text-sm uppercase tracking-wider text-foreground/70 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="(61) 99999-9999"
                  className="w-full px-4 py-3 bg-input border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block font-display text-sm uppercase tracking-wider text-foreground/70 mb-2">
                  Tipo de Evento *
                </label>
                <select
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded font-body text-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none"
                >
                  <option value="">Selecione...</option>
                  <option value="Casamento">Casamento</option>
                  <option value="Formatura">Formatura</option>
                  <option value="Evento Corporativo">Evento Corporativo</option>
                  <option value="Aniversário">Aniversário</option>
                  <option value="Confraternização">Confraternização</option>
                  <option value="Debutante">Debutante</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-display text-sm uppercase tracking-wider text-foreground/70 mb-2">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4}
                placeholder="Conte-nos sobre seu evento: data, local, número de convidados..."
                className="w-full px-4 py-3 bg-input border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display uppercase text-lg tracking-wider rounded neon-glow hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
            >
              <Send className="w-5 h-5" />
              Enviar via WhatsApp
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all">
                  <Phone className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-foreground/50 mb-1">
                    WhatsApp
                  </p>
                  <p className="font-body text-lg text-foreground group-hover:text-[#25D366] transition-colors">
                    {WHATSAPP_DISPLAY}
                  </p>
                </div>
              </div>
            </a>

            {/* Instagram Zero61 */}
            <a
              href={INSTAGRAM_ZERO61}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/20 transition-all">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-foreground/50 mb-1">
                    Instagram
                  </p>
                  <p className="font-body text-lg text-foreground group-hover:text-pink-500 transition-colors">
                    @zero61producoes
                  </p>
                </div>
              </div>
            </a>

            {/* Instagram Fernando */}
            <a
              href={INSTAGRAM_FERNANDO}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/20 transition-all">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-foreground/50 mb-1">
                    Instagram
                  </p>
                  <p className="font-body text-lg text-foreground group-hover:text-pink-500 transition-colors">
                    @fernandobocaooficial
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-foreground/50 mb-1">
                    Região de Atuação
                  </p>
                  <p className="font-body text-foreground">
                    Brasília (DF), Goiânia (GO)
                  </p>
                  <p className="font-body text-foreground/60 text-sm">
                    e toda região Centro-Oeste
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
