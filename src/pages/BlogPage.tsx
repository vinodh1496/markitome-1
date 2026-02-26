import PageHero from "@/components/PageHero";

const blogs = [
  {
    title: "Embracing the Power of AI in Skill Development",
    image: "https://markitome.com/wp-content/uploads/2023/01/AI-19.png",
    link: "https://markitome.com/embracing-the-power-of-ai-in-skill-development/",
    excerpt: "Artificial intelligence is reshaping how we learn and develop new skills. Discover how AI-powered tools are personalizing education and accelerating professional growth across industries.",
  },
  {
    title: "An Extensive Guide to Instagram's New Subscription Feature",
    image: "https://markitome.com/wp-content/uploads/2022/03/insta-11.jpg",
    link: "https://markitome.com/an-extensive-guide-to-instagrams-new-subscription-feature/",
    excerpt: "Instagram's subscription feature lets creators monetize their content directly. Learn how businesses and influencers can leverage subscriptions for recurring revenue and deeper audience engagement.",
  },
  {
    title: "7 Instagram Marketing Trends You Need to Know Right Now",
    image: "https://markitome.com/wp-content/uploads/2023/05/Untitled-design-5.png",
    link: "https://markitome.com/7-instagram-marketing-trends-you-need-to-know-right-now/",
    excerpt: "Stay ahead of the curve with the latest Instagram marketing trends. From Reels dominance to AI-driven content strategies, here's what's shaping the platform right now.",
  },
  {
    title: "Facebook Vs Instagram: Which Is Better for Your Business?",
    image: "https://markitome.com/wp-content/uploads/2025/02/fb-1.png",
    link: "https://markitome.com/facebook-vs-instagram-which-is-better-for-your-business/",
    excerpt: "Choosing between Facebook and Instagram for your business? We break down audience demographics, ad performance, and engagement metrics to help you decide where to invest.",
  },
  {
    title: "What role does Geolocation play on Instagram?",
    image: "https://markitome.com/wp-content/uploads/2025/02/geo-insta.png",
    link: "https://markitome.com/what-role-does-geolocation-play-on-instagram/",
    excerpt: "Geotagging on Instagram isn't just about showing where you are — it's a powerful tool for increasing discoverability, driving foot traffic, and connecting with local audiences.",
  },
  {
    title: "Understanding Branding Archetypes",
    image: "https://markitome.com/wp-content/uploads/2025/02/10-5.jpg",
    link: "https://markitome.com/understanding-branding-archetypes/",
    excerpt: "Branding archetypes give your brand a distinct personality that resonates with customers. Learn about the 12 archetypes and how to use them to build emotional connections.",
  },
];

const BlogPage = () => {
  const [featured, ...rest] = blogs;

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights that inspire action"
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block mb-20"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="lg:w-3/5 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-[300px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-2/5">
                <span className="text-xs font-normal text-primary tracking-widest uppercase mb-4 block">Featured</span>
                <h2 className="text-2xl lg:text-3xl font-normal leading-snug mb-6 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-normal tracking-wide">
                  Read More <span className="text-lg">→</span>
                </span>
              </div>
            </div>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {rest.map((blog) => (
              <a
                key={blog.title}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="overflow-hidden mb-6">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-lg font-normal leading-snug mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h2>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <span className="text-sm text-primary font-normal tracking-wide">Read More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
