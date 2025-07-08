
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";
import { products } from "@/data/products";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const navigate = useNavigate();
  
  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center mb-2">
            <Search className="mr-2 h-5 w-5 text-grocery-primary" />
            Search Results
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} results for "{query}"
          </p>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-6">No products found matching "{query}".</p>
            <Button 
              className="bg-grocery-primary hover:bg-grocery-dark"
              onClick={() => navigate("/shop")}
            >
              Browse All Products
            </Button>
          </div>
        )}
      </main>
      <Footer />
      <Cart />
    </div>
  );
};

export default SearchResults;
