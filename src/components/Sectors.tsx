import { motion } from "framer-motion";
import { Route, Building2, Building, Droplets, Anchor, Plane } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { sectors } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Route, Building2, Building, Droplets, Anchor, Plane,
};

const Sectors = () => (
  <section id="secteurs" className="section-spacing section-padding bg-off-white">
    <SectionTitle title="Secteurs d'activité" subtitle="Une expertise pluridisciplinaire au service de vos projets" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {sectors.map((sector, i) => {
        const Icon = iconMap[sector.icon];
        return (
          <motion.div
            key={sector.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, boxShadow: "var(--shadow-card-hover)" }}
            className="group bg-card rounded-2xl p-8 shadow-sm cursor-pointer transition-all duration-500"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
              <Icon className="text-accent" size={28} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
              {sector.name}
            </h3>
            <div className="mt-4 h-0.5 w-0 bg-accent rounded-full group-hover:w-12 transition-all duration-500" />
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Sectors;
