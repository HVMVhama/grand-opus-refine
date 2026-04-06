import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { footerLinks } from "@/data/content";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="section-padding py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h3 className="font-heading text-2xl font-bold mb-4">CETA</h3>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            CETA Ingénierie – Expert en études techniques et ingénierie pluridisciplinaire. Plus de 25 ans d'expertise au service de projets d'envergure.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.linkedin.com/company/ceta-ingenierie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm tracking-wider uppercase text-primary-foreground/80">
            Entreprise
          </h4>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services links */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm tracking-wider uppercase text-primary-foreground/80">
            Services
          </h4>
          <ul className="space-y-3">
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm tracking-wider uppercase text-primary-foreground/80">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              Tunisie
            </li>
            <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <Mail size={16} className="flex-shrink-0" />
              contact@ceta.com.tn
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/40">
          © 2021 CETA Ingénierie. Tous les droits réservés
        </p>
        <p className="text-xs text-primary-foreground/40">
          Agence Web ELYOS DIGITAL
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
