import CartWidget from '../CartWidget/CartWidget';
import "./NavBarComponent.css";

const NavBarComponent = () => {
  
  return (
    
    <nav className="navbar">

      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/categorias">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <CartWidget/>
      </ul>
    </nav>
  );
}

export default NavBarComponent;