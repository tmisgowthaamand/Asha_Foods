import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import heroPickle from "@/assets/hero-pickle.jpg";

const CategoryProducts = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();

  // All products data
  const allProducts = [
    // Pickles
    {
      id: 1,
      name: "Mango Pickle",
      price: "₹249",
      image: heroPickle,
      label: "New" as const,
      category: "pickles",
      description: "Traditional Tamil mango pickle made with raw mangoes and aromatic spices"
    },
    {
      id: 5,
      name: "Lemon Pickle",
      price: "₹199",
      image: heroPickle,
      label: "Spicy" as const,
      category: "pickles",
      description: "Tangy lemon pickle with mustard seeds and red chili powder"
    },
    {
      id: 8,
      name: "Mixed Vegetable Pickle",
      price: "₹279",
      image: heroPickle,
      label: "Traditional" as const,
      category: "pickles",
      description: "A medley of seasonal vegetables pickled in traditional Tamil style"
    },
    {
      id: 12,
      name: "Garlic Pickle",
      price: "₹229",
      image: heroPickle,
      label: "Spicy" as const,
      category: "pickles",
      description: "Fiery garlic pickle with sesame oil and spices"
    },
    {
      id: 16,
      name: "Amla Pickle",
      price: "₹209",
      image: heroPickle,
      label: "Healthy" as const,
      category: "pickles",
      description: "Vitamin C rich amla pickle with traditional spices"
    },
    
    // Thuvaiyal
    {
      id: 2,
      name: "Coconut Thuvaiyal",
      price: "₹199",
      image: heroPickle,
      label: "Spicy" as const,
      category: "thuvaiyal",
      description: "Fresh coconut chutney with green chilies and curry leaves"
    },
    {
      id: 11,
      name: "Mint Thuvaiyal",
      price: "₹189",
      image: heroPickle,
      category: "thuvaiyal",
      description: "Refreshing mint chutney perfect for rice and tiffin items"
    },
    {
      id: 15,
      name: "Ginger Thuvaiyal",
      price: "₹169",
      image: heroPickle,
      label: "Spicy" as const,
      category: "thuvaiyal",
      description: "Zesty ginger chutney with tamarind and jaggery"
    },
    {
      id: 17,
      name: "Coriander Thuvaiyal",
      price: "₹179",
      image: heroPickle,
      category: "thuvaiyal",
      description: "Fresh coriander chutney with coconut and green chilies"
    },
    {
      id: 18,
      name: "Tomato Thuvaiyal",
      price: "₹159",
      image: heroPickle,
      label: "Tangy" as const,
      category: "thuvaiyal",
      description: "Tangy tomato chutney with onions and spices"
    },

    // Combo Packs
    {
      id: 19,
      name: "Pickle Combo Pack",
      price: "₹599",
      image: heroPickle,
      label: "Family Pack" as const,
      category: "combo-packs",
      description: "3 varieties of pickles - Mango, Lemon, and Mixed Vegetable"
    },
    {
      id: 20,
      name: "Thuvaiyal Trio",
      price: "₹499",
      image: heroPickle,
      label: "Premium" as const,
      category: "combo-packs",
      description: "Coconut, Mint, and Ginger thuvaiyal combo pack"
    },
    {
      id: 21,
      name: "Complete Meal Pack",
      price: "₹899",
      image: heroPickle,
      label: "Family Pack" as const,
      category: "combo-packs",
      description: "2 pickles, 2 thuvaiyal, and 1 spice powder - complete meal companion"
    },
    {
      id: 22,
      name: "Starter Pack",
      price: "₹399",
      image: heroPickle,
      label: "New" as const,
      category: "combo-packs",
      description: "Perfect starter pack with 1 pickle and 1 thuvaiyal"
    },
    {
      id: 23,
      name: "Festival Special Pack",
      price: "₹1299",
      image: heroPickle,
      label: "Premium" as const,
      category: "combo-packs",
      description: "Festive combo with 4 pickles, 3 thuvaiyal, and 2 spice powders"
    }
  ];

  // Filter products by category
  const categoryProducts = allProducts.filter(product => product.category === category);

  // Get category display name
  const getCategoryName = (cat: string) => {
    switch (cat) {
      case 'pickles': return 'Pickles';
      case 'thuvaiyal': return 'Thuvaiyal';
      case 'combo-packs': return 'Combo Packs';
      default: return 'Products';
    }
  };

  // Get category description
  const getCategoryDescription = (cat: string) => {
    switch (cat) {
      case 'pickles': 
        return 'Traditional Tamil pickles made with fresh vegetables, aromatic spices, and cold-pressed oils. Each pickle is carefully crafted using time-honored recipes passed down through generations.';
      case 'thuvaiyal': 
        return 'Fresh coconut-based chutneys with herbs and spices, perfect accompaniments for rice and tiffin items. Our thuvaiyal varieties bring authentic South Indian flavors to your table.';
      case 'combo-packs': 
        return 'Specially curated combination packs featuring our most popular products at great value. Perfect for families or as gifts for loved ones who appreciate authentic Tamil cuisine.';
      default: 
        return 'Explore our collection of authentic Tamil food products.';
    }
  };

  if (!category || categoryProducts.length === 0) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested product category could not be found.</p>
          <Button onClick={() => navigate('/products')} variant="heritage">
            View All Products
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

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

      {/* Category Header */}
      <section className="py-16 bg-gradient-heritage">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {getCategoryName(category)}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {getCategoryDescription(category)}
          </p>
          <div className="mt-8">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              {categoryProducts.length} Products Available
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CategoryProducts;
