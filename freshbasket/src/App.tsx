import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Deals from "@/pages/Deals";
import Contact from "@/pages/Contact";
import Checkout from "@/pages/Checkout";
import Auth from "@/pages/Auth";
import ProtectedRoute from "@/components/ProtectedRoute";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/*"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <ProtectedRoute>
                          <Home />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/shop"
                      element={
                        <ProtectedRoute>
                          <Shop />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/deals"
                      element={
                        <ProtectedRoute>
                          <Deals />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/contact"
                      element={
                        <ProtectedRoute>
                          <Contact />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/checkout"
                      element={
                        <ProtectedRoute>
                          <Checkout />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
        <Toaster position="top-center" />
      </CartProvider>
    </Router>
  );
}

export default App;
