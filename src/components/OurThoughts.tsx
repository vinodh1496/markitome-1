import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Embracing the Power of AI in Skill Development",
    image: "https://markitome.com/wp-content/uploads/2023/01/AI-19.png",
    link: "https://markitome.com/embracing-the-power-of-ai-in-skill-development/",
  },
  {
    title: "An Extensive Guide to Instagram's New Subscription Feature",
    image: "https://markitome.com/wp-content/uploads/2022/03/insta-11.jpg",
    link: "https://markitome.com/an-extensive-guide-to-instagrams-new-subscription-feature/",
  },
  {
    title: "7 Instagram Marketing Trends You Need to Know Right Now",
    image: "https://markitome.com/wp-content/uploads/2023/05/Untitled-design-5.png",
    link: "https://markitome.com/7-instagram-marketing-trends-you-need-to-know-right-now/",
  },
];

const OurThoughts = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl text-center mb-4">
          Our Thoughts
        </h2>
        <p className="text-center text-muted-foreground font-light text-lg mb-20">
          Insights that inspire action
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogs.map((blog) => (
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
                  className="w-full h-[260px] lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-normal text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                {blog.title}
              </h3>
              <span className="text-sm text-primary font-normal tracking-wide">
                Read More →
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-normal tracking-widest uppercase hover:bg-markitome-light-blue hover:text-foreground transition-colors duration-200"
          >
            Explore Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurThoughts;
