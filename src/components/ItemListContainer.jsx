import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { useParams, Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams(); // id representa la categoría cuando esté presente
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulamos una llamada asíncrona con un retraso para obtener productos
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
      if (id) {
        // Si se especifica un id, filtramos los productos por ese criterio
        setProducts(data.filter((product) => product.category === id));
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, [id]); // Se vuelve a ejecutar el efecto cada vez que 'id' cambie

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        {/* Si existe id en la URL, mostramos el título específico para la categoría */}
        <Title level={2}>{id ? `Productos en la categoría: ${id}` : greeting}</Title>
        {products.length > 0 ? (
          products.map((product) => (
            <Paragraph key={product.id}>
              {/* Al hacer click, se navega a /item/:id */}
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