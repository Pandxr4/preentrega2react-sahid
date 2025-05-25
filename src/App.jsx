import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      {/* El NavBar estará presente en todas las rutas */}
      <NavBar />
      <Routes>
        {/* Ruta para el catálogo general con mensaje de bienvenida */}
        <Route
          path="/"
          element={
            <ItemListContainer greeting="¡Bienvenido a Pandxra Nature, tu tienda dietética de confianza!" />
          }
        />
        {/* Ruta para ver productos por categoría */}
        <Route path="/category/:id" element={<ItemListContainer />} />
        {/* Ruta para ver el detalle de un artículo */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;