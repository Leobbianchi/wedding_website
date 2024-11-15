import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import HotelInfoCard from '../components/HotelInfoCard';
import '../styles/Tips.css';

import milaleo1 from '../assets/images/milaleo1.jpg';
import milaleo2 from '../assets/images/milaleo2.jpg';
import milaleo3 from '../assets/images/milaleo3.jpg';
import milaleo4 from '../assets/images/milaleo4.jpg';

// Dados dos hotéis para exibição
const hotelData = [
  {
    name: 'Hotel Griso Collection',
    distance: '10 minutos de carro',
    address: 'Viale Italia, 24, 23864 Malgrate LC',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40005.41682743714!2d9.363209786331646!3d45.83837164178876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47841d163096031f%3A0xef1d970295d63eb3!2sHotel%20Griso%20Collection!5e0!3m2!1spt-BR!2sbr!4v1731665482487!5m2!1spt-BR!2sbr',
    link: 'https://www.booking.com/hotel/it/griso.pt-pt.html'
  },
  {
    name: 'Hotel Alberi',
    distance: '10 minutos de carro',
    address: 'Via Lungo Lario Isonzo 4, 23900 Lecco',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4718.765487028866!2d9.383171335491832!3d45.85304508591444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47841d245d7f421d%3A0x34d60945f7c3abaa!2sHotel%20Alberi%20Lecco!5e0!3m2!1spt-BR!2sbr!4v1731666095747!5m2!1spt-BR!2sbr',
    link: 'https://www.booking.com/hotel/it/alberi.pt-pt.html'
  },
  {
    name: 'Locanda Papà Nenè',
    distance: '10 minutos de carro',
    address: '24 Via Pinamonte, 23875 Osnago',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.757428203178!2d9.392510711865237!3d45.67576977095757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786ae2cc3cb53d7%3A0x6a29127ff43d53d9!2sOsteria%20Roncate!5e0!3m2!1spt-BR!2sbr!4v1731666388429!5m2!1spt-BR!2sbr',
    link: 'https://www.booking.com/hotel/it/locanda-papa-nene.pt-pt.html'
  }
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
        Merate, uma encantadora cidade localizada na região da Lombardia, no norte da Itália, é conhecida por sua paisagem pitoresca, com colinas verdejantes, arquitetura histórica e uma atmosfera acolhedora e tranquila. A cidade é rica em tradição e oferece um ambiente perfeito para um momento tão especial.
        Embora pequena, Merate tem uma grande importância histórica e cultural, com belas igrejas, praças charmosas e uma proximidade com algumas das cidades mais icônicas da Itália, como Milão (41 min / 39,4 km) e Como (42 min / 35,8 km).
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

      <br />

      <p className="map-intro">
        Seguem algumas opções de hotéis pela região:
      </p>

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
      </div>

      <div className="region-activities" style={{ marginTop: '40px', padding: '20px' }}>
        <h2 style={{ fontSize: '2.2em', marginBottom: '20px', textAlign: 'center', color: '#333' }}>
          O que fazer pela região
        </h2>

        <h3 style={{ fontSize: '1.5em', marginTop: '20px', marginBottom: '10px', color: '#444', textAlign: 'left' }}>
          Explorar Como e suas maravilhas
        </h3>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#555', textAlign: 'justify', marginBottom: '15px' }}>
          A cidade de Como é um destino encantador, conhecido por sua beleza natural e por suas villas históricas. Um dos passeios mais recomendados é o tour de barco pelo Lago de Como, que permite conhecer as maravilhas da região de uma perspectiva única. Não perca a chance de visitar a <strong style={{ color: '#333' }}>Villa del Balbianello</strong>, uma impressionante villa histórica onde foram gravadas cenas de filmes como Star Wars e 007 - Casino Royale.
        </p>

        <h3 style={{ fontSize: '1.5em', marginTop: '20px', marginBottom: '10px', color: '#444', textAlign: 'left' }}>
          Visite Bellagio, a pérola do Lago de Como
        </h3>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#555', textAlign: 'justify', marginBottom: '15px' }}>
          Bellagio é uma charmosa cidade situada bem no centro do Lago de Como, entre as duas "pernas" do lago, oferecendo paisagens de tirar o fôlego. Além das belas vistas, você encontrará jardins deslumbrantes, ruas estreitas e uma atmosfera romântica que tornam Bellagio um lugar imperdível para quem visita a região.
        </p>

        <h3 style={{ fontSize: '1.5em', marginTop: '20px', marginBottom: '10px', color: '#444', textAlign: 'left' }}>
          Brunate e sua vista panorâmica
        </h3>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#555', textAlign: 'justify', marginBottom: '15px' }}>
          Para uma vista espetacular da região, visite Brunate, uma pequena vila localizada no topo de uma montanha ao lado de Como. Você pode chegar a Brunate através de um funicular que parte de Como, e ao chegar, aproveite a caminhada até o <strong style={{ color: '#333' }}>Farol de Brunate</strong>. Do alto do farol, você terá uma vista incrível de toda a região e do Lago de Como, proporcionando uma experiência memorável.
        </p>
      </div>
    </div>
  );
};

export default Tips;
