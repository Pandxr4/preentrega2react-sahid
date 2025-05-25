import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { useParams, Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ItemListContainer = ({ greeting }) => {
  // Extraemos "id" que representa la categoría, si está presente en la URL.
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de una llamada asíncrona para obtener productos.
    const fetchProducts = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          const sampleProducts = [
            { id: "1", name: "Producto 1", category: "almendras" },
            { id: "2", name: "Producto 2", category: "nueces" },
            { id: "3", name: "Producto 3", category: "lentejas" },
            { id: "4", name: "Producto 4", category: "arvejas" },
          ];
          resolve(sampleProducts);
        }, 1000);
      });
      
      // Si existe un parámetro "id" en la URL, se filtran los productos según la categoría.
      if (id) {
        setProducts(data.filter((product) => product.category === id));
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, [id]); // Se reejecuta el efecto cada vez que "id" cambia

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        {/* Se muestra un título que varía si estamos filtrando por categoría o no */}
        <Title level={2}>
          {id ? `Productos en la categoría: ${id}` : greeting}
        </Title>
        {products.length > 0 ? (
          products.map((product) => (
            <Paragraph key={product.id}>
              {/* Cada producto es un link que, al hacer click, navega a su detalle: /item/:id */}
              <Link to={`/item/${product.id}`}>{product.name}</Link>
            </Paragraph>
          ))
        ) : (
          <Paragraph>Cargando productos...</Paragraph>
        )}
      </Card>
    </div>
  );
};

export default ItemListContainer;