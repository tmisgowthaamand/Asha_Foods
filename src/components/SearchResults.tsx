import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  label?: "New" | "Spicy" | "Family Pack" | "Traditional" | "Premium";
  category: string;
  description: string;
}

interface SearchResultsProps {
  products: Product[];
  searchQuery: string;
  onClose: () => void;
}

const SearchResults = ({ products, searchQuery, onClose }: SearchResultsProps) => {
  const { addToCart } = useCartContext();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-foreground px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  if (products.length === 0) {
    return (
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-background border border-border rounded-lg shadow-xl mt-2 p-4 z-[100]">
        <div className="p-4 sm:p-6 text-center text-muted-foreground">
          <div className="text-3xl sm:text-4xl mb-2">🔍</div>
          <p className="text-xs sm:text-sm">No products found</p>
        </div>
      </div>
    );
  }

  const displayProducts = products.slice(0, 4);

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md bg-card border border-border rounded-lg shadow-lg mt-2 z-50 max-h-80 sm:max-h-96 overflow-y-auto">
      {displayProducts.length > 0 ? (
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
          {displayProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
              onClick={() => {
                onClose();
                navigate('/products');
              }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md flex-shrink-0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-xs sm:text-sm text-foreground truncate group-hover:text-primary transition-colors">
                  {highlightText(product.name, searchQuery)}
                </h3>
                <p className="text-xs text-muted-foreground capitalize">
                  {product.category?.replace('-', ' ')}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-primary">
                  {product.price}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  variant="heritage"
                  size="sm"
                  className="h-7 sm:h-8 px-2 sm:px-3 text-xs touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {products.length > 4 && (
        <div className="p-2 border-t border-border">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => {
              onClose();
              navigate('/products');
            }}
          >
            View all {products.length} results
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
