import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const phrases = [
  "Innovative Strategies",
  "Management Consulting",
  "Branding & Marketing",
  "Cloud & IT Services",
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setFadeState("in");
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full animate-fade-in-up">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-primary-foreground leading-[1.1] mb-4 tracking-tight">
            Accelerating Growth Through
          </h1>
          <p
            className={`text-4xl sm:text-5xl lg:text-7xl font-normal text-primary leading-[1.1] tracking-tight transition-all duration-400 ${
              fadeState === "in"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            {phrases[currentPhrase]}
          </p>

          <div className="mt-10 flex items-center gap-6">
            <span className="w-16 h-px bg-primary" />
          </div>

          <p className="mt-6 text-primary-foreground/80 text-base sm:text-lg font-light max-w-xl leading-relaxed">
            At Markitome, we empower businesses to navigate challenges and seize
            opportunities to achieve extraordinary results.
          </p>

          <Link
            to="/contact-us"
            className="inline-block mt-10 bg-primary text-primary-foreground px-10 py-4 text-sm font-normal tracking-widest uppercase hover:bg-markitome-light-blue hover:text-foreground transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-scroll-bounce">
        <span className="text-xs text-primary-foreground/60 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
