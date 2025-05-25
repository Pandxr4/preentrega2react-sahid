// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const { Title, Paragraph } = Typography;

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams(); // id representa la categoría, si se pasa en la URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // Simulación de una llamada asíncrona
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
  
      if (id) {
        setProducts(data.filter((product) => product.category === id));
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <Title level={2}>{id ? `Productos en la categoría: ${id}` : greeting}</Title>
        {products.length > 0 ? (
          <ItemList products={products} />
        ) : (
          <Paragraph>Cargando productos...</Paragraph>
        )}
      </Card>
    </div>
  );
};

export default ItemListContainer;