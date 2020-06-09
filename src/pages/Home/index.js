import React/*, { useState }*/ from 'react';
// import { Link, useHistory } from 'react-router-dom';

import NavbarPintyDelivery from '../../componets/NavbarPintyDelivery';
import CardEstabelecimento from '../../componets/CardEstabelecimento';

// import api from '../../services/api';
import './style.css';

export default function Home() {
    // const history = useHistory();

    return (
        <div>
            <div id="navbar-pintydelivery">
                <NavbarPintyDelivery /><h1>Estabelecimentos</h1>
            </div>

            <div className="home-container">
                <div className="grid">
                    <CardEstabelecimento />
                    <CardEstabelecimento />
                    <CardEstabelecimento />
                    <CardEstabelecimento />
                    {/* <div className="card-estabelecimento">
                        <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201806181702_2525ae00-46ea-4fc4-8bb3-e7a8ee0b226c.png" alt="" className="imagem-perfil" />
                        <h3>Império Lanches</h3>

                        <p>Lanchonete</p>

                        <button onClick={() => { }} type="button" className="button-whatsapp">
                            <span>Fazer Pedido <FaWhatsapp color="fff" /></span>
                        </button>
                    </div>
                    <div className="card-estabelecimento">
                        <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201806181702_2525ae00-46ea-4fc4-8bb3-e7a8ee0b226c.png" alt="" className="imagem-perfil" />
                        <h3>Império Lanches</h3>

                        <p>Lanchonete</p>

                        <button onClick={() => { }} type="button" className="button-whatsapp">
                            <span>Fazer Pedido <FaWhatsapp color="fff" /></span>
                        </button>
                    </div>
                    <div className="card-estabelecimento">
                        <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201806181702_2525ae00-46ea-4fc4-8bb3-e7a8ee0b226c.png" alt="" className="imagem-perfil" />
                        <h3>Império Lanches</h3>

                        <p>Lanchonete</p>

                        <button onClick={() => { }} type="button" className="button-whatsapp">
                            <span>Fazer Pedido <FaWhatsapp color="fff" /></span>
                        </button>
                    </div>
                    <div className="card-estabelecimento">
                        <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201806181702_2525ae00-46ea-4fc4-8bb3-e7a8ee0b226c.png" alt="" className="imagem-perfil" />
                        <h3>Império Lanches</h3>

                        <p>Lanchonete</p>

                        <button onClick={() => { }} type="button" className="button-whatsapp">
                            <span>Fazer Pedido <FaWhatsapp color="fff" /></span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}