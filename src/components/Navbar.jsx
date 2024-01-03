import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'navbar-links-active' : 'navbar-links-link';
  };

  return (
    <>
      <div className="main--container">
        <nav className="navbar">
          <div className='navbar-links'>
            <Link to={'/'} className={isActive('/')}>Accueil</Link>
            <Link to={'/about'} className={isActive('/about')}>À propos</Link>
            <Link to={'/buy'} className={isActive('/buy')}>Acheter un Kiro</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
