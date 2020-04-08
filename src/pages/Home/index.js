import React/*, { useState }*/ from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';

import NavbarPintyDelivery from '../../componets/NavbarPintyDelivery';

// import api from '../../services/api';
import './style.css';

export default function Home() {
    // const history = useHistory();

    return (
        <div className="home-container">
            <NavbarPintyDelivery /><h1>Estabelecimentos</h1>

            <ul>
                {/* <li key="1">
                    <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201806181702_2525ae00-46ea-4fc4-8bb3-e7a8ee0b226c.png" alt="" className="imagem-perfil"/>
                    <strong>NOME:</strong>
                    <p>Império Lanches</p>

                    <strong>CATEGORIA:</strong>
                    <p>Lanchonete</p>

                    <strong>HORÁRIO DE FUNCIONAMENTO:</strong>
                    <p>Segunda: 19h - 23h\nTerça: 19h - 23h</p>

                    <strong>ENDEREÇO:</strong>
                    <p>Praça Honorato Gonçalves</p>

                    <button onClick={() => {}} type="button">
                        Fazer Pedido
                    </button>
                </li> */}
                {/* <li>
                    <Container className="card-estabelecimento" md>
                        <Row>
                            <Col xs="6" md="2">
                                <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201806181702_2525ae00-46ea-4fc4-8bb3-e7a8ee0b226c.png" alt="" className="imagem-perfil"/>
                            </Col>
                            <Col xs="6" md="10">
                                <Row>
                                    <strong>NOME:</strong>
                                    <p>Império Lanches</p>
                                </Row>
                                <Row>
                                    <strong>CATEGORIA:</strong>
                                    <p>Lanchonete</p>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <strong>HORÁRIO DE FUNCIONAMENTO:</strong>
                            <p>Segunda: 19h - 23h\nTerça: 19h - 23h</p>
                        </Row>

                        <Row>
                            <strong>ENDEREÇO:</strong>
                            <p>Praça Honorato Gonçalves</p>
                        </Row>

                        <Row>
                            <button onClick={() => {}} type="button" className="button-whatsapp">
                                Fazer Pedido
                            </button>
                        </Row>
                    </Container>
                </li> */}
                
            </ul>


        </div>
    );
}