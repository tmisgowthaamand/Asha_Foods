import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ShoppingCart, Star } from "lucide-react";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

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

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
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
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Product Image */}
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="relative group">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-secondary/10 shadow-md border border-border/30">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Label Badge */}
                    {product.label && (
                      <Badge 
                        variant={
                          product.label === "Spicy" ? "spicy" : 
                          product.label === "New" ? "new" : 
                          product.label === "Traditional" ? "heritage" :
                          product.label === "Premium" ? "heritage" :
                          "heritage"
                        }
                        className="absolute top-3 left-3"
                      >
                        {product.label}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:w-3/5 space-y-6">
                <div className="space-y-3">
                  <div>
                    <h1 className="text-2xl font-heading font-bold mb-2 text-foreground">{product.name}</h1>
                    {product.category && (
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <p className="text-muted-foreground capitalize text-sm">
                          {product.category.replace('-', ' ')}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                    <p className="text-3xl font-heading font-bold text-primary mb-1">
                      {product.price}
                    </p>
                    <p className="text-xs text-muted-foreground">Inclusive of all taxes</p>
                  </div>
                </div>

                {/* Description */}
                {product.description && (
                  <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground flex items-center">
                      <div className="w-1 h-4 bg-primary rounded-full mr-2"></div>
                      About this product
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {product.description}
                    </p>
                  </div>
                )}

                {/* Features */}
                <div>
                  <h3 className="font-heading font-bold text-lg mb-3 text-foreground flex items-center">
                    <div className="w-1 h-4 bg-primary rounded-full mr-2"></div>
                    Why choose this?
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 bg-background rounded-md border border-border/30">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">Made with traditional recipes</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-background rounded-md border border-border/30">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">Premium quality ingredients</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-background rounded-md border border-border/30">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">No artificial preservatives</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-background rounded-md border border-border/30">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">Authentic Tamil flavors</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-3 pt-4 w-full">
                  <Button 
                    onClick={handleAddToCart}
                    variant="heritage" 
                    size="default" 
                    className="flex-1 h-10 font-heading font-semibold min-w-0"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    onClick={onClose}
                    variant="outline" 
                    size="default"
                    className="h-10 px-6 font-heading flex-shrink-0"
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
