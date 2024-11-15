// EventInfo.tsx
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import '../styles/EventInfo.css';

import villaSubaglio1 from '../assets/images/villa-subaglio.jpg';
import villaSubaglio2 from '../assets/images/villa-subaglio2.jpg';
import villaSubaglio3 from '../assets/images/villa-subaglio3.jpg';
import villaSubaglio4 from '../assets/images/villa-subaglio4.jpg';
import dress1 from '../assets/images/dress1.jpg';
import dress2 from '../assets/images/dress2.jpg';

const EventInfo: React.FC = () => {
  return (
    <div id="event-info" className="event-info">
      <h2>Informações do Evento</h2>

      <p className="intro-text">
        Nós estamos ansiosos pelo momento especial que se aproxima e mal podemos esperar para compartilhar este dia com cada um de vocês. O casamento acontecerá em um cenário de sonho, na Villa Subaglio, localizada na Itália, no dia 10 de setembro de 2025. É essencial que todos confirmem presença através do formulário disponível no site para garantirmos uma celebração impecável.
      </p>

      <div className="image-gallery">
        <ImageCarousel
          images={[
            { src: villaSubaglio1, alt: 'Imagem Villa Subaglio 1' },
            { src: villaSubaglio2, alt: 'Imagem Villa Subaglio 2' },
            { src: villaSubaglio3, alt: 'Imagem Villa Subaglio 3' },
            { src: villaSubaglio4, alt: 'Imagem Villa Subaglio 4' },
          ]}
        />
      </div>

      <h3>Dress-code - Traje Social</h3>
      <p>
        Para os homens, o traje social consiste em um terno completo (blazer e calça) ou, em caso de temperaturas mais altas, uma combinação de camisa social com calça de alfaiataria. Recomendamos o uso de gravata, embora, em função do calor, ela possa ser opcional. Caso opte por um terno, escolha tecidos leves, como linho ou algodão, para maior conforto. Quanto aos sapatos, sugerimos modelos sociais como oxford ou derby, preferencialmente de couro ou material similar.
      </p>
      <p>
        Para as mulheres, o traje social pode incluir vestidos formais, como vestidos midi ou longos. Tecidos leves e fluídos são ideais para o clima quente, e sugerimos evitar saltos muito altos, considerando que o terreno possui grama e cascalho. Sandálias de salto médio e salto bloco são ótimas opções.
      </p>
      <p>
        Em caso de dúvida, a escolha por um estilo mais leve, porém elegante, é sempre bem-vinda.
      </p>
      <p>
        Estamos ansiosos para celebrar este momento único com todos vocês!
      </p>
      {/* Carrossel adicional com as imagens dress1 e dress2 */}
      <div className="image-gallery">
        <ImageCarousel
          images={[
            { src: dress1, alt: 'Dress Code - Exemplo 1' },
            { src: dress2, alt: 'Dress Code - Exemplo 2' },
          ]}
        />
      </div>
    </div>
  );
};

export default EventInfo;
