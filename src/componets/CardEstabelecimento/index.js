import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import './style.css';

const CardEstabelecimento = () => {
    return (
        <div className="card-estabelecimento">
            <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201806181702_2525ae00-46ea-4fc4-8bb3-e7a8ee0b226c.png" alt="" className="imagem-perfil" />
            <h3>Império Lanches</h3>

            <p>Lanchonete</p>

            <button onClick={() => { }} type="button" className="button-whatsapp">
                <span>Fazer Pedido <FaWhatsapp color="fff" /></span>
            </button>
        </div>
    );
}

export default CardEstabelecimento;