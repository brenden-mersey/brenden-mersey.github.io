import React from 'react';
import './Header.scss'

function Header() {
  return (
    <header className="header" id="header">
      <div className="header__container grid-container">
        <h1 className="header__title">Ravenous</h1>
      </div>
    </header>
  );
}

export default Header;