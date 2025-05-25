// src/components/ItemList.jsx
import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <List
      dataSource={products}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </List.Item>
      )}
    />
  );
};

export default ItemList;