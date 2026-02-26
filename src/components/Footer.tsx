import { Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/markitome-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/markitome/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/markitome", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/markitome/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/markitome/", label: "Facebook" },
];

const Footer = () => {
  const links = [
    { label: "About", to: "/about" },
    { label: "What We Do", to: "/what-we-do" },
    { label: "Team", to: "/team" },
    { label: "Blog", to: "https://markitome.com/blog/", external: true },
    { label: "Contact Us", to: "/contact-us" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Blue top accent */}
      <div className="h-1 bg-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2">
            <img src={logo} alt="Markitome" className="h-10 mb-6 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 font-light leading-relaxed max-w-md mb-8">
              Markitome is a growth accelerator that collaborates with companies
              of all sizes to achieve exponential growth through innovative strategies
              and data-driven insights.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-normal mb-6 text-primary tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.to} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors font-light">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary transition-colors font-light">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-normal mb-6 text-primary tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70 font-light">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>United States & India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70 font-light">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@markitome.com" className="hover:text-primary transition-colors">
                  info@markitome.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40 font-light tracking-wide">
            © {new Date().getFullYear()} Markitome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
