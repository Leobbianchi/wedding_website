import React, { useEffect, useState } from 'react';
import villaImage from '../assets/images/villa-subaglio-home.jpg';
import villaImageMobile from '../assets/images/villa-subaglio-home2.jpg';
import '../styles/Homepage.css';

const Homepage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define o estado `isMobile` com base no tamanho da janela
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Considera telas menores que 768px como "mobile"
    };

    // Executa a função uma vez para definir o estado inicial
    handleResize();

    // Adiciona o evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="homepage">
      <img src={isMobile ? villaImageMobile : villaImage} alt="Villa Subaglio" className="villa-image" />
      <div className="save-the-date">
        <h1>10/09/2025</h1>
        <p>Save the Date</p>
      </div>
    </div>
  );
};

export default Homepage;
