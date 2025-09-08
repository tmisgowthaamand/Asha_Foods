import { Button } from "@/components/ui/button";
import heroPickle from "@/assets/hero-pickle.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-heritage py-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-hero text-foreground">
                Taste Tradition.{" "}
                <span className="text-primary">Order Now</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Authentic South Indian thuvaiyal, chutneys and pickles crafted with 
                generations-old recipes from Tamil Nadu. Premium quality, traditional taste.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="heritage" 
                size="lg" 
                className="text-lg"
                onClick={() => {
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg"
                onClick={() => {
                  const storySection = document.querySelector('[data-section="story"]');
                  if (storySection) {
                    storySection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Our Story
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-label text-muted-foreground">100% Homemade Recipes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-label text-muted-foreground">Authentic South Indian</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-label text-muted-foreground">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-heritage">
              <img 
                src={heroPickle} 
                alt="Traditional South Indian pickles and chutneys on banana leaf"
                className="w-full h-full object-cover animate-scale-hover"
              />
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-elevation">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold">50+</div>
                <div className="text-sm text-label">Authentic Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;