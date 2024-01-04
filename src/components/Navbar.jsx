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
            <Link to={'https://solana.com/fr'} className={isActive('https://solana.com/fr')}>Acheter un Kiro</Link>
          </div>
        </nav>
      </div>
      <div class="top-nav">
        <div className='top-nav-logo'>
          Kiro
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="menu">
          <li><Link to={'/'} className={isActive('/')}>Accueil</Link></li>
          <li><Link to={'/about'} className={isActive('/about')}>À propos</Link></li>
          <li><Link to={'https://solana.com/fr'} className={isActive('https://solana.com/fr')}>Acheter un Kiro</Link></li>
        </ul>
      </div>
    </>
  );
}
