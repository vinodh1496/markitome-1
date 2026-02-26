import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Building2, Rocket, Users, TrendingUp, ShoppingCart, Cpu, Heart, GraduationCap, Factory, Home, UtensilsCrossed, Landmark } from "lucide-react";

const segments = [
  { icon: Rocket, title: "Startups", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600", desc: "Early-stage companies looking to establish market presence, build brand identity, and scale operations efficiently." },
  { icon: Building2, title: "SMEs", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600", desc: "Small and medium enterprises seeking to optimize operations, expand their market reach, and compete effectively." },
  { icon: Users, title: "Corporations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600", desc: "Large organizations requiring strategic transformation, digital innovation, and operational excellence." },
  { icon: TrendingUp, title: "VC Firms", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", desc: "Venture capital firms and investors looking for portfolio optimization and value creation strategies." },
  { icon: ShoppingCart, title: "E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600", desc: "Online businesses needing digital marketing, brand positioning, and technology infrastructure." },
  { icon: Cpu, title: "Technology / SaaS", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", desc: "Tech companies requiring go-to-market strategies, brand differentiation, and scalable cloud solutions." },
];

const industries = [
  { icon: Landmark, title: "Finance", desc: "Banking, fintech, and financial services optimization." },
  { icon: Heart, title: "Healthcare", desc: "Digital transformation for healthcare providers and health-tech." },
  { icon: GraduationCap, title: "Education", desc: "EdTech solutions and educational institution branding." },
  { icon: Factory, title: "Manufacturing", desc: "Process optimization and digital manufacturing solutions." },
  { icon: Home, title: "Real Estate", desc: "Property branding, digital marketing, and lead generation." },
  { icon: UtensilsCrossed, title: "Hospitality", desc: "Brand experiences and digital strategies for hospitality." },
];

const WhoWeServe = () => {
  return (
    <main>
      <PageHero
        title="Who We Serve"
        subtitle="From dynamic startups to well-established enterprises, we partner with businesses ready to grow"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted-foreground font-light max-w-3xl text-base lg:text-lg leading-relaxed mb-20">
            In today's rapidly evolving business landscape, companies need more than just services — they need a strategic partner who understands their unique challenges and can deliver tailored solutions that drive measurable growth.
          </p>

          <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block">Client Segments</span>
          <h2 className="text-2xl lg:text-4xl mb-16">Stay ahead of the curve</h2>

          <div className="space-y-20 lg:space-y-28 mb-32">
            {segments.map((s, i) => (
              <div key={s.title} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                <div className="lg:w-1/2 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-[280px] lg:h-[400px] object-cover" loading="lazy" />
                </div>
                <div className="lg:w-1/2">
                  <span className="text-sm text-primary font-normal tracking-widest mb-3 block">0{i + 1}</span>
                  <div className="flex items-center gap-3 mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl lg:text-3xl font-normal">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed text-base lg:text-lg">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block text-center">Industries</span>
          <h2 className="text-2xl lg:text-4xl text-center mb-16">Industry Specific Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {industries.map((ind) => (
              <div key={ind.title} className="border-t-2 border-primary pt-8">
                <ind.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-normal mb-3">{ind.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl mb-6">Let's grow together</h2>
          <p className="text-muted-foreground font-light text-lg mb-10">No matter your industry or size, we have the expertise to drive your business forward.</p>
          <Link to="/contact-us" className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-normal tracking-widest uppercase hover:bg-markitome-light-blue hover:text-foreground transition-colors duration-200">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WhoWeServe;
