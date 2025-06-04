import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import "./style.css";

const EstablishmentCard = ({ establishment }) => {
  return (
    <div className="establishment-card">
      <img
        src={establishment.image_url}
        alt="Imagem Estabelecimento"
        className="profile-image"
      />
      <h3>{establishment.name}</h3>

      <p>{establishment.category}</p>

      <a
        href={`https://api.whatsapp.com/send?phone=+55${establishment.whatsapp}&text=Olá, gostaria de fazer um pedido`}
        type="button"
        className="button-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          Fazer Pedido <FaWhatsapp color="#fff" />
        </span>
      </a>
    </div>
  );
};

export default EstablishmentCard;
