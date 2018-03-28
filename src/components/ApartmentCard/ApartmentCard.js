// Libraries
import React from 'react';
// Styles
import './ApartmentCard.css';

// Functional component for the type of apartments
const ApartmentCard = ({ imageApartment, nameApartment }) => {
    return (
      <img src={ imageApartment } alt = { nameApartment } className="apartment-card" />
    );
};

export default ApartmentCard;
