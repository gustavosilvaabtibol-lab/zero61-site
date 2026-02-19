import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Heart, Award } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/lib/constants";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Garantia de Sucesso",
    description:
      "Nossa equipe dedicada trabalha incansavelmente para garantir que seu evento seja um verdadeiro sucesso, proporcionando uma experiência inigualável a todos os presentes.",
  },
  {
    icon: Heart,
    title: "Satisfação Garantida",
    description:
      "A satisfação dos nossos clientes é nossa prioridade. Estamos comprometidos em superar suas expectativas e tornar seu evento inesquecível.",
  },
  {
    icon: Award,
    title: "Profissionalismo em Primeiro Lugar",
    description:
      "Somos reconhecidos por nosso profissionalismo e atendimento personalizado, garantindo que cada detalhe seja cuidadosamente planejado e executado.",
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.party}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container relative" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
            Por que escolher a{" "}
            <span className="text-primary neon-text">Zero61</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:neon-glow transition-all duration-500">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-foreground/60 font-body leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-display uppercase text-lg tracking-wider rounded neon-glow hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Fale Conosco Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
