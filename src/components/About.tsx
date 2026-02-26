import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="section-padding section-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Markitome team collaboration"
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 -z-10" />
          </div>

          <div className="lg:w-1/2">
            <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block">About Us</span>
            <h2 className="text-3xl lg:text-5xl mb-8 leading-tight">
              Welcome To Markitome
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6 text-base lg:text-lg">
              Markitome is a growth accelerator that collaborates with companies of
              all sizes to achieve exponential growth. Through innovative strategies,
              data-driven insights, and tailored solutions that deliver measurable
              impact, we accelerate growth at every step.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-10 text-base lg:text-lg">
              Since 2013, we have enabled businesses to identify challenges and
              enhance their capabilities in a well-structured, result-oriented, and
              phased methodology.
            </p>
            <Link
              to="/about"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-normal tracking-widest uppercase hover:bg-markitome-light-blue hover:text-foreground transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats with thin dividers */}
        <div className="flex flex-col sm:flex-row items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-border">
          <StatCounter label="Clients and Counting" end={50} suffix="+" />
          <StatCounter label="Global Partners" end={10} suffix="+" />
          <StatCounter label="Client Revenue Generated" end={100} suffix="M+" />
          <StatCounter label="Dedicated Employees" end={30} suffix="+" />
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({
  label,
  end,
  suffix,
}: {
  label: string;
  end: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center py-8 sm:py-4 px-8 lg:px-12 flex-1">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-sm text-muted-foreground font-light tracking-wide">{label}</p>
    </div>
  );
};

export default About;
