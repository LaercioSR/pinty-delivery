import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import './style.css';

const CardEstabelecimento = ({ estabelecimento }) => {
    return (
        <div className="card-estabelecimento">
            <img src={estabelecimento.imagem_url} alt="Imagem Estabelecimento" className="imagem-perfil" />
            <h3>{estabelecimento.nome}</h3>

            <p>{estabelecimento.categoria}</p>

            <a href={`https://api.whatsapp.com/send?phone=+55${estabelecimento.whatsapp}&text=Olá, gostaria de fazer um pedido`} type="button" className="button-whatsapp">
                <span>Fazer Pedido <FaWhatsapp color="fff" /></span>
            </a>
        </div>
    );
}

export default CardEstabelecimento;