import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import productCollection from "@/assets/product-collection.jpg";

const Recipes = () => {
  const navigate = useNavigate();
  
  const recipes = [
    {
      id: 1,
      name: "Traditional Mango Pickle",
      difficulty: "Medium",
      time: "2 hours + 7 days fermentation",
      servings: "Makes 1 jar",
      image: productCollection,
      ingredients: [
        "1 kg raw mangoes, cut into pieces",
        "200g mustard seeds, ground",
        "100g fenugreek seeds, ground",
        "50g turmeric powder",
        "200ml sesame oil",
        "Salt to taste"
      ],
      instructions: [
        "Wash and dry mango pieces completely",
        "Mix all dry spices with salt",
        "Heat oil and let it cool",
        "Mix mangoes with spice mixture",
        "Add cooled oil and mix well",
        "Store in clean jar for 7 days",
        "Stir daily with clean spoon"
      ]
    },
    {
      id: 2,
      name: "Coconut Thuvaiyal",
      difficulty: "Easy",
      time: "20 minutes",
      servings: "Serves 4",
      image: productCollection,
      ingredients: [
        "1 cup fresh coconut, grated",
        "4-5 green chilies",
        "1 inch ginger piece",
        "10-12 curry leaves",
        "1 tsp mustard seeds",
        "2 tbsp coconut oil",
        "Salt to taste"
      ],
      instructions: [
        "Grind coconut, chilies, and ginger with little water",
        "Add salt and mix well",
        "Heat oil in pan",
        "Add mustard seeds, let them splutter",
        "Add curry leaves",
        "Pour over ground mixture",
        "Serve with rice"
      ]
    },
    {
      id: 3,
      name: "Tomato Gojju",
      difficulty: "Easy",
      time: "30 minutes",
      servings: "Serves 6",
      image: productCollection,
      ingredients: [
        "500g ripe tomatoes, chopped",
        "2 tbsp tamarind paste",
        "1 tsp mustard seeds",
        "1 tsp cumin seeds",
        "10 curry leaves",
        "2 dry red chilies",
        "3 tbsp coconut oil",
        "Salt and jaggery to taste"
      ],
      instructions: [
        "Heat oil in heavy-bottomed pan",
        "Add mustard seeds, cumin, red chilies",
        "Add curry leaves when seeds splutter",
        "Add chopped tomatoes and cook until soft",
        "Add tamarind paste and cook for 10 minutes",
        "Add salt and jaggery to taste",
        "Simmer until thick consistency"
      ]
    }
  ];

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
              Traditional <span className="text-primary">Recipes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the authentic recipes passed down through generations. 
              Learn to create the same flavors that have delighted families for over 70 years.
            </p>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {recipes.map((recipe, index) => (
              <div key={recipe.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Recipe Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-heritage">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Recipe Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-section-heading text-foreground">{recipe.name}</h2>
                    
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="heritage">{recipe.difficulty}</Badge>
                      <Badge variant="outline">{recipe.time}</Badge>
                      <Badge variant="outline">{recipe.servings}</Badge>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-foreground">Ingredients</h3>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-foreground">Instructions</h3>
                    <ol className="space-y-3">
                      {recipe.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-muted-foreground">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <Button variant="heritage" size="lg">
                    Try This Recipe
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Tips Section */}
      <section className="py-section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-section-heading text-foreground">
              Asha's <span className="text-primary">Cooking Tips</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Time-tested wisdom from three generations of traditional cooking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-heading font-bold mb-3">Quality Ingredients</h3>
              <p className="text-muted-foreground">
                Always use the freshest spices and vegetables. The quality of your 
                ingredients directly affects the final taste.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-heading font-bold mb-3">Patience is Key</h3>
              <p className="text-muted-foreground">
                Traditional recipes take time. Don't rush the fermentation or 
                cooking process - good flavors develop slowly.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-heading font-bold mb-3">Clean Equipment</h3>
              <p className="text-muted-foreground">
                Always use clean, dry utensils and storage containers. This ensures 
                your pickles and chutneys stay fresh longer.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-heading font-bold mb-3">Oil Temperature</h3>
              <p className="text-muted-foreground">
                Let heated oil cool completely before adding to pickles. Hot oil 
                can spoil the vegetables and affect fermentation.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-heading font-bold mb-3">Storage Matters</h3>
              <p className="text-muted-foreground">
                Store in glass jars in a cool, dry place. Avoid plastic containers 
                for long-term storage of pickles and chutneys.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-heading font-bold mb-3">Taste and Adjust</h3>
              <p className="text-muted-foreground">
                Always taste and adjust seasonings. Every batch of vegetables 
                is different and may need slight modifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Recipes;
