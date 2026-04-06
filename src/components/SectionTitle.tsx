import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

const SectionTitle = ({ title, subtitle, light = false, align = "center" }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
  >
    <h2
      className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
        light ? "text-primary-foreground" : "text-primary"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`mt-4 text-lg md:text-xl max-w-2xl ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}
      >
        {subtitle}
      </p>
    )}
    <div className="mt-6 flex items-center gap-2 justify-center">
      <div className={`h-1 w-12 rounded-full ${light ? "bg-accent" : "bg-accent"}`} />
      <div className={`h-1 w-6 rounded-full ${light ? "bg-accent/40" : "bg-accent/40"}`} />
    </div>
  </motion.div>
);

export default SectionTitle;
