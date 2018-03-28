// Libraries
import React from 'react';
// Styles
import "./BusinessCard.css";

// Child functional component for the footer 
const BusinessCard = ({ type, value, icon, iconName }) => {
  return(
    <div className="business-card-container">
      <img src={icon} alt={iconName}/>
      <div className="business-card-internal">
        <span>{ type }</span>
        <span>{ value }</span>
      </div>
    </div>
  );
}

export default BusinessCard;
