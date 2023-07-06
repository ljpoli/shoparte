import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);
    const textStyle = {
      color: "#fd7e14",
      textDecoration: "none",
    };

  return (
    

          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link className="menu-link" to="/carrito" style={textStyle}>
        <i className="bi bi-cart" style={textStyle}></i>
            <span className="numerito" style={textStyle}>{cantidadEnCarrito()}</span>
        </Link>
        </li>
        </ul>
    
  )
}

export default CartWidget