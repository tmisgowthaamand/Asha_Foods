import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, Clock, CheckCircle, XCircle, AlertCircle, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Returns = () => {
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
              Return <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stand behind the quality of our products. If you're not completely satisfied, 
              we'll make it right with our hassle-free return policy.
            </p>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">7-Day Return</h3>
              <p className="text-muted-foreground">
                Return unopened products within 7 days of delivery for a full refund or exchange.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <RotateCcw className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Easy Process</h3>
              <p className="text-muted-foreground">
                Simple return process with prepaid return labels and quick refund processing.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                100% satisfaction guarantee on all our authentic Tamil food products.
              </p>
            </div>
          </div>

          {/* Return Conditions */}
          <div className="bg-secondary rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">Return Conditions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-heading font-bold mb-4 text-green-600 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Eligible for Return
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unopened and unused products</li>
                  <li>• Original packaging intact</li>
                  <li>• Within 7 days of delivery</li>
                  <li>• Products damaged during shipping</li>
                  <li>• Wrong items delivered</li>
                  <li>• Quality issues or defects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold mb-4 text-red-600 flex items-center">
                  <XCircle className="h-5 w-5 mr-2" />
                  Not Eligible for Return
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Opened or consumed products</li>
                  <li>• Products past 7-day return window</li>
                  <li>• Damaged due to misuse</li>
                  <li>• Custom or personalized items</li>
                  <li>• Perishable items (unless defective)</li>
                  <li>• Items without original packaging</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Return Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-center mb-12">How to Return</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h4 className="font-heading font-bold mb-2">Contact Us</h4>
                <p className="text-sm text-muted-foreground">Email us at returns@ashafoods.com or call our support team</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h4 className="font-heading font-bold mb-2">Get Return Label</h4>
                <p className="text-sm text-muted-foreground">We'll provide a prepaid return shipping label</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h4 className="font-heading font-bold mb-2">Pack & Ship</h4>
                <p className="text-sm text-muted-foreground">Pack items securely and drop off at courier location</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  4
                </div>
                <h4 className="font-heading font-bold mb-2">Get Refund</h4>
                <p className="text-sm text-muted-foreground">Refund processed within 3-5 business days</p>
              </div>
            </div>
          </div>

          {/* Refund Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                <Package className="h-6 w-6 text-primary mr-3" />
                Refund Methods
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Original Payment Method</h4>
                  <p className="text-sm text-muted-foreground">Refunds are processed to your original payment method</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Processing Time</h4>
                  <p className="text-sm text-muted-foreground">3-5 business days for credit/debit cards, 7-10 days for bank transfers</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cash on Delivery</h4>
                  <p className="text-sm text-muted-foreground">Bank transfer to your provided account details</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                <AlertCircle className="h-6 w-6 text-primary mr-3" />
                Exchange Policy
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Product Exchange</h4>
                  <p className="text-sm text-muted-foreground">Exchange for same or different products of equal or higher value</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Size/Variant Exchange</h4>
                  <p className="text-sm text-muted-foreground">Free exchange for different sizes or variants</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Shipping Costs</h4>
                  <p className="text-sm text-muted-foreground">We cover return shipping for defective items</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-heading font-bold mb-6">Need Help with Returns?</h2>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to help with any return questions or concerns.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-heading font-bold mb-2">Email</h4>
                <p className="text-sm text-muted-foreground">returns@ashafoods.com</p>
              </div>
              <div>
                <h4 className="font-heading font-bold mb-2">Phone</h4>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="font-heading font-bold mb-2">Hours</h4>
                <p className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 6 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Returns;
