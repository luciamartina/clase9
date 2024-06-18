
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(13, 59, 102)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: '#fff', fontSize: '26px' }}>Tiendita</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: '#fff', fontSize: '20px' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cargarProducto" style={{ color: '#fff', fontSize: '20px' }}>Cargar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
