import React from 'react';
import logoPath from '../images/logo.svg';

function Header() {
    return (
        <header className="page-header">
          <a href="https://yandex.ru/"
            ><img
              className="page-header__logo link-effect"
              src={logoPath}
              alt="Место"
          /></a>
        </header>
    )
}

export default Header;
