// src/components/Description.jsx
import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const Description = ({ text }) => {
  return <Paragraph>{text}</Paragraph>;
};

export default Description;