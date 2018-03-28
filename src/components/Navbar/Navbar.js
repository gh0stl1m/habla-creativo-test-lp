// Libraries
import React from 'react';
// Styles
import './Navbar.css';
// Assets
import companyIcon from '../../assets/Remanso-05.png'

const Navbar = () => {
  return (
    <nav className = "navbar-container" >
      <img src={ companyIcon } alt="Company Icon" />
      <ul>
        <li> <p> Proyecto </p> | </li>
        <li> <p> Galeria </p> | </li>
        <li> <p> Apartamentos </p> | </li>
        <li> <p> Mapa </p> | </li>
        <li> <p> Contacto </p> | </li>
      </ul>
    </nav>
  );
}

export default Navbar;
