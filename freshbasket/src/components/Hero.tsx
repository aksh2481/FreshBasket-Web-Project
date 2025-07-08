
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-grocery-light to-white py-16 md:py-24">
      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Fresh Groceries Delivered to Your Doorstep
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Shop fresh produce, dairy, bakery items and more with fast delivery in as little as 30 minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-grocery-primary hover:bg-grocery-dark text-white px-6"
              onClick={() => navigate("/shop")}
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-grocery-primary text-grocery-primary hover:bg-grocery-primary/10"
              onClick={() => navigate("/deals")}
            >
              View Deals
            </Button>
          </div>
          <div className="flex items-center mt-12 gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-grocery-dark">30min</span>
              <span className="text-sm text-gray-600">Fast Delivery</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-grocery-dark">5k+</span>
              <span className="text-sm text-gray-600">Products</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-grocery-dark">100%</span>
              <span className="text-sm text-gray-600">Fresh Items</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop"
              alt="Fresh groceries"
              className="w-full object-cover h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-[180px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-3 w-3 bg-grocery-primary rounded-full"></div>
              <span className="text-sm font-medium">Now Delivering</span>
            </div>
            <p className="text-xs text-gray-600">Fresh produce from local farmers</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-grocery-accent rounded-full h-20 w-20 flex items-center justify-center text-white font-bold shadow-lg rotate-12">
            <div className="text-center">
              <div className="text-sm">UP TO</div>
              <div className="text-xl">30% OFF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
