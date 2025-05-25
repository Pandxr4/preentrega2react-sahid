// src/components/Brief.jsx
import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Brief = ({ orderDetails }) => {
  return (
    <Card style={{ margin: "20px" }}>
      <Title level={3}>Detalles de la Compra</Title>
      <Paragraph>{orderDetails}</Paragraph>
    </Card>
  );
};

export default Brief;