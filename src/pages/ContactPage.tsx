import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Mail, Linkedin, Twitter, Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/markitome/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/markitome", label: "X / Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/markitome/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/markitome/", label: "Facebook" },
];

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", designation: "", help: "", source: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Let's start a conversation about your growth"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-sm text-primary font-normal tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-2xl lg:text-4xl mb-8">Bring your business to life</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-base lg:text-lg mb-10">
              Whether you're looking to launch a new brand, optimize operations, or scale your technology infrastructure, we're here to help. Get in touch with us and let's discuss how we can accelerate your growth.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@markitome.com" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  info@markitome.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+14697641969" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  +1 (469) 764-1969
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground font-light">Dallas, Texas — United States</p>
                  <p className="text-muted-foreground font-light">Hyderabad, Telangana — India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:border-primary group transition-colors" aria-label={s.label}>
                  <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-secondary p-8 lg:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Label htmlFor="name" className="text-sm tracking-wide">Full Name</Label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="mt-2" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="email" className="text-sm tracking-wide">Email</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm tracking-wide">Phone Number</Label>
                  <Input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="mt-2" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="company" className="text-sm tracking-wide">Company Name</Label>
                  <Input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your company" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="designation" className="text-sm tracking-wide">Designation</Label>
                  <Input id="designation" name="designation" value={form.designation} onChange={handleChange} placeholder="Your role" className="mt-2" />
                </div>
              </div>
              <div>
                <Label htmlFor="help" className="text-sm tracking-wide">What do you need help with?</Label>
                <select id="help" name="help" value={form.help} onChange={handleChange} className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-2">
                  <option value="">Select an option</option>
                  <option>Management Consulting</option>
                  <option>Branding & Marketing</option>
                  <option>Cloud & IT Services</option>
                  <option>HR Consulting</option>
                  <option>Finance Optimization</option>
                  <option>Generative AI</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <Label htmlFor="source" className="text-sm tracking-wide">Where did you know about us?</Label>
                <select id="source" name="source" value={form.source} onChange={handleChange} className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-2">
                  <option value="">Select an option</option>
                  <option>Google Search</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                  <option>Blog / Article</option>
                  <option>Event / Conference</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 text-sm font-normal tracking-widest uppercase hover:bg-markitome-light-blue hover:text-foreground transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
