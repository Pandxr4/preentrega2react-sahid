// src/components/CartWidget.jsx
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const CartWidget = () => {
  return (
    <div>
      <ShoppingCartOutlined style={{ fontSize: "24px" }} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;