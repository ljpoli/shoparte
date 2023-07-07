import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  const logoStyle = {
    color: '#d63384',
  };

  const textStyle = {
    color: '#fd7e14',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={logoStyle}>
          <h1>ShopArte</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={textStyle}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto" style={textStyle}>
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros" style={textStyle}>
                Nosotros
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={textStyle}>
                Cuadros
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/cuadros/Arte-Pop" style={textStyle}>
                    Arte-Pop
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cuadros/Surrealismo" style={textStyle}>
                    Surrealismo
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cuadros/Impresionismo" style={textStyle}>
                    Impresionismo
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
