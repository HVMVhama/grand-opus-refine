import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/content";

const projectImages = [
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1621955511667-e2c316e4575d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1590486145965-f02a07c4d0c0?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1532178910-7815d6919875?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
];

const Projects = () => (
  <section id="projets" className="section-spacing section-padding bg-primary">
    <SectionTitle title="Projets Phares" subtitle="Des réalisations d'envergure à travers la Tunisie et l'Afrique" light />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {projects.slice(0, 6).map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
        >
          <img
            src={projectImages[i]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider mb-2">
              <MapPin size={12} />
              {project.country}
            </div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground leading-snug">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-primary-foreground/60 text-sm mt-1">{project.subtitle}</p>
            )}
            <div className="mt-3 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Découvrir <ArrowRight size={14} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mt-12"
    >
      <a href="#" className="btn-primary">
        Découvrir nos projets
      </a>
    </motion.div>
  </section>
);

export default Projects;
