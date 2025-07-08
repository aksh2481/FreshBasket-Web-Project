import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Plus, Minus, Trash2, Tag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

const Cart = () => {
  const {
    state,
    updateQuantity,
    removeFromCart,
    clearCart,
    toggleCart,
    totalItems,
    totalPrice,
  } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");

  const { isOpen, items } = state;

  const validCoupons = {
    "FRESH30": { discount: 0.30, minOrder: 1500, maxDiscount: 2500, expiry: "2025-12-31" },
    "BAKERY3": { discount: 0.25, minOrder: 1000, maxDiscount: 1500, expiry: "2025-12-25" },
    "DAIRY15": { discount: 0.15, minOrder: 750, maxDiscount: 1000, expiry: "2025-12-20" },
    "FREEDEL": { discount: 0, minOrder: 2500, maxDiscount: 500, expiry: "2025-12-31" },
    "WELCOME10": { discount: 0.10, minOrder: 1000, maxDiscount: 750, expiry: "2025-12-31" },
    "HOLIDAY25": { discount: 0.25, minOrder: 2000, maxDiscount: 5000, expiry: "2025-12-31" }
  };

  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase();
    const coupon = validCoupons[code];

    if (!coupon) {
      toast.error("Invalid coupon code");
      return;
    }

    // Check expiry date
    const today = new Date();
    const expiryDate = new Date(coupon.expiry);
    if (today > expiryDate) {
      toast.error("This coupon has expired");
      return;
    }

    // Check minimum order amount
    if (totalPrice < coupon.minOrder) {
      toast.error(`Minimum order amount of ₹${coupon.minOrder} required for this coupon`);
      return;
    }

    let calculatedDiscount = 0;
    if (code === "FREEDEL") {
      calculatedDiscount = 199; // Standard delivery fee
    } else {
      calculatedDiscount = totalPrice * coupon.discount;
      // Apply maximum discount limit
      if (calculatedDiscount > coupon.maxDiscount) {
        calculatedDiscount = coupon.maxDiscount;
      }
    }

    setDiscount(calculatedDiscount);
    setAppliedCoupon(code);
    toast.success("Coupon code applied successfully!");
  };

  const handleRemoveCoupon = () => {
    setDiscount(0);
    setAppliedCoupon("");
    setCouponCode("");
    toast.success("Coupon code removed");
  };

  const handleCheckout = () => {
    toggleCart();
    navigate("/checkout");
  };

  const deliveryFee = 199;
  const tax = totalPrice * 0.05;
  const finalTotal = totalPrice + deliveryFee + tax - discount;

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="flex flex-col w-full max-w-md sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Your Cart ({totalItems} items)
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-grow py-8">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-gray-500 text-center mb-6">
              Add some products to your cart and they'll appear here.
            </p>
            <Button onClick={toggleCart}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-grow mt-6 -mx-6 px-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.unit}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7 rounded-full"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-5 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            className="h-7 w-7 rounded-full bg-grocery-primary hover:bg-grocery-dark"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <p className="font-medium">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="mt-6 space-y-4">
              <Separator />
              
              {/* Coupon Section */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Have a coupon?</span>
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={!!appliedCoupon}
                  />
                  {appliedCoupon ? (
                    <Button
                      variant="outline"
                      onClick={handleRemoveCoupon}
                      className="whitespace-nowrap"
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button
                      onClick={handleApplyCoupon}
                      className="whitespace-nowrap bg-grocery-primary hover:bg-grocery-dark"
                    >
                      Apply
                    </Button>
                  )}
                </div>
                {appliedCoupon && (
                  <p className="text-sm text-green-600">
                    Coupon "{appliedCoupon}" applied
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Delivery Fee</span>
                  <span className="font-medium">₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tax (5%)</span>
                  <span className="font-medium">
                    ₹{tax.toFixed(2)}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span className="text-sm">Discount</span>
                    <span className="text-sm">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <Separator className="my-2" />
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    ₹{finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Button 
                  className="w-full bg-grocery-primary hover:bg-grocery-dark"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
