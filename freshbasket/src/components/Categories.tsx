
import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
          <Link
            to="/shop"
            className="text-grocery-primary hover:text-grocery-dark flex items-center gap-1"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="category-card group"
            >
              <div
                className={cn(
                  "h-40 rounded-lg overflow-hidden relative",
                  category.color
                )}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-medium text-sm md:text-base">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
