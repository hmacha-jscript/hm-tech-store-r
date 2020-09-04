import React, { useContext } from "react";
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import CartLink from "./Cart/CartLink";

export default function Header() {

  return (
    <header className="header">
      <img src={logo} alt="header" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <CartLink />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
