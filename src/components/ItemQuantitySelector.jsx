// src/components/ItemQuantitySelector.jsx
import React from "react";
import { InputNumber } from "antd";

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <InputNumber min={1} value={quantity} onChange={setQuantity} />
    </div>
  );
};

export default ItemQuantitySelector;