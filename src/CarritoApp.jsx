import { Navigate, Route, Routes } from "react-router-dom";
import NavarComponents from "./components/NavarComponents";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProductProvider from "./contex/ProductProvider";
import CartProvider from "./contex/CartProvider"


const CarritoApp = () => {
  return (
   <ProductProvider>
    <CartProvider>
      <NavarComponents />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/carrito" element={<ShoppingCartPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
    </div>

      </CartProvider>
      </ProductProvider>
    
  );
};

export default CarritoApp;

