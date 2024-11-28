import React from 'react';
import '../styles/Agency.css';

interface HotelInfoCardProps {
  name: string;
  distance: string;
  address: string;
  mapSrc: string;
  link: string;
}

interface AgencyProps {
    logo: string;
    link: string;
    name: string;
}

const AgencySuggestion: React.FC<AgencyProps> = ({logo, link, name}) =>{
    return(
        <div className="agency-suggestion-card">
            <div className='agency-logo'>
                <a href={link} target="_blank" rel="noopener noreferrer" className="agency-link">
                    <img src={logo} />
                </a>
            </div>
            <div>
            <h3>
                <a href={link} target="_blank" rel="noopener noreferrer" className="agency-link">
                    {name}
                </a>
            </h3>
            <p>
                Procurando ajuda para comprar passagens ou encontrar hotéis?<br></br>
                Entre em contato e procure pelo Cedenir, além te de ajudar eles conseguem preços e condições especiais!
            </p>
            </div>
        </div>
    )
}


export default AgencySuggestion;
