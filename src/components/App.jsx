import React, { useState } from 'react';
import '@/css/card.css';
import MobileCard from '@/components/MobileCard';
import Modal from '@/components/Modal';
// Importa el JSON; asegúrate de tener configurado el manejo de JSON en tu bundler
import mobilesData from '@/data/mobiles.json';

function App() {
  const [selectedMobile, setSelectedMobile] = useState(null);

  const handleCardClick = (mobile) => {
    setSelectedMobile(mobile);
  };

  const handleCloseModal = () => {
    setSelectedMobile(null);
  };

  return (
    <div className="App">
      <header>
        <h1>MOBILES</h1>
      </header>
      <div className="cards-container">
        {mobilesData.map((mobile, index) => (
          <MobileCard key={index} mobile={mobile} onClick={handleCardClick} />
        ))}
      </div>
      {selectedMobile && (
        <Modal mobile={selectedMobile} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;