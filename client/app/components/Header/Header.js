import React from 'react';
import "./Header.css";

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
