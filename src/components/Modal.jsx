import React from 'react';
//import '@/Modal.css'; // Opcional: si deseas estilos específicos para el modal

const Modal = ({ mobile, onClose }) => {
  if (!mobile) return null;
  
  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target.className === 'modal-overlay') onClose();
      }}
    >
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-left">
          <h2 id="modal-title">{mobile.name}</h2>
          <img id="modal-img" src={mobile.img} alt={mobile.name} />
          <p id="modal-desc">{mobile.desc}</p>
          <div className="modal-extra-info">
            <h3>Pros</h3>
            <p id="modal-pros">{mobile.pros}</p>
            <h3>Features</h3>
            <p id="modal-features">{mobile.features}</p>
            <h3>Natural Enemies</h3>
            <p id="modal-natural">{mobile.natural}</p>
          </div>
        </div>
        <div className="modal-right">
          <h2>SKILL PREVIEW</h2>
          <div className="skill">
            <img id="modal-shot1" src={mobile.shot1} alt="Shot 1" />
            <div>
              <h4>Shot 1</h4>
              <p id="modal-shot1desc">{mobile.shot1desc}</p>
            </div>
          </div>
          <div className="skill">
            <img id="modal-shot2" src={mobile.shot2} alt="Shot 2" />
            <div>
              <h4>Shot 2</h4>
              <p id="modal-shot2desc">{mobile.shot2desc}</p>
            </div>
          </div>
          <div className="skill">
            <img id="modal-ss" src={mobile.ss} alt="SS" />
            <div>
              <h4>SS</h4>
              <p id="modal-ssdesc">{mobile.ssdesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;