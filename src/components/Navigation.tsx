import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-heading font-bold text-primary">
              Asha Foods
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-1">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-1">
              Products
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-1">
              About
            </Link>
            <Link to="/recipes" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-1">
              Recipes
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-1">
              Contact
            </Link>
          </div>

          {/* Right side - Search, Cart, Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 lg:w-64 pr-10 h-9 sm:h-10 text-sm"
                />
                <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative p-2 sm:p-3" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden p-2">
              <Menu className="h-5 w-5" />
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