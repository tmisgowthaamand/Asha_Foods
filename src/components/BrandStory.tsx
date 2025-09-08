import heritageCooking from "@/assets/heritage-cooking.jpg";

const BrandStory = () => {
  return (
    <section data-section="story" className="py-section bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h2 className="text-section-heading text-foreground">
                Three Generations of 
                <span className="text-primary block">Authentic Flavors</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In the heart of Tamil Nadu, our grandmother Asha began a legacy with her 
                  mortar and pestle, grinding fresh spices at dawn and crafting chutneys 
                  that brought families together around the dining table.
                </p>
                
                <p>
                  Today, we honor her tradition by carefully preserving those time-tested 
                  recipes, using only the finest ingredients sourced from local Tamil farmers 
                  and traditional spice markets.
                </p>
                
                <p>
                  Every jar tells a story of heritage, authenticity, and the love that goes 
                  into creating flavors that transport you home with every bite.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">50+</div>
                <div className="text-label text-muted-foreground mt-2">Traditional Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">1952</div>
                <div className="text-label text-muted-foreground mt-2">Heritage Since</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">100%</div>
                <div className="text-label text-muted-foreground mt-2">Natural Ingredients</div>
              </div>
            </div>
          </div>

          {/* Right side - Heritage Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-heritage">
              <img 
                src={heritageCooking} 
                alt="Traditional Tamil woman grinding spices"
                className="w-full h-full object-cover animate-scale-hover"
              />
            </div>
            
            {/* Quote overlay */}
            <div className="absolute -bottom-8 -left-8 bg-warm-beige p-8 rounded-xl shadow-elevation max-w-sm">
              <blockquote className="text-lg font-heading italic text-charcoal">
                "Amma's recipes, modern convenience"
              </blockquote>
              <cite className="text-label text-muted-foreground mt-2 block">
                — The Asha Foods Promise
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;