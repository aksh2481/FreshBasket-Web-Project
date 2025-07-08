
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Promotions from "@/components/Promotions";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <Promotions />
        <FeaturedProducts />
      </main>
      <Footer />
      <Cart />
    </div>
  );
};

export default Index;
