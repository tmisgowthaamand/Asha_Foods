import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Truck, Clock, MapPin, Package, Shield, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();

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

      {/* Hero Section */}
      <section className="py-section bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-hero text-foreground">
              Shipping <span className="text-primary">Information</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver authentic Tamil food products across India and G20 countries 
              with care and speed to preserve freshness and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Details */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Domestic Shipping */}
            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Domestic Shipping</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>India:</strong> 3-5 business days</p>
                <p><strong>Free shipping</strong> on orders above ₹500</p>
                <p><strong>Standard rate:</strong> ₹50 for orders below ₹500</p>
                <p><strong>Express delivery:</strong> Available in major cities</p>
              </div>
            </div>

            {/* International Shipping */}
            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">International Shipping</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>G20 Countries:</strong> 7-14 business days</p>
                <p><strong>Shipping rates:</strong> Calculated at checkout</p>
                <p><strong>Customs:</strong> Customer responsibility</p>
                <p><strong>Tracking:</strong> Provided for all orders</p>
              </div>
            </div>

            {/* Packaging */}
            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Packaging</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Secure packaging</strong> to prevent damage</p>
                <p><strong>Temperature controlled</strong> for perishables</p>
                <p><strong>Eco-friendly</strong> materials used</p>
                <p><strong>Tamper-proof</strong> sealing</p>
              </div>
            </div>
          </div>

          {/* Shipping Zones */}
          <div className="bg-secondary rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">Shipping Zones</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-heading font-bold mb-4 text-primary">Zone 1 - India</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All Indian states and union territories</li>
                  <li>• Standard delivery: 3-5 business days</li>
                  <li>• Express delivery: 1-2 business days (select cities)</li>
                  <li>• Cash on Delivery available</li>
                  <li>• GST included in prices</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold mb-4 text-primary">Zone 2 - G20 Countries</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• USA, UK, Canada, Australia, Germany, France</li>
                  <li>• Japan, South Korea, Brazil, Mexico, Argentina</li>
                  <li>• South Africa, Saudi Arabia, Turkey, Indonesia</li>
                  <li>• China, Russia, Italy</li>
                  <li>• Standard delivery: 7-14 business days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shipping Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-center mb-12">Our Shipping Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h4 className="font-heading font-bold mb-2">Order Placed</h4>
                <p className="text-sm text-muted-foreground">Your order is confirmed and payment processed</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h4 className="font-heading font-bold mb-2">Preparation</h4>
                <p className="text-sm text-muted-foreground">Items are carefully packed with quality checks</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h4 className="font-heading font-bold mb-2">Dispatch</h4>
                <p className="text-sm text-muted-foreground">Package is dispatched with tracking information</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  4
                </div>
                <h4 className="font-heading font-bold mb-2">Delivery</h4>
                <p className="text-sm text-muted-foreground">Your order arrives fresh and ready to enjoy</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-card rounded-xl p-8">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <Shield className="h-6 w-6 text-primary mr-3" />
              Important Shipping Notes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-bold mb-3">Delivery Times</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Delivery times are estimates and may vary during peak seasons</li>
                  <li>• Orders placed before 2 PM are processed the same day</li>
                  <li>• Weekend and holiday orders are processed on the next business day</li>
                  <li>• Remote areas may require additional 1-2 days</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-bold mb-3">Special Handling</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Perishable items are shipped with ice packs</li>
                  <li>• Glass containers are bubble-wrapped for protection</li>
                  <li>• All packages are insured against damage</li>
                  <li>• Signature required for high-value orders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Shipping;
