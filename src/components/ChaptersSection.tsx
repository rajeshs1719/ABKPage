import ChapterCard from "./ChapterCard";

const ChaptersSection = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <ChapterCard
            title="Bangalore"
            address="44, 100 Feet Road, Double Decker Flyover, Vysya Bank Colony, BTM 2nd Stage, Bengaluru 560 076."
            director="Uma Ramasubramanian"
            email="abkaots.blr@gmail.com"
            phone="+91 9500 777 330 / +91 9894074375"
          />
          <ChapterCard
            title="Coimbatore"
            address="44, 100 Feet Road, Double Decker Flyover, Vysya Bank Colony, BTM 2nd Stage, Bengaluru 560 076."
            director="Uma Ramasubramanian"
            email="abkaots.blr@gmail.com"
            phone="+91 9500 777 330 / +91 9894074375"
          />
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;
