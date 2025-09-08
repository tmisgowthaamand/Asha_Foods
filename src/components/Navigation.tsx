import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/CartContext";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import CartSidebar from "@/components/CartSidebar";
import SearchResults from "@/components/SearchResults";
import { Link, useLocation } from "react-router-dom";
import heroPickle from "@/assets/hero-pickle.jpg";

const Navigation = () => {
  const { cartCount } = useCartContext();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const allProducts = [
    {
      id: 1,
      name: "Traditional Mango Pickle",
      price: "₹299",
      image: heroPickle,
      label: "New" as const,
      category: "pickles",
      description: "Authentic Tamil style mango pickle with traditional spices"
    },
    {
      id: 2,
      name: "Coconut Thuvaiyal",
      price: "₹199",
      image: heroPickle,
      label: "Spicy" as const,
      category: "thuvaiyal",
      description: "Fresh coconut chutney with green chilies and curry leaves"
    },
    {
      id: 3,
      name: "Tomato Gojju",
      price: "₹179",
      image: heroPickle,
      category: "chutneys",
      description: "Tangy tomato chutney perfect with rice and dosa"
    },
    {
      id: 4,
      name: "Mixed Vegetable Pickle",
      price: "₹249",
      image: heroPickle,
      label: "Family Pack" as const,
      category: "pickles",
      description: "Assorted vegetables pickled in aromatic spices"
    },
    {
      id: 5,
      name: "Curry Leaf Powder",
      price: "₹149",
      image: heroPickle,
      category: "powders",
      description: "Dried curry leaves ground with spices for rice mixing"
    }
  ];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(false);
      if (location.pathname !== '/products') {
        window.location.href = '/products';
      }
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(true); // Always show results when typing or focused
  };

  const handleSearchFocus = () => {
    setShowSearchResults(true); // Show default products when focused
  };

  // Default products to show when search is empty
  const defaultProducts = allProducts.slice(0, 3); // Show first 3 products as default

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-primary">
              Asha Foods
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors font-medium ${
                isActive('/products') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/recipes" 
              className={`transition-colors font-medium ${
                isActive('/recipes') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Recipes
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${
                isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right side - Search and Cart */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-border p-2">
            <form onSubmit={handleSearch} className="max-w-sm mx-auto relative">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={handleSearchFocus}
                  className="pr-10 h-9 text-sm"
                  autoFocus
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Search Results Dropdown */}
              {showSearchResults && (
                <SearchResults 
                  products={searchQuery.trim() ? searchResults : defaultProducts}
                  searchQuery={searchQuery}
                  onClose={() => setShowSearchResults(false)}
                />
              )}
            </form>
          </div>
        )}
      </div>
      
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navigation;