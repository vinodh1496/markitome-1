import { useEffect, useRef, useState } from "react";

const QuoteSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/75" />

      <div
        className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="block w-20 h-px bg-primary-foreground/40 mx-auto mb-12" />

        <p className="text-2xl sm:text-3xl lg:text-5xl italic text-primary-foreground font-light leading-relaxed max-w-3xl mx-auto">
          Every idea sparks an action. Those actions shape a business & this
          business becomes a brand with Markitome.
        </p>

        <span className="block w-20 h-px bg-primary-foreground/40 mx-auto mt-12 mb-8" />

        <cite className="text-sm text-primary-foreground/70 font-normal not-italic tracking-widest uppercase">
          Team Markitome
        </cite>
      </div>
    </section>
  );
};

export default QuoteSection;
