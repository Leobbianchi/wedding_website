import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import HotelInfoCard from '../components/HotelInfoCard';
import AgencySuggestion from '../components/Agency';
import '../styles/Tips.css';

import milaleo1 from '../assets/images/milaleo1.jpg';
import milaleo2 from '../assets/images/milaleo2.jpg';
import milaleo3 from '../assets/images/milaleo3.jpg';
import milaleo4 from '../assets/images/milaleo4.jpg';

import caxiasturLogo from '../assets/images/caxiastur.png';


// Agencia de turismo
const agencyData  = [{
  logo: caxiasturLogo,
  link: "https://www.comprarviagem.com.br/caxiastur/home",
  name: "Caxiastur",
}];

// Dados dos hotéis para exibição
const hotelData = [
  {
    name: 'Hotel Griso Collection',
    distance: '10 minutos de carro',
    address: 'Viale Italia, 24, 23864 Malgrate LC',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40005.41682743714!2d9.363209786331646!3d45.83837164178876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47841d163096031f%3A0xef1d970295d63eb3!2sHotel%20Griso%20Collection!5e0!3m2!1spt-BR!2sbr!4v1731665482487!5m2!1spt-BR!2sbr',
    link: 'https://www.griso.info/en',
  },
  {
    name: 'Hotel Alberi',
    distance: '10 minutos de carro',
    address: 'Via Lungo Lario Isonzo 4, 23900 Lecco',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4718.765487028866!2d9.383171335491832!3d45.85304508591444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47841d245d7f421d%3A0x34d60945f7c3abaa!2sHotel%20Alberi%20Lecco!5e0!3m2!1spt-BR!2sbr!4v1731666095747!5m2!1spt-BR!2sbr',
    link: 'https://www.hotelalberi.it/en',
  },
  {
    name: 'Locanda Papà Nenè',
    distance: '10 minutos de carro',
    address: '24 Via Pinamonte, 23875 Osnago',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.757428203178!2d9.392510711865237!3d45.67576977095757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786ae2cc3cb53d7%3A0x6a29127ff43d53d9!2sOsteria%20Roncate!5e0!3m2!1spt-BR!2sbr!4v1731666388429!5m2!1spt-BR!2sbr',
    link: 'https://osterialocanda.wixsite.com/english',
  },
  {
    name: 'Melas Hotel',
    distance: '5 minutos de carro',
    address: 'Via Bergamo 37, 23807 Merate',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.1059068768004!2d9.421996799999999!3d45.6888466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786ae6a91f7e14b%3A0xc4cdbadb0bf79ac3!2sMelas%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1731671706797!5m2!1spt-BR!2sbr',
    link: 'https://www.melashotel.it',
  },
];

const Tips: React.FC = () => {
  return (
    <div id="tips" className="tips">
      <h2>Dicas dos Noivos</h2>

      <div className="image-gallery">
        <ImageCarousel
          images={[
            { src: milaleo1, alt: 'Mila e Leo 1' },
            { src: milaleo2, alt: 'Mila e Leo 2' },
            { src: milaleo3, alt: 'Mila, Leo e Sushi' },
            { src: milaleo4, alt: 'Mila e Leo 4' },
          ]}
        />
      </div>

      <p className="intro-text">
        Merate, uma encantadora cidade localizada na região da Lombardia, no norte da Itália, é conhecida por sua paisagem pitoresca, com colinas verdejantes, arquitetura histórica e uma atmosfera acolhedora e tranquila.
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55363.57875861008!2d9.38251!3d45.7029944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786aef5feb2cd6b%3A0x7c288e59a38e724a!2sVilla%20Subaglio!5e0!3m2!1sen!2sbr!4vYOUR_EMBED_CODE"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="lecco-info" style={{ marginTop: '30px', textAlign: 'justify', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#444', textAlign: 'center' }}>Hospedagem em Lecco</h3>
        <p style={{ fontSize: '1.2em', lineHeight: '1.8', color: '#555' }}>
          Uma dica valiosa é considerar a hospedagem na charmosa cidade de <strong>Lecco</strong>, localizada às margens do famoso Lago di Como. Além de ser um destino encantador por si só, Lecco oferece uma infraestrutura mais ampla e diversas opções de hospedagem, atendendo a diferentes perfis de viajantes. A cidade também garante fácil acesso a <strong>Merate</strong>, tornando-se uma escolha prática e aconchegante para a sua estadia.
        </p>
      </div>

      <br />

      <p className="map-intro">Seguem algumas opções de hotéis pela região:</p>

      <div className="hotel-list">
        {hotelData.map((hotel, index) => (
          <HotelInfoCard
            key={index}
            name={hotel.name}
            distance={hotel.distance}
            address={hotel.address}
            mapSrc={hotel.mapSrc}
            link={hotel.link}
          />
        ))}

        <div>

        {agencyData.map((agency, index) => (
          <AgencySuggestion
            key={index}
            logo={agency.logo}
            link={agency.link}
            name={agency.name}
          />
        ))}

        </div>

        <div className="airbnb-card">
          <h3>Airbnb</h3>
          <p>
            Outra opção é procurar no <strong>Airbnb</strong>, que oferece diversas
            opções ideais para grupos maiores ou quem busca uma boa relação
            custo-benefício.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Tips;
