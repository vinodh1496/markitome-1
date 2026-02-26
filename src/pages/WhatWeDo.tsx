import PageHero from "@/components/PageHero";
import { Briefcase, Users, BarChart3, Palette, Cloud, DollarSign, Bot, Settings, Megaphone, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Briefcase, title: "Operation Efficiency", image: "https://markitome.com/wp-content/uploads/2025/06/1.-Operational-scaled-1.jpg", desc: "Operational efficiency creates a robust, resilient, and responsive organization that can thrive in any changing market conditions. We streamline workflows, reduce costs, and maximize productivity through data-driven process optimization." },
  { icon: Users, title: "HR Consulting & Productivity Optimization", image: "https://markitome.com/wp-content/uploads/2025/06/2.-HR-scaled-1.jpg", desc: "The best HR consulting approach doesn't fix broken systems, it builds systems that don't break. We help organizations attract top talent and build high-performance cultures." },
  { icon: BarChart3, title: "Marketing Strategy & Services", image: "https://markitome.com/wp-content/uploads/2025/06/4.-Brand-scaled-1.jpg", desc: "Absence of effective marketing strategy makes even excellent products go unnoticed. We craft data-driven campaigns that amplify your reach and accelerate growth." },
  { icon: Palette, title: "Brand Positioning", image: "https://markitome.com/wp-content/uploads/2025/06/3.-Marketing-scaled-1.jpg", desc: "Well-positioned brands command sustainable growth and market relevance. We define your unique value proposition and craft compelling brand narratives." },
  { icon: Cloud, title: "Cloud & IT Services", image: "https://markitome.com/wp-content/uploads/2025/06/5.-Cloud-IT-scaled-1.jpg", desc: "Cloud and IT services have a substantial impact on businesses. We help you leverage modern infrastructure, migrate to the cloud, and implement scalable solutions." },
  { icon: DollarSign, title: "Finance Optimization", image: "https://markitome.com/wp-content/uploads/2025/06/6.-Finance-scaled-1.jpg", desc: "Finance optimization involves analytical techniques, smart models, and strategic decision-making to maximize profitability and manage cash flow." },
  { icon: Bot, title: "Generative AI Optimization", image: "https://markitome.com/wp-content/uploads/2024/06/Callcenter-Images.jpeg", desc: "GAIO helps your brand appear in AI search results. We position your brand at the forefront of the AI revolution with cutting-edge optimization strategies." },
];

const verticals = [
  { icon: Settings, title: "Management Consulting", desc: "Strategic advisory, operational efficiency, HR optimization, and finance management to build resilient organizations." },
  { icon: Megaphone, title: "Branding & Marketing", desc: "Brand positioning, marketing strategy, content creation, and digital campaigns that amplify your market presence." },
  { icon: Monitor, title: "Cloud & IT Services", desc: "Cloud migration, IT infrastructure, generative AI optimization, and scalable technology solutions." },
];

const WhatWeDo = () => {
  return (
    <main>
      <PageHero
        title="What We Do"
        subtitle="Accelerate sustainable growth and redefine success for your business"
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted-foreground font-light max-w-3xl text-base lg:text-lg leading-relaxed mb-20">
            At Markitome, we don't just provide services — we create enduring value. Our integrated approach combines strategic consulting, creative branding, and cutting-edge technology to deliver transformative results.
          </p>

          <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block">Our Verticals</span>
          <h2 className="text-2xl lg:text-4xl mb-12">
            We accelerate growth through three verticals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-32">
            {verticals.map((v) => (
              <div key={v.title} className="border-t-2 border-primary pt-8">
                <v.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-normal mb-4">{v.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block">Services</span>
          <h2 className="text-2xl lg:text-4xl mb-16">Our Services</h2>
          <div className="space-y-20 lg:space-y-28">
            {services.map((s, i) => (
              <div key={s.title} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                <div className="lg:w-1/2 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-[280px] lg:h-[400px] object-cover" loading="lazy" />
                </div>
                <div className="lg:w-1/2">
                  <span className="text-sm text-primary font-normal tracking-widest mb-3 block">0{i + 1}</span>
                  <div className="flex items-center gap-3 mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl lg:text-2xl font-normal">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">{s.desc}</p>
                  <Link to="/contact-us" className="inline-flex items-center gap-2 text-sm text-primary font-normal tracking-wide hover:gap-3 transition-all duration-200">
                    Get Started <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl mb-6">Ready to accelerate your growth?</h2>
          <p className="text-muted-foreground font-light text-lg mb-10">Let's discuss how our integrated approach can drive measurable results for your business.</p>
          <Link to="/contact-us" className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-normal tracking-widest uppercase hover:bg-markitome-light-blue hover:text-foreground transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDo;
