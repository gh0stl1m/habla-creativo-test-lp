// Libraries
import React from 'react';
// Styles
import "./BusinessInformation.css";
// Assets
import poweredByHabla from '../../assets/Remanso-35.png';

// Parent functional component for the footer
const BusinessInformation = ({ title, children }) => {
  return(
    <div className="business-information-container">
      <h3>{ title }</h3>       
      <div className="business-information-internal">
        { children }
      </div>
      <p align="center">Las imagenes utilizadas son representaciones digitales del diseño y junto con las oficinas, locales y apartamentos que pueden variar en la construccion final. El mobiliario, electrodomesticos, gasodomesticos, acabados y demas elementos que aparecen en las imagenes son una representacion a fin de ilustrar la utilizacion de los espacios y pueden diferir de lo entregado o no ser entregado segun lo comvenido en los contrato. Las areas privadas y construidas podran sufrir ajustes y quedaran finalmente determinadas en los contratos suscritos por las partes.</p>
      <img src={poweredByHabla} alt="PoweredByHabla"/>
    </div>
  );
}

export default BusinessInformation;
