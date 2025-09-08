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
        <div className="text-center text-muted-foreground text-sm">
          No products found
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-card border border-border rounded-lg shadow-xl mt-2 max-h-80 overflow-y-auto z-[100]">
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading font-bold text-sm">
            {searchQuery ? `Results for "${searchQuery}"` : 'Popular Products'}
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0">
            ×
          </Button>
        </div>
        
        <div className="space-y-1">
          {products.slice(0, 4).map((product) => (
            <div 
              key={product.id} 
              className="flex items-center space-x-3 p-3 hover:bg-secondary rounded-md cursor-pointer group"
              onClick={() => {
                onClose();
                navigate('/products');
              }}
            >
              <div className="w-12 h-12 flex-shrink-0 bg-secondary/20 rounded-lg overflow-hidden border border-border/30">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                  {highlightText(product.name, searchQuery)}
                </h4>
                <p className="text-sm text-primary font-bold">{product.price}</p>
                {product.category && (
                  <p className="text-xs text-muted-foreground capitalize">
                    {product.category.replace('-', ' ')}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  className="h-8 w-8 p-0 hover:bg-primary/10"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
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
    </div>
  );
};

export default SearchResults;
