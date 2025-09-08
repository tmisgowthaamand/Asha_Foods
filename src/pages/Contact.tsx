import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our products or need help with your order? 
              We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-section-heading text-foreground">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button type="submit" variant="heritage" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-section-heading text-foreground">
                  Contact <span className="text-primary">Information</span>
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We're always happy to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-1">+91 9876543210</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-1">hello@ashafoods.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Address</h3>
                    <p className="text-muted-foreground mb-1">123 Heritage Street</p>
                    <p className="text-muted-foreground mb-1">T. Nagar, Chennai</p>
                    <p className="text-muted-foreground">Tamil Nadu 600017</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-section-heading text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start space-x-3 mb-4">
                <MessageCircle className="h-5 w-5 text-primary mt-1" />
                <h3 className="font-heading font-bold">How long do your products last?</h3>
              </div>
              <p className="text-muted-foreground">
                Our pickles and chutneys have a shelf life of 12 months when stored properly 
                in a cool, dry place. Once opened, consume within 3 months.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start space-x-3 mb-4">
                <MessageCircle className="h-5 w-5 text-primary mt-1" />
                <h3 className="font-heading font-bold">Do you ship across India?</h3>
              </div>
              <p className="text-muted-foreground">
                Yes! We ship to all major cities across India. Delivery typically takes 
                3-7 business days depending on your location.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start space-x-3 mb-4">
                <MessageCircle className="h-5 w-5 text-primary mt-1" />
                <h3 className="font-heading font-bold">Are your products preservative-free?</h3>
              </div>
              <p className="text-muted-foreground">
                Absolutely! We use only natural ingredients and traditional preservation 
                methods. No artificial preservatives, colors, or flavors.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start space-x-3 mb-4">
                <MessageCircle className="h-5 w-5 text-primary mt-1" />
                <h3 className="font-heading font-bold">Can I return products if not satisfied?</h3>
              </div>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day satisfaction guarantee. If you're not completely 
                happy with your purchase, contact us for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
