import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CreditCard, Banknote, Truck, Calendar, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCartContext();
  const { toast } = useToast();
  
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('₹', ''));
    return sum + (price * item.quantity);
  }, 0);

  const gstRate = shippingInfo.country === 'India' ? 0.18 : 0; // 18% GST for India
  const gstAmount = subtotal * gstRate;
  const shippingCost = subtotal > 500 ? 0 : 50; // Free shipping above ₹500
  const total = subtotal + gstAmount + shippingCost;

  // Generate expected delivery date (3-7 days from now)
  const getDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + (shippingInfo.country === 'India' ? 5 : 10));
    return deliveryDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const generateOrderId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ASH-${timestamp}-${random}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setShippingInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePlaceOrder = () => {
    if (!selectedPayment) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method to continue.",
        variant: "destructive"
      });
      return;
    }

    if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.address) {
      toast({
        title: "Shipping Information Required",
        description: "Please fill in all required shipping details.",
        variant: "destructive"
      });
      return;
    }

    const orderId = generateOrderId();
    const order = {
      id: orderId,
      items: cartItems,
      subtotal,
      gst: gstAmount,
      shipping: shippingCost,
      total,
      paymentMethod: selectedPayment,
      shippingInfo,
      orderDate: new Date(),
      expectedDelivery: getDeliveryDate(),
      status: 'confirmed'
    };

    setOrderDetails(order);
    setOrderPlaced(true);
    clearCart();

    toast({
      title: "Order Placed Successfully!",
      description: `Order ID: ${orderId}. Expected delivery: ${getDeliveryDate()}`,
    });
  };

  const handleCancelOrder = () => {
    if (orderDetails) {
      toast({
        title: "Order Cancelled",
        description: `Order ${orderDetails.id} has been cancelled successfully.`,
      });
      setOrderPlaced(false);
      setOrderDetails(null);
      navigate('/');
    }
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some products to your cart to proceed with checkout.</p>
          <Button onClick={() => navigate('/products')} variant="heritage">
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  if (orderPlaced && orderDetails) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-card rounded-xl shadow-soft p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h1 className="text-2xl font-heading font-bold text-green-600 mb-2">Order Confirmed!</h1>
              <p className="text-muted-foreground">Thank you for your order. We'll send you updates via email.</p>
            </div>

            <div className="space-y-6">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-heading font-bold mb-2">Order Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span className="font-mono">{orderDetails.id}</span>
                  <span className="text-muted-foreground">Payment Method:</span>
                  <span>{orderDetails.paymentMethod}</span>
                  <span className="text-muted-foreground">Total Amount:</span>
                  <span className="font-bold">₹{orderDetails.total.toFixed(2)}</span>
                  <span className="text-muted-foreground">Expected Delivery:</span>
                  <span className="text-green-600 font-medium">{orderDetails.expectedDelivery}</span>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="font-heading font-bold mb-2">Shipping Address</h3>
                <div className="text-sm text-muted-foreground">
                  <p>{orderDetails.shippingInfo.name}</p>
                  <p>{orderDetails.shippingInfo.address}</p>
                  <p>{orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.state} {orderDetails.shippingInfo.pincode}</p>
                  <p>{orderDetails.shippingInfo.country}</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button onClick={() => navigate('/')} variant="heritage" className="flex-1">
                  Continue Shopping
                </Button>
                <Button onClick={handleCancelOrder} variant="destructive" className="flex-1">
                  Cancel Order
                </Button>
              </div>
            </div>
          </div>
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-heading font-bold mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Shipping & Payment */}
          <div className="space-y-8">
            {/* Shipping Information */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-heading font-bold mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name *"
                  value={shippingInfo.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  value={shippingInfo.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={shippingInfo.phone}
                  onChange={handleInputChange}
                />
                <select
                  name="country"
                  value={shippingInfo.country}
                  onChange={(e) => setShippingInfo(prev => ({ ...prev, country: e.target.value }))}
                  className="border border-border rounded-md px-3 py-2 bg-background"
                >
                  <option value="India">India</option>
                  <optgroup label="G20 Countries">
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Argentina">Argentina</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="China">China</option>
                    <option value="Russia">Russia</option>
                    <option value="Italy">Italy</option>
                  </optgroup>
                </select>
              </div>
              <Textarea
                name="address"
                placeholder="Complete Address *"
                value={shippingInfo.address}
                onChange={handleInputChange}
                className="mt-4"
                rows={3}
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Input
                  name="city"
                  placeholder="City"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                />
                <Input
                  name="state"
                  placeholder="State/Province"
                  value={shippingInfo.state}
                  onChange={handleInputChange}
                />
                <Input
                  name="pincode"
                  placeholder="PIN/ZIP Code"
                  value={shippingInfo.pincode}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-heading font-bold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPayment === 'Credit Card' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'
                  }`}
                  onClick={() => {
                    setSelectedPayment('Credit Card');
                    setShowPaymentForm(true);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPayment === 'Credit Card' ? 'border-primary bg-primary' : 'border-border'
                      }`}>
                        {selectedPayment === 'Credit Card' && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                        )}
                      </div>
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <h3 className="font-medium">Credit Card</h3>
                        <p className="text-sm text-muted-foreground">Pay with your credit card</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPayment === 'Debit Card' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'
                  }`}
                  onClick={() => {
                    setSelectedPayment('Debit Card');
                    setShowPaymentForm(true);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPayment === 'Debit Card' ? 'border-primary bg-primary' : 'border-border'
                      }`}>
                        {selectedPayment === 'Debit Card' && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                        )}
                      </div>
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <h3 className="font-medium">Debit Card</h3>
                        <p className="text-sm text-muted-foreground">Pay with your debit card</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPayment === 'Cash on Delivery' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'
                  }`}
                  onClick={() => {
                    setSelectedPayment('Cash on Delivery');
                    setShowPaymentForm(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPayment === 'Cash on Delivery' ? 'border-primary bg-primary' : 'border-border'
                      }`}>
                        {selectedPayment === 'Cash on Delivery' && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                        )}
                      </div>
                      <Banknote className="h-5 w-5" />
                      <div>
                        <h3 className="font-medium">Cash on Delivery</h3>
                        <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Payment Confirmation */}
          {showPaymentForm && (selectedPayment === 'Credit Card' || selectedPayment === 'Debit Card') && (
            <div className="bg-card rounded-xl p-6 shadow-soft mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-bold">{selectedPayment} Selected</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowPaymentForm(false)}
                  className="h-8 w-8 p-0"
                >
                  ×
                </Button>
              </div>
              
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-medium mb-2">{selectedPayment} payment method selected</p>
                <p className="text-muted-foreground text-sm mb-6">
                  You will be redirected to secure payment gateway during checkout
                </p>
                <Button 
                  variant="heritage" 
                  onClick={() => setShowPaymentForm(false)}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Right Column - Order Summary */}
          <div className="bg-card rounded-xl p-6 shadow-soft h-fit">
            <h2 className="text-xl font-heading font-bold mb-6">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Pricing Breakdown */}
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              {gstAmount > 0 && (
                <div className="flex justify-between">
                  <span>GST (18%):</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-border pt-2">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Shipping & Delivery Info */}
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-secondary/50 rounded-lg border border-border/30">
                <div className="flex items-center space-x-2 mb-3">
                  <Truck className="h-4 w-4 text-primary" />
                  <span className="font-medium">Shipping Details</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping Method:</span>
                    <span className="font-medium">
                      {shippingInfo.country === 'India' ? 'Standard Delivery' : 'International Shipping'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Time:</span>
                    <span className="font-medium">1-2 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transit Time:</span>
                    <span className="font-medium">
                      {shippingInfo.country === 'India' ? '3-5 business days' : '7-10 business days'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800">Expected Delivery</span>
                </div>
                <p className="text-sm font-bold text-green-700">{getDeliveryDate()}</p>
                {shippingInfo.country !== 'India' && (
                  <p className="text-xs text-green-600 mt-1">
                    International orders may experience customs delays
                  </p>
                )}
                <p className="text-xs text-green-600 mt-1">
                  We'll send tracking details via email once shipped
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                type="submit" 
                variant="heritage" 
                size="lg" 
                className="flex-1 text-base sm:text-lg font-semibold h-12 sm:h-14 touch-manipulation"
                disabled={!selectedPayment}
              >
                Place Order • ₹{total.toFixed(2)}
              </Button>
            </div>

            {/* GST Note */}
            {shippingInfo.country === 'India' && (
              <p className="text-xs text-muted-foreground mt-4 text-center">
                * GST included as per Indian tax regulations
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-2 text-center">
              We ship to India and all G20 countries
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Checkout;
