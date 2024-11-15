import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo CL" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/informacoes-do-evento">Informações do Evento</Link></li>
          <li><Link to="/dicas-dos-noivos">Dicas dos Noivos</Link></li>
          <li><Link to="/confirmacao">Confirmação</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
