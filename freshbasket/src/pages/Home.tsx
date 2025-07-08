import React from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Promotions from "@/components/Promotions";

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Promotions />
    </div>
  );
};

export default Home; 