import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';

import NavbarPintyDelivery from '../../componets/NavbarPintyDelivery';
import CardEstabelecimento from '../../componets/CardEstabelecimento';

import api from '../../services/api';
import './style.css';

export default function Home() {
    // const history = useHistory();

    const [estabelecimentos, setEstabelecimentos] = useState([]);

    useEffect(() => {
        api.get('estabelecimentos').then(response => {
            setEstabelecimentos(response.data);
        })
    }, []);

    return (
        <div>
            <div id="navbar-pintydelivery">
                <NavbarPintyDelivery />
            </div>

            <div className="home-container">
                <div className="estabelecimentos-container">
                    <h1>Estabelecimentos</h1>
                    {estabelecimentos.length > 0 ?
                        (
                            <div className="grid">
                                {estabelecimentos.map(estabelecimento => (
                                    <CardEstabelecimento key={estabelecimento.id} estabelecimento={estabelecimento} />
                                ))}
                            </div>
                        ) : (
                            <h4>Não há estabelecimentos cadastrados</h4>
                        )}
                </div>
            </div>
        </div>
    );
}