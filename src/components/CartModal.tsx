import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { useState } from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, createOrder } = useCartContext();
  const { toast } = useToast();
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('₹', ''));
    return sum + (price * item.quantity);
  }, 0);

  const handleCreateOrder = async () => {
    setIsProcessingOrder(true);
    try {
      const order = createOrder();
      if (order) {
        toast({
          title: "Order Created Successfully!",
          description: `Order ID: ${order.id}. Total: ₹${order.total.toFixed(2)}`,
        });
        onClose();
      }
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessingOrder(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-border">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            <h2 className="text-lg sm:text-xl font-heading font-bold">Shopping Cart</h2>
            <Badge variant="secondary" className="text-xs">{cartItems.length} items</Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-1 sm:p-2">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="overflow-y-auto max-h-60 sm:max-h-96 p-3 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <ShoppingCart className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-muted-foreground mb-3 sm:mb-4" />
              <p className="text-muted-foreground text-sm sm:text-base">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-border rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-medium text-sm sm:text-base mb-1">{item.name}</h3>
                    <p className="text-primary font-bold text-sm sm:text-base">{item.price}</p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0 touch-manipulation"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0 touch-manipulation"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive ml-2 touch-manipulation"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-3 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg font-heading font-bold">Total:</span>
              <span className="text-lg sm:text-2xl font-heading font-bold text-primary">₹{total.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button 
                variant="outline" 
                onClick={clearCart} 
                className="flex-1 h-10 sm:h-11 text-sm sm:text-base touch-manipulation"
              >
                Clear Cart
              </Button>
              <Button 
                variant="heritage" 
                onClick={handleCreateOrder}
                disabled={isProcessingOrder}
                className="flex-1 h-10 sm:h-11 text-sm sm:text-base touch-manipulation"
              >
                {isProcessingOrder ? "Processing..." : "Create Order"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
