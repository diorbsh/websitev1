import React from "react";
import xamarin from './images/xamarin.png';
import iot from './images/iot.png';
import weatherstation from './images/weatherstation.jpg';
import ecommerceshop from './images/ecommerceshop.png';
import nodered from './images/nodered.png';
import wordpress from './images/wordpress.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Persönliche Projekte</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={xamarin} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Xamarin Cloud-App</h2>
                <p>Mobile App mit Xamarin und Cloud-Anbindung zur Visualisierung von Maschinen. Die Kommunikation zwischen App und Maschine läuft über MQTT und eine IoT-Infrastruktur, wodurch Maschinendaten in Echtzeit dargestellt werden.</p>
            </div>
            <div className="project">
                <img src={iot} className="zoom" alt="thumbnail" width="100%"/>
                <h2>IoT Schnittstelle</h2>
                <p>Konzeption und Umsetzung einer IoT-Schnittstelle zwischen Mobile-App, MQTT-Broker (Mosquitto) und Maschine. Ermöglicht die bidirektionale Kommunikation und Steuerung von Maschinen über das Internet.</p>
            </div>
            <div className="project">
                <img src={weatherstation} className="zoom" alt="thumbnail" width="100%"/>
                <h2>WeatherStation</h2>
                <p>Entwicklung einer Wetterstation mit CircuitPython auf einem Mikrocontroller. Sensoren erfassen Temperatur, Luftfeuchtigkeit und Luftdruck in Echtzeit, die Daten werden ausgelesen, verarbeitet und angezeigt.</p>
            </div>
            <div className="project">
                <img src={ecommerceshop} className="zoom" alt="thumbnail" width="100%"/>
                <h2>E-Commerce Shop</h2>
                <p>Umsetzung eines E-Commerce-Shops mit reinem HTML, CSS und JavaScript – von der Produktdarstellung bis zur Warenkorb-Logik, ohne Framework.</p>
            </div>
            <div className="project">
                <img src={nodered} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Arduino-Steuerung mit Node-RED</h2>
                <p>Aufbau von Node-RED-Flows zur Steuerung eines Arduino. Über verknüpfte Nodes und Switches werden Befehle verarbeitet und an das Arduino weitergeleitet, um dessen Verhalten in Echtzeit zu steuern.</p>
            </div>
            <div className="project">
                <img src={wordpress} className="zoom" alt="thumbnail" width="100%"/>
                <h2>WordPress Webseite</h2>
                <p>Erstellung einer WordPress-Webseite mit allen grundlegenden Funktionen – von der Struktur über die Beitragsverwaltung bis zur individuellen Anpassung des Designs.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;