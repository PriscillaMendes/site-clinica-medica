import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../images/clinica/logo2.png';

function Header() {
  return (
    <div className="col-12 header-size">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src={logoImg} className="col-4" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">Galeria</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/endereco">Endereços</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/agendamento">Agendamentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
