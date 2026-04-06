import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { internationalText } from "@/data/content";

const International = () => (
  <section id="international" className="section-spacing section-padding bg-off-white relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

    <div className="relative max-w-4xl mx-auto text-center">
      <SectionTitle title={internationalText.title} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
          <Globe className="text-accent" size={36} />
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {internationalText.description}
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {internationalText.description2}
        </p>
        <div className="pt-8">
          <a href="#" className="btn-primary">Découvrir</a>
        </div>
      </motion.div>

      {/* Country flags grid visual */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex flex-wrap justify-center gap-3"
      >
        {["Tunisie", "Mauritanie", "Togo", "Tchad", "Libye", "Côte d'Ivoire", "Mali"].map((c, i) => (
          <span
            key={c}
            className="px-4 py-2 rounded-full bg-card text-sm font-medium text-primary border border-border"
          >
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default International;
