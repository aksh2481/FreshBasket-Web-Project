
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DealsPage = () => {
  const navigate = useNavigate();
  
  const deals = [
    {
      id: 1,
      title: "30% Off Fresh Produce",
      description: "Get 30% off on all fruits and vegetables this week!",
      code: "FRESH30",
      expiryDate: "2023-12-31",
      bgColor: "bg-grocery-primary/10"
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free on Bakery",
      description: "Purchase any two bakery items and get one free!",
      code: "BAKERY3",
      expiryDate: "2023-12-25",
      bgColor: "bg-grocery-accent/10"
    },
    {
      id: 3,
      title: "15% Off Dairy Products",
      description: "Save 15% on milk, cheese, and yogurt!",
      code: "DAIRY15",
      expiryDate: "2023-12-20",
      bgColor: "bg-blue-100"
    },
    {
      id: 4,
      title: "Free Delivery",
      description: "Orders above $50 eligible for free delivery!",
      code: "FREEDEL",
      expiryDate: "2023-12-31",
      bgColor: "bg-purple-100"
    },
    {
      id: 5,
      title: "10% Off First Order",
      description: "New customers get 10% off their first order!",
      code: "WELCOME10",
      expiryDate: "2023-12-31",
      bgColor: "bg-yellow-100"
    }
  ];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`Coupon code ${code} copied to clipboard!`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center">
            <Tag className="mr-2 h-5 w-5 text-grocery-primary" />
            Special Deals & Offers
          </h1>
        </div>
        
        {/* Featured Deal Banner */}
        <div className="rounded-xl overflow-hidden relative h-64 bg-gradient-to-r from-grocery-primary to-grocery-primary/60 text-white mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
              <span className="text-sm font-medium bg-white text-grocery-primary px-3 py-1 rounded-full w-fit mb-3">Limited Time</span>
              <h2 className="text-3xl font-bold mb-2">Holiday Special: 25% Off Everything</h2>
              <p className="mb-4 text-white/90">
                Use code <span className="font-bold">HOLIDAY25</span> at checkout
              </p>
              <div className="flex space-x-3">
                <Button 
                  onClick={() => navigate("/shop")} 
                  variant="secondary"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                  onClick={() => handleCopyCode("HOLIDAY25")}
                >
                  Copy Code
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* All Deals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div 
              key={deal.id} 
              className={`${deal.bgColor} p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
            >
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              <p className="text-gray-700 mb-3">{deal.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Code:</span>
                  <span className="ml-2 font-medium bg-white px-2 py-1 rounded border">{deal.code}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopyCode(deal.code)}
                >
                  Copy
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 mt-3">
                Expires: {deal.expiryDate}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <Cart />
    </div>
  );
};

export default DealsPage;
