import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Minus, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import { useCartContext } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  label?: "New" | "Spicy" | "Family Pack" | "Traditional" | "Premium" | "Healthy" | "Tangy";
  category?: string;
  description?: string;
}

interface ProductCardProps {
  product?: Product;
  name?: string;
  price?: string;
  image?: string;
  label?: "New" | "Spicy" | "Family Pack" | "Traditional" | "Premium" | "Healthy" | "Tangy";
  isHero?: boolean;
}

const ProductCard = ({ product, name, price, image, label, isHero = false }: ProductCardProps) => {
  const { addToCart } = useCartContext();
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  
  // Use product data if provided, otherwise use individual props
  const productData = product || { 
    id: Math.floor(Math.random() * 10000), 
    name: name!, 
    price: price!, 
    image: image!, 
    label,
    category: 'products',
    description: `Authentic ${name} made with traditional recipes and premium ingredients.`
  };
  
  const cardClasses = isHero 
    ? "lg:col-span-2 lg:row-span-2 h-full" 
    : "h-full";

  const imageAspect = isHero 
    ? "aspect-[4/3]" 
    : "aspect-square";

  const handleAddToCart = () => {
    const productId = product?.id || Math.floor(Math.random() * 10000);
    const cartItem = {
      id: productId,
      name: productData.name,
      price: productData.price,
      image: productData.image,
      quantity: 1
    };
    
    addToCart(cartItem);
    
    toast({
      title: "Added to cart!",
      description: `${productData.name} has been added to your cart.`,
    });
  };

  return (
    <div className={`group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevation transition-all duration-300 animate-scale-hover ${cardClasses} flex flex-col h-full`}>
      {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-secondary/20 relative">
          <img 
            src={productData.image} 
            alt={productData.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        {/* Label Badge */}
        {productData.label && (
          <Badge 
            variant={
              productData.label === "Spicy" ? "spicy" : 
              productData.label === "New" ? "new" : 
              productData.label === "Traditional" ? "heritage" :
              productData.label === "Premium" ? "heritage" :
              "heritage"
            }
            className="absolute top-4 left-4"
          >
            {productData.label}
          </Badge>
        )}

          {/* Mobile Add to Cart Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end md:hidden">
            <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Button variant="heritage" size="sm" className="w-full text-sm font-semibold" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      {/* Product Info */}
        <div className="p-4 sm:p-5 space-y-3 sm:space-y-4 flex-1 flex flex-col">
          <div className="space-y-2 sm:space-y-3 flex-1">
            <h3 className="font-heading font-semibold text-base sm:text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {productData.name}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm capitalize font-medium">
              {productData.category?.replace('-', ' ')}
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 leading-relaxed">
              {productData.description || 'Authentic South Indian delicacy made with traditional recipes and premium ingredients.'}
            </p>
          </div>
          
          {/* Price and Actions */}
          <div className="space-y-3 mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-heading font-bold text-primary">
                {productData.price}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowModal(true)}
                className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 h-auto"
              >
                Quick View
              </Button>
            </div>
            
            {/* Desktop Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              variant="heritage"
              size="sm"
              className="w-full h-9 sm:h-10 text-sm font-semibold hidden md:flex items-center justify-center"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            
            {/* Mobile Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              variant="heritage"
              size="sm"
              className="w-full h-10 text-sm font-semibold md:hidden flex items-center justify-center"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      
      {/* Product Modal */}
      <ProductModal 
        product={productData}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default ProductCard;