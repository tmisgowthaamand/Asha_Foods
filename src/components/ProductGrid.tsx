import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import heroPickle from "@/assets/hero-pickle.jpg";
import productCollection from "@/assets/product-collection.jpg";
import { useState } from "react";

const ProductGrid = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  
  const allProducts = [
    {
      id: 1,
      name: "Traditional Mango Pickle",
      price: "₹299",
      image: heroPickle,
      label: "New" as const,
      isHero: true
    },
    {
      id: 2,
      name: "Coconut Thuvaiyal",
      price: "₹199",
      image: heroPickle,
      label: "Spicy" as const
    },
    {
      id: 3,
      name: "Tomato Gojju",
      price: "₹179",
      image: productCollection
    },
    {
      id: 4,
      name: "Mixed Vegetable Pickle",
      price: "₹249",
      image: heroPickle,
      label: "Family Pack" as const
    },
    {
      id: 5,
      name: "Curry Leaf Powder",
      price: "₹149",
      image: productCollection
    },
    {
      id: 6,
      name: "Tamarind Rice Mix",
      price: "₹189",
      image: heroPickle,
      label: "Traditional" as const
    },
    {
      id: 7,
      name: "Sesame Oil Pickle",
      price: "₹229",
      image: heroPickle,
      label: "Premium" as const
    },
    {
      id: 8,
      name: "Drumstick Leaves Powder",
      price: "₹169",
      image: productCollection
    },
    {
      id: 9,
      name: "Lemon Rice Mix",
      price: "₹159",
      image: productCollection
    },
    {
      id: 10,
      name: "Garlic Pickle",
      price: "₹199",
      image: heroPickle,
      label: "Spicy" as const
    }
  ];

  const displayedProducts = showAllProducts ? allProducts : allProducts.slice(0, 5);

  return (
    <section id="products" className="py-section bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-section-heading text-foreground">
            Authentic Flavors,{" "}
            <span className="text-primary">Crafted with Love</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each product is made using traditional recipes passed down through generations, 
            bringing you the authentic taste of Tamil Nadu.
          </p>
        </div>

        {/* Asymmetrical Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 auto-rows-fr">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              label={product.label}
              isHero={product.isHero}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button 
            variant="heritage" 
            size="lg"
            onClick={() => {
              setShowAllProducts(!showAllProducts);
              if (!showAllProducts) {
                // Scroll to top of products section when showing all
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            {showAllProducts ? 'Show Less Products' : 'View All Products'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;