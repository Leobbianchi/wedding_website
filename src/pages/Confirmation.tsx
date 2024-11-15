import React from 'react';
import '../styles/Confirmation.css';

const Confirmation: React.FC = () => {
  return (
    <div className="confirmation-container">
      <h2>Confirme sua Presença</h2>
      <p>Por favor, confirme sua presença até fevereiro de 2025.</p>
      <div className="confirmation-iframe-wrapper">
        <iframe
          className="confirmation-iframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeaYtoTZ7NP2GVMlvwB_4vWhLfm2i8WLUj8n-Q1D_OmNgDqCQ/viewform?embedded=true"
          width="640"
          height="687"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Confirmar Presença"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Confirmation;
