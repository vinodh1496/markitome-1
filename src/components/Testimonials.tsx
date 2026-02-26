import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const clientLogos = [
  { name: "Asian Paints", logo: "https://markitome.com/wp-content/uploads/2025/06/asain-paints.png" },
  { name: "Axis Bank", logo: "https://markitome.com/wp-content/uploads/2025/06/axis-bank.png" },
  { name: "Dell", logo: "https://markitome.com/wp-content/uploads/2025/06/dell.png" },
  { name: "Deloitte", logo: "https://markitome.com/wp-content/uploads/2025/06/deloitte.png" },
  { name: "Genpact", logo: "https://markitome.com/wp-content/uploads/2025/06/genpact.png" },
  { name: "ICICI", logo: "https://markitome.com/wp-content/uploads/2025/06/icici.png" },
  { name: "IIT Guwahati", logo: "https://markitome.com/wp-content/uploads/2025/06/iit-guwahati.png" },
  { name: "IIT Roorkee", logo: "https://markitome.com/wp-content/uploads/2025/06/iit-roorkee.png" },
  { name: "Infosys", logo: "https://markitome.com/wp-content/uploads/2025/06/infosys.png" },
  { name: "Kotak", logo: "https://markitome.com/wp-content/uploads/2025/06/kotak.png" },
  { name: "L&T", logo: "https://markitome.com/wp-content/uploads/2025/06/lt.png" },
  { name: "Mahindra Lifespaces", logo: "https://markitome.com/wp-content/uploads/2025/06/mahindra-lifespaces.png" },
  { name: "TCS", logo: "https://markitome.com/wp-content/uploads/2025/06/tcs.png" },
  { name: "Wipro", logo: "https://markitome.com/wp-content/uploads/2025/06/wipro.png" },
];

const testimonials = [
  {
    quote: "Within 2 months most of our activities are positioned on the first page in Google search.",
    name: "PSLN Rao",
    title: "Director of Active Group",
    photo: "https://markitome.com/wp-content/uploads/2025/03/thumb-2.jpg",
  },
  {
    quote: "Markitome helped us with our website and digital marketing and we have been very happy with their services.",
    name: "Sunil Srivastava",
    title: "Director, IMRT",
    photo: "https://markitome.com/wp-content/uploads/2025/03/thumb-4.jpg",
  },
  {
    quote: "Vivek Rangabhashyam helped my business, premium in pricing but it's worth it.",
    name: "Likith Nag",
    title: "MD at Subash Publishing House",
    photo: "https://markitome.com/wp-content/uploads/2025/03/thumb-3.jpg",
  },
  {
    quote: 'I am very happy with the service provided by "Markitome" in the handling of the Web services of my company.',
    name: "Deepak S",
    title: "CEO of DHRITI IT Solutions",
    photo: "https://markitome.com/wp-content/uploads/2025/03/thumb-1.jpg",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Client logos - static grayscale grid */}
        <h2 className="text-3xl lg:text-5xl text-center mb-16">
          Our Clients
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 mb-32">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-[70px] px-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-[100px] object-contain logo-grayscale"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Single featured testimonial */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl lg:text-4xl mb-16">What Our Clients Say</h3>

          <div className="relative">
            <Quote className="w-12 h-12 text-primary/15 mx-auto mb-8" />
            <p
              key={active}
              className="text-xl sm:text-2xl lg:text-3xl text-foreground font-light italic leading-relaxed mb-10 animate-fade-in-up"
            >
              "{t.quote}"
            </p>
            <div className="flex items-center justify-center gap-4 mb-10">
              <img
                src={t.photo}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="text-left">
                <p className="text-sm font-normal text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
              <button
                onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
