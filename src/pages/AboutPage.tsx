import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Eye, Target, CheckCircle } from "lucide-react";

const approach = [
  "Understanding Your Business",
  "Market & Competitor Analysis",
  "Strategy Development",
  "Goal Setting & KPIs",
  "Implementation Planning",
  "Execution & Deployment",
  "Performance Monitoring",
  "Optimization & Iteration",
  "Scaling & Growth",
  "Long-Term Partnership",
];

const growthDrivers = [
  "Management Consulting",
  "HR & Productivity Optimization",
  "Marketing Strategy & Services",
  "Brand Positioning & Identity",
  "Cloud & IT Infrastructure",
  "Finance Optimization",
  "Generative AI Optimization",
  "Digital Transformation",
  "Operational Efficiency",
  "Strategic Partnerships",
];

const AboutPage = () => {
  return (
    <main>
      <PageHero
        title="About"
        subtitle="Accelerating growth since 2013"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
            <div className="lg:w-1/2 relative">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Markitome team collaboration"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 -z-10" />
            </div>

            <div className="lg:w-1/2">
              <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block">Our Story</span>
              <h2 className="text-2xl lg:text-4xl mb-8">Accelerating Growth</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 text-base lg:text-lg">
                Markitome is a growth accelerator that collaborates with companies of all sizes to achieve exponential growth. Through innovative strategies, data-driven insights, and tailored solutions that deliver measurable impact, we accelerate growth at every step.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-base lg:text-lg">
                Since 2013, we have enabled businesses to identify challenges and enhance their capabilities in a well-structured, result-oriented, and phased methodology. We drive growth by combining Management Consulting, Branding & Marketing, and Cloud & IT services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="border-t-2 border-primary pt-8">
              <Eye className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl lg:text-2xl font-normal mb-4">Our Vision</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                To be the most trusted global partner for businesses seeking sustainable growth, innovation, and market leadership through integrated consulting, branding, and technology solutions.
              </p>
            </div>
            <div className="border-t-2 border-primary pt-8">
              <Target className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl lg:text-2xl font-normal mb-4">Our Mission</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                To empower businesses of all sizes with data-driven strategies, creative excellence, and cutting-edge technology that drive measurable growth and lasting competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="max-w-5xl mx-auto">
          <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block text-center">Methodology</span>
          <h2 className="text-2xl lg:text-4xl text-center mb-16">Our Approach</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {approach.map((step, i) => (
                <div key={step} className="flex items-start gap-6 relative">
                  <div className="relative z-10 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-sm font-normal shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-3">
                    <span className="text-base font-normal text-foreground">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block text-center">Capabilities</span>
          <h2 className="text-2xl lg:text-4xl text-center mb-16">We Drive Growth Through</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {growthDrivers.map((item) => (
              <div key={item} className="flex items-center gap-4 py-4 border-b border-border">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-base font-normal text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl mb-6">Partner with us for growth</h2>
          <p className="text-muted-foreground font-light text-lg mb-10">Ready to transform your business? Let's create a strategy that delivers measurable results.</p>
          <Link to="/contact-us" className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-normal tracking-widest uppercase hover:bg-markitome-light-blue hover:text-foreground transition-colors duration-200">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
