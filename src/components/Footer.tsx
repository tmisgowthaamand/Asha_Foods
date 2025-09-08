import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-off-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-turmeric">
              Asha Foods
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Made with Love in Tamil Nadu
            </p>
            <p className="text-sm text-gray-400">
              Bringing authentic South Indian flavors to your table with traditional 
              recipes passed down through generations since 1952.
            </p>
          </div>

          {/* Quick Shop Links */}
          <div className="space-y-6">
            <h4 
              className="text-lg font-heading font-semibold text-turmeric cursor-pointer hover:text-turmeric/80 transition-colors"
              onClick={() => window.location.href = '/products'}
            >
              Quick Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/products/pickles" className="text-gray-300 hover:text-turmeric transition-colors">Pickles</Link></li>
              <li><Link to="/products/thuvaiyal" className="text-gray-300 hover:text-turmeric transition-colors">Thuvaiyal</Link></li>
              <li><Link to="/products/combo-packs" className="text-gray-300 hover:text-turmeric transition-colors">Combo Packs</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-6">
            <h4 
              className="text-lg font-heading font-semibold text-turmeric cursor-pointer hover:text-turmeric/80 transition-colors"
              onClick={() => window.location.href = '/customer-care'}
            >
              Customer Care
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-turmeric transition-colors">About Us</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-turmeric transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-turmeric transition-colors">Return Policy</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-turmeric transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-turmeric transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 
              className="text-lg font-heading font-semibold text-turmeric cursor-pointer hover:text-turmeric/80 transition-colors"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-turmeric" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-turmeric" />
                <span className="text-gray-300">hello@ashafoods.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-turmeric" />
                <span className="text-gray-300">Chennai, Tamil Nadu</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com/ashafoods" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-turmeric transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/ashafoods" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-turmeric transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/ashafoods" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-turmeric transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Asha Foods. All rights reserved. Made with ❤️ in Tamil Nadu.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Secure Payment</span>
              <span>•</span>
              <span>Fast Delivery</span>
              <span>•</span>
              <span>100% Authentic</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;