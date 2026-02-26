import PageHero from "@/components/PageHero";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Vivek Rangabhashyam", title: "Founder & CEO", image: "https://markitome.com/wp-content/uploads/2024/06/Vivek.jpg", linkedin: "https://www.linkedin.com/in/vivekrangabhashyam/", bio: "Visionary leader with 15+ years of experience in management consulting and brand strategy." },
  { name: "Suman Rangabhashyam", title: "Director of Operations", image: "https://markitome.com/wp-content/uploads/2024/06/SumanRangabashyam.jpg", linkedin: "https://www.linkedin.com/in/suman-rangabhashyam/", bio: "Expert in operational excellence, driving process optimization and organizational efficiency." },
  { name: "Dr. Rashmi Kurmati", title: "Creative Director", image: "https://markitome.com/wp-content/uploads/2026/02/ImprovedQuality.png", linkedin: "https://www.linkedin.com/in/rashmi-kurmati/", bio: "Award-winning creative professional shaping brand identities and visual storytelling." },
  { name: "Ravi Namala", title: "Senior Graphic Designer", image: "https://markitome.com/wp-content/uploads/2024/06/RaviDesigner.jpg", linkedin: "https://www.linkedin.com/in/ravi-namala/", bio: "Talented designer crafting compelling visual assets across digital and print media." },
  { name: "Sudheer Dunga", title: "Technical Head and Operations", image: "https://markitome.com/wp-content/uploads/2026/02/Sudheer-Dunga.png", linkedin: "https://www.linkedin.com/in/sudheer-dunga/", bio: "Technology leader specializing in cloud architecture, IT strategy, and digital transformation." },
  { name: "Gowtham Sai Kumar Yarra", title: "Senior Video Editor", image: "https://markitome.com/wp-content/uploads/2025/04/GSK-1.jpg", linkedin: "https://www.linkedin.com/in/gowtham-sai-kumar-yarra/", bio: "Creative video specialist producing engaging multimedia content for brand storytelling." },
  { name: "Akash Nagarkar", title: "Client Account Manager", image: "https://markitome.com/wp-content/uploads/2024/06/Akash-Nagarkar-Canva-Rework.jpg", linkedin: "https://www.linkedin.com/in/akash-nagarkar/", bio: "Dedicated account manager ensuring seamless client relationships and project delivery." },
  { name: "Akshita Simran", title: "Client Liaison Officer", image: "https://markitome.com/wp-content/uploads/2025/03/akshita.webp", linkedin: "https://www.linkedin.com/in/akshita-simran/", bio: "Skilled communicator bridging client needs with team capabilities for optimal outcomes." },
  { name: "Skipper", title: "Office Mascot 🐾", image: "https://markitome.com/wp-content/uploads/2025/03/Skipper-copy.webp", linkedin: "#", bio: "Chief Happiness Officer keeping the team's spirits high every day." },
];

const TeamPage = () => {
  return (
    <main>
      <PageHero
        title="Team"
        subtitle="Meet the people behind Markitome's success"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block text-center">Our People</span>
          <h2 className="text-2xl lg:text-4xl text-center mb-6">Meet Our Core Team</h2>
          <p className="text-center text-muted-foreground font-light max-w-3xl mx-auto mb-20 text-lg">
            A diverse team of strategists, creatives, and technologists united by a shared passion for driving business growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-normal mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-normal mb-3">{member.title}</p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{member.bio}</p>
                {member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
