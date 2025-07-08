
import React from "react";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <a
            href="/products"
            className="text-grocery-primary hover:text-grocery-dark flex items-center gap-1"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
