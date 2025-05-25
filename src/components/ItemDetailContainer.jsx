// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const { Paragraph } = Typography;

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id,
            name: `Producto ${id}`,
            description: `Descripción del producto ${id}`,
          });
        }, 1000);
      });
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        {product ? <ItemDetail product={product} /> : <Paragraph>Cargando detalle del producto...</Paragraph>}
      </Card>
    </div>
  );
};

export default ItemDetailContainer;