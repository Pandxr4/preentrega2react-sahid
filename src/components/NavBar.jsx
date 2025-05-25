import { Link } from "react-router-dom";
import { Menu } from "antd";
import CartWidget from "./CartWidget";
import "../styles.css";

const NavBar = () => {
  // Array de items para el menú, que incluye enlaces para "Novedades" y
  // un grupo de categorías en "Productos" (divididas en "Frutos Secos" y "Legumbres").
  const items = [
    {
      label: <Link to="/">Novedades</Link>,
      key: "novedades",
    },
    {
      label: "Productos",
      key: "productos",
      children: [
        {
          type: "group",
          label: "Frutos Secos",
          children: [
            { label: <Link to="/category/almendras">Almendras</Link>, key: "almendras" },
            { label: <Link to="/category/nueces">Nueces</Link>, key: "nueces" },
          ],
        },
        {
          type: "group",
          label: "Legumbres",
          children: [
            { label: <Link to="/category/lentejas">Lentejas</Link>, key: "lentejas" },
            { label: <Link to="/category/arvejas">Arvejas</Link>, key: "arvejas" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="navBar">
      {/* Al hacer click en el brand se redirige a la ruta principal */}
      <span className="brand">
        <Link to="/">Pandxra Nature</Link>
      </span>
      {/* Menú de navegación utilizando Ant Design */}
      <Menu mode="horizontal" items={items} />
      {/* Widget del carrito */}
      <CartWidget />
    </div>
  );
};

export default NavBar;