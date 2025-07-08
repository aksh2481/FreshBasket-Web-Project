import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  User,
  Home,
  ShoppingBag,
  Tag,
  Phone,
  LogOut,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Cart from "./Cart";

const Header = () => {
  const { totalItems, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<{ name: string; isAuthenticated: boolean } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth");
  };

  const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Shop", icon: ShoppingBag, href: "/shop" },
    { label: "Deals", icon: Tag, href: "/deals" },
    { label: "Contact", icon: Phone, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-grocery-primary" />
            <span className="text-xl font-bold text-grocery-primary">
              FreshBasket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center text-gray-600 hover:text-grocery-primary transition-colors"
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <form
              onSubmit={handleSearch}
              className="relative hidden md:flex items-center"
            >
              <Input
                type="search"
                placeholder="Search products..."
                className="w-72 pl-10 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </form>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-2">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 w-4" />
          </form>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden z-40",
            isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          )}
        >
          <nav className="container px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center text-gray-600 hover:text-grocery-primary px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <Cart />
    </header>
  );
};

export default Header;
