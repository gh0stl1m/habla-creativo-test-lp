// Libraries
import React from 'react';
// Styles
import './ContactUsCard.css';
// Assets
import bonoPromo from '../../assets/Remanso-07.png';

// Functional component for the contact form
const ContactUsCard = () => {
  return (
    <div className="contact-us-card-container">
      <img src={bonoPromo} alt="Bono Promo"/>
      <div className="contact-us-card-internal">
        <form>
          <input placeholder="Nombre*" />
          <input placeholder="Correo Electronico*" />
          <input placeholder="Telefono*" />
          <input placeholder="Ciudad*" />
          <textarea cols="30" rows="5" placeholder="Comentario*"></textarea>
          <label>Al hacer click en enviar, estas aceptando los <span>terminos y condiciones</span></label>
          <button onClick={(e) => {e.preventDefault(); console.log("Formulary sended")}}>ENVIAR</button>
        </form>
      </div>
    </div>

  );
}

export default ContactUsCard;
