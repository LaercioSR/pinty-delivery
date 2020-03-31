import React/*, { useState }*/ from 'react';
// import { Link, useHistory } from 'react-router-dom';

import NavbarPintyDelivery from '../../componets/NavbarPintyDelivery';

// import api from '../../services/api';
import './style.css';

export default function Home() {
    // const history = useHistory();

    return (
        <div className="home-container">
            <NavbarPintyDelivery />
            <section className="form">
                <form onSubmit={() => {}}>
                    
                </form>
            </section>
        </div>
    );
}