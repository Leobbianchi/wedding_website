
import React from 'react';

const Map: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
      <iframe
        src="https://www.google.com.br/maps/search/Hotels/@45.7029944,9.38251,13z/data=!3m1!4b1!4m7!2m6!3m5!2sVilla+Subaglio!3s0x4786aef5feb2cd6b:0x7c288e59a38e724a!4m2!1d9.4213978!2d45.7025929?authuser=1&entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
