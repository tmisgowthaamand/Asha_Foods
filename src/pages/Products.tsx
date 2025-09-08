import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Eye, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import Footer from '@/components/Footer';
import { useCartContext } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import heroPickle from '@/assets/hero-pickle.jpg';

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFeaturedModal, setShowFeaturedModal] = useState(false);
  const { addToCart } = useCartContext();
  const { toast } = useToast();

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
      id: 4,
      name: "Mixed Vegetable Pickle",
      price: "₹249",
      image: heroPickle,
      label: "Family Pack" as const,
      category: "pickles",
      description: "Assorted vegetables pickled in aromatic spices"
    },
    {
      id: 7,
      name: "Sesame Oil Pickle",
      price: "₹229",
      image: heroPickle,
      label: "Premium" as const,
      category: "pickles",
      description: "Premium pickle made with cold-pressed sesame oil"
    },
    {
      id: 10,
      name: "Garlic Pickle",
      price: "₹199",
      image: heroPickle,
      label: "Spicy" as const,
      category: "pickles",
      description: "Spicy garlic pickle with traditional Tamil spices"
    },
    {
      id: 11,
      name: "Mint Thuvaiyal",
      price: "₹189",
      image: heroPickle,
      category: "thuvaiyal",
      description: "Fresh mint chutney with coconut and green chilies"
    },
    {
      id: 14,
      name: "Lime Pickle",
      price: "₹219",
      image: heroPickle,
      label: "Traditional" as const,
      category: "pickles",
      description: "Tangy lime pickle made with fresh lime and spices"
    },
    {
      id: 15,
      name: "Ginger Thuvaiyal",
      price: "₹169",
      image: heroPickle,
      label: "Spicy" as const,
      category: "thuvaiyal",
      description: "Spicy ginger chutney perfect for rice and idli"
    },
    {
      id: 16,
      name: "Pickle Combo Pack",
      price: "₹599",
      image: heroPickle,
      label: "Family Pack" as const,
      category: "combo-packs",
      description: "3 varieties of pickles - Mango, Mixed Vegetable, and Garlic"
    },
    {
      id: 17,
      name: "Thuvaiyal Trio",
      price: "₹499",
      image: heroPickle,
      label: "Premium" as const,
      category: "combo-packs",
      description: "Coconut, Mint, and Ginger thuvaiyal combo pack"
    },
    {
      id: 18,
      name: "Complete Meal Pack",
      price: "₹899",
      image: heroPickle,
      label: "Family Pack" as const,
      category: "combo-packs",
      description: "2 pickles, 2 thuvaiyal - complete meal companion"
    },
    {
      id: 19,
      name: "Starter Pack",
      price: "₹399",
      image: heroPickle,
      label: "New" as const,
      category: "combo-packs",
      description: "Perfect starter pack with 1 pickle and 1 thuvaiyal"
    },
    {
      id: 20,
      name: "Festival Special Pack",
      price: "₹1299",
      image: heroPickle,
      label: "Premium" as const,
      category: "combo-packs",
      description: "Festive combo with 3 pickles and 3 thuvaiyal varieties"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'pickles', name: 'Pickles' },
    { id: 'thuvaiyal', name: 'Thuvaiyal' },
    { id: 'combo-packs', name: 'Combo Packs' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    // First filter to only show pickles, thuvaiyal, and combo packs
    let filtered = allProducts.filter(product => 
      product.category === 'pickles' || product.category === 'thuvaiyal' || product.category === 'combo-packs'
    );

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => {
        const categoryName = product.category.toLowerCase().replace('-', ' ');
        return (
          product.name.toLowerCase().includes(query) ||
          categoryName.includes(query) ||
          product.description.toLowerCase().includes(query) ||
          // Additional search terms
          (product.category === 'pickles' && (query.includes('pickle') || query.includes('achar'))) ||
          (product.category === 'thuvaiyal' && (query.includes('thuvaiyal') || query.includes('chutney'))) ||
          (product.category === 'combo-packs' && (query.includes('combo') || query.includes('pack') || query.includes('bundle')))
        );
      });
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', ''));
        case 'price-high':
          return parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', ''));
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  // Featured product (first combo pack for highlighting)
  const featuredProduct = allProducts.find(p => p.category === 'combo-packs') || allProducts[0];

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
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our authentic South Indian pickles, thuvaiyal, and combo packs 
              made with love and heritage recipes passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "heritage" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-border rounded-md px-3 py-2 bg-background text-foreground"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-section bg-secondary">
        <div className="container mx-auto px-4">
          {/* Results Info */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredAndSortedProducts.length} of {allProducts.filter(p => p.category === 'pickles' || p.category === 'thuvaiyal' || p.category === 'combo-packs').length} products
              {selectedCategory !== 'all' && (
                <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
              )}
              {searchQuery && (
                <span> for "{searchQuery}"</span>
              )}
            </p>
          </div>

          {/* Featured Product Section */}
          {!searchQuery && selectedCategory === 'all' && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold">Featured Product</h2>
                <span className="text-sm text-muted-foreground">Handpicked for you</span>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/20 rounded-xl p-6 border border-primary/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-lg">
                      <img 
                        src={featuredProduct.image} 
                        alt={featuredProduct.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="heritage" className="bg-primary text-white">
                          Featured
                        </Badge>
                      </div>
                      {featuredProduct.label && (
                        <div className="absolute top-4 right-4">
                          <Badge 
                            variant={
                              featuredProduct.label === "Spicy" ? "spicy" : 
                              featuredProduct.label === "New" ? "new" : 
                              featuredProduct.label === "Traditional" ? "heritage" :
                              featuredProduct.label === "Premium" ? "heritage" :
                              "heritage"
                            }
                          >
                            {featuredProduct.label}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-heading font-bold mb-2">{featuredProduct.name}</h3>
                      <p className="text-muted-foreground capitalize mb-4">
                        {featuredProduct.category.replace('-', ' ')}
                      </p>
                      <p className="text-4xl font-heading font-bold text-primary mb-4">
                        {featuredProduct.price}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredProduct.description}
                    </p>
                    
                    <div className="flex space-x-4 pt-4">
                      <Button 
                        onClick={() => {
                          const cartItem = {
                            id: featuredProduct.id,
                            name: featuredProduct.name,
                            price: featuredProduct.price,
                            image: featuredProduct.image,
                            quantity: 1
                          };
                          addToCart(cartItem);
                          toast({
                            title: "Added to cart!",
                            description: `${featuredProduct.name} has been added to your cart.`,
                          });
                        }}
                        variant="heritage" 
                        size="lg"
                        className="flex-1"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button 
                        onClick={() => setShowFeaturedModal(true)}
                        variant="outline" 
                        size="lg"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Quick View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  label={product.label}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-heading font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="heritage" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Info */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-section-heading text-foreground">
              Product <span className="text-primary">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of traditional South Indian food products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🥒</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Pickles</h3>
              <p className="text-muted-foreground">
                Traditional Tamil pickles made with fresh vegetables, 
                aromatic spices, and cold-pressed oils.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🥥</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Thuvaiyal</h3>
              <p className="text-muted-foreground">
                Fresh coconut-based chutneys with herbs and spices, 
                perfect accompaniments for rice and tiffin items.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Spice Powders</h3>
              <p className="text-muted-foreground">
                Ground spice blends and leaf powders that add 
                authentic flavors to your everyday meals.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🍚</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Rice Mixes</h3>
              <p className="text-muted-foreground">
                Ready-to-use seasoning mixes for various rice 
                preparations like lemon rice, tamarind rice, and more.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🍅</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Chutneys</h3>
              <p className="text-muted-foreground">
                Tangy and flavorful chutneys made from tomatoes, 
                tamarind, and other fresh ingredients.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Combo Packs</h3>
              <p className="text-muted-foreground">
                Specially curated combination packs featuring 
                our most popular products at great value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
