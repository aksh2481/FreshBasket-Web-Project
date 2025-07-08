
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-grocery-accent" />
              <span className="text-xl font-bold">FreshBasket</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your one-stop destination for fresh groceries, delivered to your doorstep within minutes.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</a>
              </li>
              <li>
                <a href="/categories" className="text-gray-400 hover:text-white transition-colors">Categories</a>
              </li>
              <li>
                <a href="/deals" className="text-gray-400 hover:text-white transition-colors">Deals & Offers</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/account" className="text-gray-400 hover:text-white transition-colors">My Account</a>
              </li>
              <li>
                <a href="/orders" className="text-gray-400 hover:text-white transition-colors">Order History</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Information</a>
              </li>
              <li>
                <a href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                type="email" 
                className="bg-gray-800 border-gray-700 focus:border-grocery-accent focus:ring-grocery-accent" 
              />
              <Button className="bg-grocery-accent hover:bg-grocery-accent/90">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FreshBasket. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
