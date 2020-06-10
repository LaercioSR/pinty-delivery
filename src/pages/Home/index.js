import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

import NavbarPintyDelivery from '../../componets/NavbarPintyDelivery';
import CardEstabelecimento from '../../componets/CardEstabelecimento';

// import api from '../../services/api';
import './style.css';

export default function Home() {
    // const history = useHistory();

    const [estabelecimentos, setEstabelecimentos] = useState([]);

    estabelecimentos.push({ id: 1, nome: "Império Lanches", categoria: "Lanchonete", imagem: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201806181702_2525ae00-46ea-4fc4-8bb3-e7a8ee0b226c.png", numero: "99 99999-9999" });
    estabelecimentos.push({ id: 2, nome: "", categoria: "", imagem: "", numero: "" });
    estabelecimentos.push({ id: 3, nome: "", categoria: "", imagem: "", numero: "" });
    estabelecimentos.push({ id: 4, nome: "", categoria: "", imagem: "", numero: "" });

    return (
        <div>
            <div id="navbar-pintydelivery">
                <NavbarPintyDelivery /><h1>Estabelecimentos</h1>
            </div>

            <div className="home-container">
                <div className="grid">
                    {estabelecimentos.map(estabelecimento => (
                        <CardEstabelecimento key={estabelecimento.id} estabelecimento={estabelecimento} />
                    ))}
                </div>
            </div>
        </div>
    );
}