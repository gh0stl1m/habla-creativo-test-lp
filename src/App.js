// Libraries
import React, { Component } from 'react';
// Functional components
import Navbar from './components/Navbar';
import ContactUsCard from './components/ContactUsCard';
import ApartmentCard from './components/ApartmentCard/ApartmentCard';
import BusinessInformation from './components/BusinessInformation';
import BusinessCard from './components/BusinessCard';
// Styles
import './App.css';
// Assets
import title from "./assets/Remanso-19.png";
import apartment21 from "./assets/Remanso-21.png";
import apartment22 from "./assets/Remanso-22.png";
import apartment23 from "./assets/Remanso-23.png";
import apartment24 from "./assets/Remanso-24.png";
import apartment25 from "./assets/Remanso-25.png";
import apartment26 from "./assets/Remanso-26.png";
import telIcon from './assets/Remanso-31.png';
import dirIcon from './assets/Remanso-32.png';
import clockIcon from './assets/Remanso-33.png';
import mailIcon from './assets/Remanso-34.png';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <section className = "section-contact">
          <ContactUsCard />
        </section>
        <section className = "section-prices">
          <img src = { title } alt = "title"/>
          <div>
            <ApartmentCard imageApartment={apartment21} nameApartment="apartment21" />
            <ApartmentCard imageApartment={apartment22} nameApartment="apartment22" />
            <ApartmentCard imageApartment={apartment23} nameApartment="apartment23" />
            <ApartmentCard imageApartment={apartment24} nameApartment="apartment24" />
            <ApartmentCard imageApartment={apartment25} nameApartment="apartment25" />
            <ApartmentCard imageApartment={apartment26} nameApartment="apartment26" />
          </div>
        </section>
        <footer>
          <BusinessInformation title="SALA DE NEGOCIOS">
            <BusinessCard type="Tel: " value="3439241-3137050212" icon={telIcon}/>
            <BusinessCard type="Direccion: " value="Calle 6 Sur # 79 - 158 Medellin" icon={dirIcon}/>
            <BusinessCard type="Hora de Atencion: " value="10:00AM - 5:30PM" icon={clockIcon}/>
            <BusinessCard type="Correo: " value="remansodelrodeo@une.net.co" icon={mailIcon}/>
          </BusinessInformation>
        </footer>
      </div>
    );
  }
}

export default App;
