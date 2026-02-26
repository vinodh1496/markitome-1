import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/markitome-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const topLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Team", to: "/team" },
    { label: "Contact Us", to: "/contact-us" },
  ];

  const mainLinks = [
    { label: "Who We Serve", to: "/who-we-serve" },
    { label: "What We Do", to: "/what-we-do" },
    { label: "Industry Solutions", to: "#" },
    { label: "Blog", to: "/blog" },
    { label: "Case Studies", to: "#" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden lg:block bg-markitome-dark-gray">
        <div className="flex items-center justify-end gap-6 px-4 sm:px-6 lg:px-20 py-1.5">
          {topLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-white/90 text-xs font-light hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://markitome.com/cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 text-xs font-light hover:text-white transition-colors duration-200"
          >
            Cloud
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-background border-b border-markitome-light-gray">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-20 py-3">
          <Link to="/">
            <img src={logo} alt="Markitome" className="h-10 sm:h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="relative text-foreground text-base font-normal hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border px-4 py-4 space-y-3">
          {topLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block text-foreground text-sm font-light hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://markitome.com/cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-foreground text-sm font-light hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Cloud
          </a>
          <div className="border-t border-border my-2" />
          {mainLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block text-foreground text-sm font-normal hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
