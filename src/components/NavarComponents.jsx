import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contex/CartContext";
import "../styles/Navbar.css";

const NavarComponents = () => {
  const { shoppingList } = useContext(CartContext);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="navbar-logo">
          COMPRALINK
        </NavLink>
      </div>

      <nav className="navbar-center">
        <NavLink to="/" className="navbar-link">
          Inicio
        </NavLink>
        <NavLink to="/servicios" className="navbar-link">
          Servicios
        </NavLink>
      </nav>

      <div className="navbar-right">
        <NavLink to="/carrito" className="cart-icon">
          <Badge badgeContent={shoppingList.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </NavLink>
      </div>
    </header>
  );
};

export default NavarComponents;


