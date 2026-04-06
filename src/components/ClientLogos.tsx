import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { clients } from "@/data/content";

const ClientLogos = () => (
  <section className="section-spacing section-padding">
    <SectionTitle title="Nous ont fait confiance" subtitle="Des partenaires de référence en Tunisie et à l'international" />
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {clients.slice(0, 24).map((client, i) => (
          <motion.div
            key={client}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="group bg-card rounded-xl p-4 flex items-center justify-center min-h-[72px] border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300"
          >
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary text-center leading-tight transition-colors duration-300">
              {client}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
