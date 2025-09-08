import familyDining from "@/assets/family-dining.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Asha Foods brings back memories of my grandmother's kitchen. The authentic taste is unmatched!",
      author: "Priya Sharma",
      location: "Mumbai",
      image: familyDining
    },
    {
      id: 2,
      quote: "Finally found pickles that taste exactly like home. My family loves every single product.",
      author: "Rajesh Kumar",
      location: "Bangalore",
      image: familyDining
    },
    {
      id: 3,
      quote: "The mango pickle is absolutely divine! Ordered 6 jars for my extended family.",
      author: "Meera Nair",
      location: "Kochi",
      image: familyDining
    }
  ];

  return (
    <section className="py-section bg-gradient-warmth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
            Stories from Our{" "}
            <span className="text-primary">Food Family</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every jar creates a connection, every bite brings back memories. 
            Here's what our customers say about their Asha Foods experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`group relative ${index % 2 === 0 ? 'bg-off-white' : 'bg-warm-beige'} p-4 sm:p-6 lg:p-8 rounded-2xl shadow-soft hover:shadow-elevation transition-all duration-300 animate-scale-hover flex flex-col h-full`}
            >
              {/* Polaroid-style image */}
              <div className="mb-4 sm:mb-6 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 flex-shrink-0">
                <div className="bg-white p-1.5 sm:p-2 rounded-lg shadow-soft">
                  <div className="aspect-[4/3] rounded overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.author} family`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial content */}
              <blockquote className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed mb-4 sm:mb-6 lg:mb-8 font-medium italic flex-grow">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex flex-col space-y-1 sm:space-y-2 mt-auto">
                <div className="font-heading font-bold text-primary text-lg sm:text-xl tracking-wide leading-tight">
                  {testimonial.author}
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground tracking-normal leading-tight">
                  {testimonial.location}
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-4xl sm:text-5xl lg:text-6xl text-primary/20 font-heading leading-none">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;