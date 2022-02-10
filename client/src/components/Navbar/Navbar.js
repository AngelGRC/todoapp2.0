import React from "react";
import { NavbarContainer, NavbarWrapper } from "./Navbar.elements";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <h1 className="navbar-brand">Todo App</h1>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
