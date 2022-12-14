import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { useCart } from "react-use-cart";

import "./index.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);

  const {
    isEmpty,
    totalItems
  } = useCart();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant={darkMode ? "dark" : "light"}
      className={
        darkMode
          ? "theme-black border-bottom navbar-style"
          : "theme-light border-bottom navbar-style"
      }
    >
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}
          >
            <b>
              Foo
              <span>Do</span>
            </b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/cart"
              className={`flex-row ${
                darkMode ? "text-dark-primary " : "text-light-primary "
              } `}
            >
              <BiCart className="navbar-links" /> 
              {!isEmpty && <div className="navbar-cart-quantity">{totalItems}</div>}
              Cart
            </Link>
            <Nav.Link
              className={darkMode ? "sun" : "moon"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiSun /> : <BiMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;