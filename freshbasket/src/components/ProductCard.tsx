import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Product, useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart, state, updateQuantity } = useCart();
  
  const cartItem = state.items.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className={`product-card h-full flex flex-col bg-white border border-gray-200 ${featured ? 'shadow-md' : ''}`}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {featured && (
          <Badge className="absolute top-2 left-2 bg-grocery-accent">
            Featured
          </Badge>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <div className="mb-1">
          <span className="text-xs text-gray-500">{product.category}</span>
        </div>
        <h3 className="font-medium mb-1 line-clamp-2 flex-grow">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.unit}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">₹{product.price.toFixed(2)}</span>
          
          {quantity === 0 ? (
            <Button 
              size="sm" 
              onClick={() => addToCart(product)}
              className="bg-grocery-primary hover:bg-grocery-dark"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          ) : (
            <div className="flex items-center space-x-2">
              <Button 
                size="icon" 
                variant="outline" 
                className="h-8 w-8 rounded-full border-gray-300"
                onClick={() => updateQuantity(product.id, quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-4 text-center">{quantity}</span>
              <Button 
                size="icon" 
                className="h-8 w-8 rounded-full bg-grocery-primary hover:bg-grocery-dark"
                onClick={() => addToCart(product)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
