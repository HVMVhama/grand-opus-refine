import { motion } from "framer-motion";
import { HardHat, FileSearch, PenTool } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { missions } from "@/data/content";

const iconMap: Record<string, React.ElementType> = { HardHat, FileSearch, PenTool };

const Missions = () => (
  <section id="missions" className="section-spacing section-padding">
    <SectionTitle title="Missions" subtitle="Un accompagnement complet à chaque étape de votre projet" />
    <div className="max-w-5xl mx-auto space-y-6">
      {missions.map((mission, i) => {
        const Icon = iconMap[mission.icon];
        return (
          <motion.div
            key={mission.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group bg-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start transition-all duration-500"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
              <Icon className="text-primary-foreground" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-3">
                {mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Missions;
