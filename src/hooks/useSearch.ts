import { useState, useMemo } from 'react';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  label?: "New" | "Spicy" | "Family Pack";
  isHero?: boolean;
  category?: string;
  description?: string;
}

export const useSearch = (products: Product[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    
    const query = searchQuery.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return {
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    setIsSearchOpen,
    filteredProducts,
    clearSearch
  };
};
