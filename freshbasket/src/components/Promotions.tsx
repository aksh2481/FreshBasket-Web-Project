
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Promotions = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Promotion Card */}
          <div className="rounded-xl overflow-hidden relative h-64 bg-grocery-primary/10">
            <div className="absolute inset-0 flex">
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Fresh Fruits & Vegetables</h3>
                <p className="text-gray-700 mb-4">
                  Get up to 30% off on your first purchase
                </p>
                <Button 
                  className="bg-grocery-primary hover:bg-grocery-dark w-fit"
                  onClick={() => navigate("/category/fruits-vegetables")}
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1170&auto=format&fit=crop"
                  alt="Fresh Fruits & Vegetables"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Promotion Card */}
          <div className="rounded-xl overflow-hidden relative h-64 bg-grocery-accent/10">
            <div className="absolute inset-0 flex">
              <div className="flex-1 relative order-2">
                <img
                  src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1170&auto=format&fit=crop"
                  alt="Fresh Bakery Items"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center order-1">
                <h3 className="text-2xl font-bold mb-2">Fresh Bakery Items</h3>
                <p className="text-gray-700 mb-4">
                  Buy 2 and get 1 free on all bakery items
                </p>
                <Button 
                  className="bg-grocery-accent hover:bg-grocery-accent/80 w-fit"
                  onClick={() => navigate("/category/bakery")}
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
