// src/components/ItemDetail.jsx
import React, { useState, useContext } from "react";
import { Card, Typography } from "antd";
import ItemQuantitySelector from "./ItemQuantitySelector";
import AddItemButton from "./AddItemButton";
import Description from "./Description";
import { CartContext } from "src/context/CartContext";

const { Title } = Typography;

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem(product, quantity);
  };

  return (
    <Card style={{ margin: "20px" }}>
      <Title level={2}>{product.name}</Title>
      <Description text={product.description} />
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddItemButton onAdd={handleAdd} />
    </Card>
  );
};

export default ItemDetail;