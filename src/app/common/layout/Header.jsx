import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../../../images/clinica/logo2.png';

const externalLinks = [
  { title: 'Login', to: '/Login' },
  { title: 'Galeria', to: '/galeria' },
  { title: 'Endereços', to: '/endereco' },
  { title: 'Agendamentos', to: '/agendamento' },
];

const internalLinks = [
  { title: 'Consultas', to: '/auth/consulta' },
  { title: 'Novo Funcionario', to: '/auth/cadastro-funcionario' },
  { title: 'Novo Paciente', to: '/auth/cadastro-paciente' },
];

// { title: 'Listar meus Agendamentos', to: '/agendamento' },
// { title: 'login', to: '/Login' },

function Header() {
  const navigate = useNavigate();
  const auth = window.localStorage.getItem('token');

  function handleLogout() {
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  // @TODO Verificar se o usuário logado é um medico
  const isDoctor = true;
  const links = auth ? internalLinks : externalLinks;

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
            {links.map((link) => (
              <li className="nav-item">
                <Link className="nav-link" to={link.to}>{link.title}</Link>
              </li>
            ))}
            {isDoctor && (
              <li className="nav-item">
                <Link className="nav-link" to="/auth/lista-agendamento">Listar Agendamentos</Link>
              </li>
            )}
            {auth && (
              <li className="nav-item">
                <button type="button" className="ml-5 btn btn-outline-light fadeIn fourth" onClick={() => handleLogout()}>Sair</button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
