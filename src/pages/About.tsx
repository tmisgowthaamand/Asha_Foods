import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heritageCooking from "@/assets/heritage-cooking.jpg";
import familyDining from "@/assets/family-dining.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>
      
      {/* Hero Section */}
      <section className="py-section bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-hero text-foreground">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three generations of authentic South Indian flavors, crafted with love 
              and tradition in the heart of Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-section-heading text-foreground">
                  The Beginning
                  <span className="text-primary block">Asha's Legacy</span>
                </h2>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    In 1952, in a small village in Tamil Nadu, our grandmother Asha began 
                    what would become a culinary legacy. With her traditional mortar and pestle, 
                    she would wake before dawn to grind fresh spices and prepare chutneys 
                    that brought the entire neighborhood together.
                  </p>
                  
                  <p>
                    Her secret wasn't just in the recipes—it was in the love, patience, 
                    and respect for tradition that went into every jar. She believed that 
                    food was more than sustenance; it was a way to connect families, 
                    preserve culture, and share joy.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-heritage">
                <img 
                  src={heritageCooking} 
                  alt="Traditional Tamil cooking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-heritage">
                <img 
                  src={familyDining} 
                  alt="Family dining together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-section-heading text-foreground">
                  Today's Promise
                  <span className="text-primary block">Tradition Meets Modern</span>
                </h2>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Today, we continue Asha's tradition with the same dedication to 
                    authenticity and quality. Every product is made using her original 
                    recipes, sourcing ingredients from the same local farmers and 
                    traditional spice markets she trusted.
                  </p>
                  
                  <p>
                    We've combined traditional methods with modern food safety standards 
                    to bring you the authentic taste of Tamil Nadu, delivered fresh to 
                    your doorstep anywhere in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-section-heading text-foreground">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-heading font-bold">100% Natural</h3>
              <p className="text-muted-foreground">
                No artificial preservatives, colors, or flavors. Just pure, 
                natural ingredients like our grandmother used.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👨‍🌾</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Local Sourcing</h3>
              <p className="text-muted-foreground">
                We work directly with Tamil Nadu farmers, supporting local 
                communities and ensuring the freshest ingredients.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Made with Love</h3>
              <p className="text-muted-foreground">
                Every jar is prepared with the same care and attention 
                that Asha put into her family recipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">1952</div>
              <div className="text-muted-foreground">Heritage Since</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Traditional Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Natural Ingredients</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
