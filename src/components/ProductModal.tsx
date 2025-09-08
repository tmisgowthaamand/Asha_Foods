import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ShoppingCart, Star, Plus, Minus } from "lucide-react";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  label?: "New" | "Spicy" | "Family Pack" | "Traditional" | "Premium" | "Healthy" | "Tangy";
  category?: string;
  description?: string;
}

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { addToCart } = useCartContext();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    };
    
    addToCart(cartItem);
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-2 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-heritage rounded-t-2xl">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground">Product Details</h2>
              <p className="text-sm text-muted-foreground mt-1">Authentic South Indian flavors</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose} 
              className="h-10 w-10 p-0 hover:bg-secondary/80 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Product Image */}
              <div className="w-full lg:w-2/5 flex-shrink-0">
                <div className="aspect-square lg:aspect-auto lg:h-96">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full lg:w-3/5 space-y-4 lg:space-y-6">
                <div className="space-y-3 lg:space-y-4">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-muted-foreground capitalize text-xs sm:text-sm font-medium">
                    {product.category.replace('-', ' ')}
                  </p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary">
                    {product.price}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>
                </div>
                {/* Quantity Selector */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="text-sm font-medium text-foreground">Quantity:</span>
                  <div className="flex items-center border border-border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8 p-0 touch-manipulation"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-3 sm:px-4 py-1 text-sm font-medium min-w-[2.5rem] sm:min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 p-0 touch-manipulation"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    onClick={handleAddToCart}
                    variant="heritage" 
                    size="default" 
                    className="flex-1 h-11 sm:h-12 font-heading font-semibold min-w-0 text-sm sm:text-base touch-manipulation"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    onClick={onClose}
                    variant="outline" 
                    size="default"
                    className="h-10 sm:h-11 px-4 sm:px-6 font-heading flex-shrink-0 text-sm sm:text-base touch-manipulation"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
