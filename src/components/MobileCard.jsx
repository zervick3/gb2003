import React from 'react';
//import './MobileCard.css'; // Opcional: si deseas estilos específicos para el card

const MobileCard = ({ mobile, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(mobile)}>
      <img src={mobile.img} alt={mobile.name} />
      <p>{mobile.name}</p>
    </div>
  );
};

export default MobileCard;
