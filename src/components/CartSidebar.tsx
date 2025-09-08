import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Minus, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import { useCartContext } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCartContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('₹', ''));
    return sum + (price * item.quantity);
  }, 0);

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some products to your cart first.",
        variant: "destructive"
      });
      return;
    }

    onClose();
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-background border-l border-border shadow-xl transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <h2 className="font-heading font-bold">Cart</h2>
            <Badge variant="secondary" className="text-xs">{cartItems.length}</Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-2 border border-border rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-primary font-bold text-sm">{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-heading font-bold">Total:</span>
              <span className="text-lg font-heading font-bold text-primary">₹{total.toFixed(2)}</span>
            </div>
            <div className="space-y-2">
              <Button 
                variant="heritage" 
                onClick={handleProceedToCheckout}
                size="sm" 
                className="w-full"
              >
                Proceed to Checkout
              </Button>
              <Button variant="outline" onClick={clearCart} className="w-full" size="sm">
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
