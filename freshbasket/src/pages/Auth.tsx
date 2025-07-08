import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful login/signup
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify({
        email: formData.email,
        name: formData.name || formData.email.split("@")[0],
        phone: formData.phone,
        isAuthenticated: true,
      }));

      toast.success(isLogin ? "Login successful!" : "Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(isLogin ? "Login failed. Please try again." : "Sign up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to FreshBasket</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account or create a new one
          </p>
        </div>

        <div className="flex border-b">
          <button
            className={`flex-1 py-2 text-center ${
              isLogin
                ? "border-b-2 border-grocery-primary font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              !isLogin
                ? "border-b-2 border-grocery-primary font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required={!isLogin}
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required={!isLogin}
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="+91 1234567890"
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-[#65A30D] hover:bg-[#4C7B0A] text-white py-3 rounded-md"
            disabled={isLoading}
          >
            {isLoading
              ? isLogin
                ? "Signing in..."
                : "Creating account..."
              : isLogin
              ? "Sign in"
              : "Sign up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth; 