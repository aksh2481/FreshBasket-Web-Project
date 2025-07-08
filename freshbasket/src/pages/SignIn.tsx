
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import { toast } from "sonner";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to an authentication service
    if (isSignIn) {
      // Mock sign in success
      toast.success("Signed in successfully!");
      navigate("/");
    } else {
      // Mock sign up success
      toast.success("Account created successfully!");
      setIsSignIn(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-grocery-primary mb-2">
              {isSignIn ? "Sign In" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {isSignIn
                ? "Welcome back to FreshBasket!"
                : "Join FreshBasket for fresh groceries delivered to your door"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isSignIn && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    placeholder="John Doe"
                    required={!isSignIn}
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="you@example.com"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <Button type="submit" className="w-full bg-grocery-primary hover:bg-grocery-dark">
              {isSignIn ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsSignIn(!isSignIn)}
                className="ml-1 text-grocery-primary hover:underline font-medium"
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
