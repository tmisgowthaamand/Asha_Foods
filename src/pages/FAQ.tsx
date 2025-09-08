import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Minus, HelpCircle, ShoppingCart, Truck, RotateCcw, CreditCard, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "Orders & Shopping",
      icon: ShoppingCart,
      faqs: [
        {
          question: "How do I place an order?",
          answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay using credit/debit cards or choose cash on delivery for Indian orders."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "You can cancel your order within 2 hours of placing it. For modifications, please contact our customer service team immediately at orders@ashafoods.com."
        },
        {
          question: "What is the minimum order value?",
          answer: "There's no minimum order value. However, orders above ₹500 qualify for free shipping within India."
        },
        {
          question: "Do you offer bulk discounts?",
          answer: "Yes! We offer special pricing for bulk orders above ₹5000. Contact us at bulk@ashafoods.com for custom quotes."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      icon: Truck,
      faqs: [
        {
          question: "What are your delivery times?",
          answer: "Domestic (India): 3-5 business days. International (G20 countries): 7-14 business days. Express delivery available in major Indian cities."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to all G20 countries including USA, UK, Canada, Australia, Germany, France, Japan, and more."
        },
        {
          question: "How much does shipping cost?",
          answer: "Free shipping on orders above ₹500 within India. Below ₹500, shipping costs ₹50. International shipping rates are calculated at checkout."
        },
        {
          question: "Can I track my order?",
          answer: "Yes! You'll receive a tracking number via email once your order is dispatched. You can track your package in real-time."
        }
      ]
    },
    {
      title: "Returns & Refunds",
      icon: RotateCcw,
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 7-day return policy for unopened products in original packaging. Damaged or defective items can be returned regardless of opening."
        },
        {
          question: "How do I return an item?",
          answer: "Contact us at returns@ashafoods.com with your order number. We'll provide a prepaid return label and guide you through the process."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 3-5 business days after we receive the returned item. The amount will be credited to your original payment method."
        },
        {
          question: "Can I exchange products?",
          answer: "Yes, you can exchange products for different variants or sizes within 7 days. We cover return shipping for defective items."
        }
      ]
    },
    {
      title: "Payment & Pricing",
      icon: CreditCard,
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery (COD) for Indian orders. International orders require card payment."
        },
        {
          question: "Is it safe to pay online?",
          answer: "Absolutely! We use industry-standard SSL encryption and secure payment gateways to protect your financial information."
        },
        {
          question: "Why is GST added to my order?",
          answer: "GST (18%) is applicable on all orders shipped within India as per Indian tax regulations. International orders are tax-free from our end."
        },
        {
          question: "Do you offer EMI options?",
          answer: "Yes, EMI options are available for orders above ₹3000 through select credit cards and digital payment platforms."
        }
      ]
    },
    {
      title: "Products & Quality",
      icon: HelpCircle,
      faqs: [
        {
          question: "Are your products authentic?",
          answer: "Yes! All our products are made using traditional Tamil recipes passed down through generations since 1952, with authentic ingredients and methods."
        },
        {
          question: "How long do products stay fresh?",
          answer: "Our pickles and chutneys have a shelf life of 12-18 months when stored properly. Each product has a best-before date printed on the packaging."
        },
        {
          question: "Are your products preservative-free?",
          answer: "We use minimal natural preservatives like salt and oil. No artificial colors, flavors, or chemical preservatives are added to our products."
        },
        {
          question: "Do you have vegan options?",
          answer: "Most of our products are naturally vegan, made with plant-based ingredients. Check individual product descriptions for detailed ingredient lists."
        }
      ]
    },
    {
      title: "Account & Support",
      icon: Users,
      faqs: [
        {
          question: "Do I need to create an account to order?",
          answer: "No, you can place orders as a guest. However, creating an account helps you track orders, save addresses, and get exclusive offers."
        },
        {
          question: "How can I contact customer support?",
          answer: "Email us at support@ashafoods.com, call +91 98765 43210, or use our contact form. We're available Mon-Sat, 9 AM - 6 PM IST."
        },
        {
          question: "Do you have a loyalty program?",
          answer: "Yes! Join our Asha Family program to earn points on every purchase, get exclusive discounts, and early access to new products."
        },
        {
          question: "Can I get product samples?",
          answer: "We offer sample packs for first-time customers. Contact us to learn about our 'Taste Before You Buy' program."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our products, orders, shipping, 
              and more. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <div key={faqIndex} className="bg-card rounded-xl shadow-soft overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                      >
                        <h3 className="font-heading font-bold text-lg pr-4">{faq.question}</h3>
                        {isOpen ? (
                          <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-border pt-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our customer support team is here to help you with any questions or concerns. 
              We're committed to providing you with the best possible experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact')} variant="heritage" size="lg">
                Contact Support
              </Button>
              <Button 
                onClick={() => window.open('mailto:support@ashafoods.com', '_blank')}
                variant="outline" 
                size="lg"
              >
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
