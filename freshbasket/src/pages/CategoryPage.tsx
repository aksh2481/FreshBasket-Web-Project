
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getProductsByCategory, categories } from "@/data/products";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  
  // Convert hyphenated URL format back to regular category name format
  const formattedCategoryName = categoryName ? categoryName.replace(/-/g, ' ') : '';
  
  // Find the matching category (case insensitive)
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === formattedCategoryName.toLowerCase()
  );
  
  // Get the original casing of the category name for product filtering
  const originalCategoryName = category ? category.name : '';
  
  // Get products for this category using the original category name casing
  const products = getProductsByCategory(originalCategoryName);
  
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
        
        {category ? (
          <>
            <div className={`${category.color} p-6 rounded-lg mb-6 flex flex-col md:flex-row items-center justify-between`}>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{category.name}</h1>
                <p className="text-gray-700">
                  Explore our selection of {category.name.toLowerCase()}
                </p>
              </div>
              <div className="w-32 h-32 overflow-hidden rounded-full mt-4 md:mt-0">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No products found in this category.</p>
                <Button 
                  className="mt-4 bg-grocery-primary hover:bg-grocery-dark"
                  onClick={() => navigate("/shop")}
                >
                  Browse All Products
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-10">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-500 mb-6">The category you're looking for doesn't exist.</p>
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

export default CategoryPage;
