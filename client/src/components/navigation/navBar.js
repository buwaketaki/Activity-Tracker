import React from "react";
import { NavLink } from "react-router-dom";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else if (isOpen == true) {
      setIsOpen(false);
    }
  };

  return (
    <MDBNavbar className="navbar" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">
          {" "}
          <MDBIcon
            icon="calendar-alt"
            color="white"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          />
          Activity Tracker
        </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right></MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};
export default Navbar;
