import { Award, Leaf, Heart, Clock } from "lucide-react";

const HeritageCallout = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every jar is crafted with the same love and care that Asha put into her recipes"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial preservatives, colors, or flavors - just pure, natural ingredients"
    },
    {
      icon: Clock,
      title: "Time-Honored Recipes",
      description: "Traditional recipes passed down through three generations since 1952"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Sourced from the finest Tamil farmers and traditional spice markets"
    }
  ];

  return (
    <section className="py-section bg-warm-beige relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-turmeric to-chili"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-section-heading text-charcoal">
            Tamil Culinary{" "}
            <span className="text-primary">Traditions</span>
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Rooted in the rich culinary heritage of Tamil Nadu, our products celebrate 
            the authentic flavors and time-tested techniques that have nourished families for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-heritage">
                <feature.icon className="h-8 w-8 text-off-white" />
              </div>
              
              <h3 className="text-card-title text-charcoal font-semibold">
                {feature.title}
              </h3>
              
              <p className="text-charcoal/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Heritage quote section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-off-white/50 backdrop-blur-sm rounded-2xl p-12 shadow-soft">
            <blockquote className="text-2xl md:text-3xl font-heading text-charcoal leading-relaxed italic mb-6">
              "Food is the thread that weaves our heritage together, 
              carrying stories from one generation to the next."
            </blockquote>
            <cite className="text-lg text-primary font-semibold">
              — Asha Devi, Founder (1952-2018)
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageCallout;