import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { useParams } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulamos una llamada asíncrona para obtener el detalle del producto
    const fetchProduct = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          // En un escenario real aquí harías una consulta al backend
          resolve({ id, name: `Producto ${id}`, description: `Descripción del producto ${id}` });
        }, 1000);
      });
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        {product ? (
          <>
            <Title level={2}>{product.name}</Title>
            <Paragraph>{product.description}</Paragraph>
          </>
        ) : (
          <Paragraph>Cargando detalle del producto...</Paragraph>
        )}
      </Card>
    </div>
  );
};

export default ItemDetailContainer;