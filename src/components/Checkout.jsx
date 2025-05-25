// src/components/Checkout.jsx
import React, { useContext } from "react";
import { Card, Button, Typography } from "antd";
import { CartContext } from "src/context/CartContext";

const { Title, Paragraph } = Typography;

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Aquí podrías integrar procesos de pago o notificaciones, según lo requieras.
    alert(`Compra realizada: ${JSON.stringify(cart)}`);
    clearCart();
  };

  return (
    <Card style={{ margin: "20px" }}>
      <Title level={2}>Checkout</Title>
      {cart.length === 0 ? (
        <Paragraph>No hay artículos en el carrito</Paragraph>
      ) : (
        <>
          <Paragraph>Resumen de la compra:</Paragraph>
          {cart.map((item) => (
            <Paragraph key={item.id}>
              {item.name} – Cantidad: {item.quantity}
            </Paragraph>
          ))}
          <Button type="primary" onClick={handleCheckout}>
            Finalizar Compra
          </Button>
        </>
      )}
    </Card>
  );
};

export default Checkout;