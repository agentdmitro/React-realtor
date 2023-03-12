import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to={'/'}>AGENT Realtor</Link>
        </div>
        <ul className="header__menu">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/offers'}>Offers</NavLink>
          </li>
          <li>
            <NavLink to={'/sign-in'}>Sign In</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
