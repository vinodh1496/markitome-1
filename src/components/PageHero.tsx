interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400",
}: PageHeroProps) => {
  return (
    <section className="relative py-24 lg:py-36 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary-foreground font-light mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 font-light text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
