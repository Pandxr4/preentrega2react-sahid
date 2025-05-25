// src/components/AddItemButton.jsx
import React from "react";
import { Button } from "antd";

const AddItemButton = ({ onAdd }) => {
  return <Button type="primary" onClick={onAdd}>Agregar al Carrito</Button>;
};

export default AddItemButton;