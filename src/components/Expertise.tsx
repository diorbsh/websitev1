import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faMicrochip, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Xamarin",
    "C#",
    ".NET",
    "HTML5",
    "CSS3",
    "Git",
    "Mobile UI/UX"
];

const labelsSecond = [
    "ESP32",
    "IoT",
    "Embedded C",
    "Cloud-Computing",
    "Datengesteuerte Anleitungen",
    "Sensorik"
];

const labelsThird = [
    "ISO 9001",
    "BPMN",
    "Projektmanagement",
    "Prozessoptimierung",
    "Change Management",
    "Stakeholder-Kommunikation"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid" style={{ alignItems: 'stretch' }}>
                <div className="skill" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <FontAwesomeIcon icon={faMobileScreenButton} size="3x"/>
                    <h3>Mobile App Development</h3>
                    <p>Ich entwickle plattformübergreifende mobile Apps mit Xamarin (C#) – von der Umsetzung bis zur technischen Dokumentation.</p>
                    <div className="flex-chips" style={{ marginTop: 'auto' }}>
                        <span className="chip-title">Tech Stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>IoT & Embedded Systems</h3>
                    <p>Ich verbinde ESP32-Mikrocontroller mit Cloud-Technologien zu intelligenten, vernetzten Lösungen.</p>
                    <div className="flex-chips" style={{ marginTop: 'auto' }}>
                        <span className="chip-title">Tech Stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <FontAwesomeIcon icon={faClipboardCheck} size="3x"/>
                    <h3>Prozessmanagement & Qualitätsoptimierung</h3>
                    <p>Ich baue prozessbasierte Qualitätsmanagementsysteme auf und optimiere sie mit Process-Excellence-Methoden.</p>
                    <div className="flex-chips" style={{ marginTop: 'auto' }}>
                        <span className="chip-title">Tech Stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;