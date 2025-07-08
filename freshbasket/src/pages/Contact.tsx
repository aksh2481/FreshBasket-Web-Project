
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-grocery-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-grocery-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="font-medium">9321793015</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-grocery-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-grocery-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">support@freshbasket.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-grocery-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-grocery-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">123 Grocery Street, Fresh City, FC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-grocery-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-grocery-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <p className="font-medium">Mon-Sat: 8:00 AM - 8:00 PM</p>
                  <p className="font-medium">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-grocery-primary focus:border-grocery-primary"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-grocery-primary focus:border-grocery-primary"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-grocery-primary focus:border-grocery-primary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-grocery-primary hover:bg-grocery-dark text-white py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">What are your delivery hours?</h3>
              <p className="text-gray-600">We deliver from 9:00 AM to 9:00 PM, seven days a week.</p>
            </div>
            
            <div>
              <h3 className="font-medium">How do I track my order?</h3>
              <p className="text-gray-600">You can track your order in real-time through our mobile app or website after placing an order.</p>
            </div>
            
            <div>
              <h3 className="font-medium">What is your return policy?</h3>
              <p className="text-gray-600">If you're not satisfied with any product, you can return it within 24 hours for a full refund or replacement.</p>
            </div>
            
            <div>
              <h3 className="font-medium">Is there a minimum order value?</h3>
              <p className="text-gray-600">Yes, we have a minimum order value of $20 for free delivery. Orders below $20 will incur a delivery fee of $3.99.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Cart />
    </div>
  );
};

export default Contact;
