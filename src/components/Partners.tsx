const partners = [
  { name: "AWS Partner Network", logo: "https://markitome.com/wp-content/uploads/2024/06/aws-partner-network.webp" },
  { name: "GoDaddy Pro", logo: "https://markitome.com/wp-content/uploads/2024/06/godaddy-pro.webp" },
  { name: "GoDaddy", logo: "https://markitome.com/wp-content/uploads/2024/06/godaddy.webp" },
  { name: "Google Cloud Partner", logo: "https://markitome.com/wp-content/uploads/2024/06/google-cloud-partner.webp" },
  { name: "Meta", logo: "https://markitome.com/wp-content/uploads/2024/06/meta.webp" },
];

const Partners = () => {
  return (
    <section className="section-padding section-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl text-center mb-16">
          Our Partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-[80px] px-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-[160px] object-contain logo-grayscale"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
