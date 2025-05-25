// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import { CartProvider } from "src/context/CartContext";
import "./App.css";

const App = () => {
  return (
    // Proveemos el contexto del carrito a toda la aplicación
    <CartProvider>
      <BrowserRouter>
        {/* NavBar estará presente en todas las rutas */}
        <NavBar />
        <Routes>
          {/* Ruta para el catálogo general */}
          <Route
            path="/"
            element={
              <ItemListContainer greeting="¡Bienvenido a Pandxra Nature, tu tienda dietética de confianza!" />
            }
          />
          {/* Ruta para ver productos filtrados por categoría */}
          <Route path="/category/:id" element={<ItemListContainer />} />
          {/* Ruta para ver el detalle de un producto */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          {/* Ruta para el checkout */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;