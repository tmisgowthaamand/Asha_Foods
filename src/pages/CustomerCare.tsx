import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Truck, RefreshCw, HelpCircle, MessageCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CustomerCare = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-heritage py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Customer Care
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Get support, track orders, or learn more about our authentic South Indian products.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-muted-foreground">+91 9876543210</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat, 9 AM - 6 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-muted-foreground">hello@ashafoods.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
                    <p className="text-sm text-muted-foreground">India - 600001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Help Sections */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Shipping Info</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Free shipping on orders above ₹500. Delivery within 3-5 business days.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Return Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Easy returns within 7 days. Quality guarantee on all products.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 text-primary mr-2" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <h3 className="font-medium mb-2">How long do your products stay fresh?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our pickles and thuvaiyal have a shelf life of 6-12 months when stored properly in a cool, dry place.
                  </p>
                </div>
                <div className="border-b border-border pb-4">
                  <h3 className="font-medium mb-2">Do you ship internationally?</h3>
                  <p className="text-sm text-muted-foreground">
                    Currently, we ship within India only. International shipping coming soon!
                  </p>
                </div>
                <div className="border-b border-border pb-4">
                  <h3 className="font-medium mb-2">Are your products preservative-free?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! We use traditional methods and natural ingredients without artificial preservatives.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I customize my order?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Contact us for custom combo packs or bulk orders for special occasions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-card rounded-xl p-6 shadow-soft h-fit">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 text-primary mr-2" />
              Send us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input type="text" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input type="text" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                <Input type="tel" placeholder="+91 9876543210" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full p-3 border border-border rounded-lg bg-background">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Product Question</option>
                  <option>Shipping Issue</option>
                  <option>Return Request</option>
                  <option>Bulk Order</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us how we can help you..."
                  rows={5}
                />
              </div>
              
              <Button variant="heritage" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mt-16 bg-card rounded-xl p-8 shadow-soft">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold mb-4">About Asha Foods</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Since 1952, we've been crafting authentic South Indian pickles, thuvaiyal, and chutneys 
              using traditional recipes passed down through generations in Tamil Nadu.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">70+ Years</h3>
              <p className="text-sm text-muted-foreground">
                Of authentic recipe tradition and culinary expertise
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌿</div>
              </div>
              <h3 className="font-heading font-bold mb-2">100% Natural</h3>
              <p className="text-sm text-muted-foreground">
                No artificial preservatives, colors, or flavors
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">❤️</div>
              </div>
              <h3 className="font-heading font-bold mb-2">Made with Love</h3>
              <p className="text-sm text-muted-foreground">
                Every jar is prepared with care and traditional methods
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="mt-16 bg-card rounded-xl p-8 shadow-soft">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/products')}
              className="h-16 flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-2xl">🛍️</div>
              <span className="text-sm font-medium">Products</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/about')}
              className="h-16 flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-2xl">📖</div>
              <span className="text-sm font-medium">About</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/recipes')}
              className="h-16 flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-2xl">👩‍🍳</div>
              <span className="text-sm font-medium">Recipes</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="h-16 flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-2xl">📞</div>
              <span className="text-sm font-medium">Contact</span>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerCare;
