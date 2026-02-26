import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Management Consulting",
    image: "https://markitome.com/wp-content/uploads/2025/06/1.-Operational-scaled-1.jpg",
    description:
      "We streamline operations, optimize HR processes, and implement strategic frameworks that build resilient, high-performing organizations ready to scale.",
  },
  {
    title: "Branding & Marketing",
    image: "https://markitome.com/wp-content/uploads/2025/06/4.-Brand-scaled-1.jpg",
    description:
      "From brand positioning to data-driven marketing campaigns, we craft strategies that amplify your presence, build authority, and drive measurable growth.",
  },
  {
    title: "Cloud & IT Services",
    image: "https://markitome.com/wp-content/uploads/2025/06/5.-Cloud-IT-scaled-1.jpg",
    description:
      "We help you leverage modern cloud infrastructure, implement scalable technology solutions, and position your brand at the forefront of the AI revolution.",
  },
  {
    title: "Finance Optimization",
    image: "https://markitome.com/wp-content/uploads/2025/06/6.-Finance-scaled-1.jpg",
    description:
      "Strategic financial advisory that maximizes profitability, improves cash flow management, and enables smarter, data-informed decision-making.",
  },
];

const FadeInRow = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl mb-4">What We Do</h2>
        <p className="text-muted-foreground font-light max-w-2xl leading-relaxed mb-20">
          We drive business growth through an integrated approach that combines
          strategic consulting, creative branding, and cutting-edge technology.
        </p>

        <div className="space-y-20 lg:space-y-32">
          {services.map((service, i) => (
            <FadeInRow key={service.title}>
              <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}>
                <div className="lg:w-1/2 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] lg:h-[450px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="lg:w-1/2">
                  <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl lg:text-4xl mb-6 leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-base lg:text-lg mb-8">
                    {service.description}
                  </p>
                  <Link
                    to="/what-we-do"
                    className="inline-flex items-center gap-2 text-sm text-primary font-normal tracking-wide hover:gap-3 transition-all duration-200"
                  >
                    Learn more
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </FadeInRow>
          ))}
        </div>

        <div className="mt-20 lg:mt-32 text-center">
          <Link
            to="/what-we-do"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-normal tracking-widest uppercase hover:bg-markitome-light-blue hover:text-foreground transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
