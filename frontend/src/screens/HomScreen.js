import React from 'react';

export default function HomScreen(props) {

    return (
        <div className="home">

            <div>
                <h1 className="home-title">
                    Bienvenido al Catalogo de Súper Tiernos
                </h1>
            </div>

            <p className="home-description">
                Encuentra aquí los productos de la mejor calidad para tu peludito.
            </p>

            <p className="home-sub-des">
                Contactanos en nuestras redes sociales
            </p>

            <div className="redes-container">
                <ul>
                    <li><a href="https://www.facebook.com/supertiernosoficial-224234252253413" target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/supertiernosoficial/" target="_blank" rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://api.whatsapp.com/message/25XF36FMVFSGB1" target="_blank" rel="noopener noreferrer" className="whatsapp"><i className="fab fa-whatsapp"></i></a></li>
                </ul>

            </div>
        </div>
    )
};