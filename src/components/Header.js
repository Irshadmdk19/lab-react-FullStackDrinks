import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">🏠 Home</Link>
    </header>
  );
};

export default Header;
