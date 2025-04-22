import { Link } from "react-router-dom";
import { Menu } from "antd";
import CartWidget from "./CartWidget";
import "../styles.css";

const NavBar = () => {
  // Definimos el array de items, envolviendo cada label en un <Link>
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
      {/* Al hacer click en el brand, se redirige a "/" */}
      <span className="brand">
        <Link to="/">Pandxra Nature</Link>
      </span>
      <Menu mode="horizontal" items={items} />
      <CartWidget />
    </div>
  );
};

export default NavBar;