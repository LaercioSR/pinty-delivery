import React from 'react';
import { Navbar, Nav, NavDropdown, Form/*, Button*/ } from 'react-bootstrap';
// import { MdSearch } from 'react-icons/md';

import './style.css';

import marca from '../../assets/marca.png';

class NavbarPintyDelivery extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="md" className="navbar-pinty-delivery">
                    <Navbar.Brand href="/">
                        <img
                            src={marca}
                            width="190"
                            height="45"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title="Estabelecimentos" id="basic-nav-dropdown" className="ml-auto">
                                <NavDropdown.Item href="/estabelecimentos/categorias/1">Restaurante</NavDropdown.Item>
                                <NavDropdown.Item href="/estabelecimentos/categorias/2">Padaria</NavDropdown.Item>
                                <NavDropdown.Item href="/estabelecimentos/categorias/3">Supermercado</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="/estabelecimentos/cadastrar" className="ml-auto">Cadastre seu Delivery</Nav.Link>
                            {/* <Nav.Item className="divisor" role="separator"/> */}
                        </Nav>
                        <Form inline>
                            <Form.Control type="text" placeholder="Buscar estabelecimento" className="mr-auto border-left-0 border-right-0 border-top-0 border-dark input-busca" />
                        </Form>
                        {/* <Form inline>
                            <Form.Control type="text" placeholder="Buscar estabelecimento" className="mr-sm-2" />
                            <Button onClick={() => {}} type="button">
                                <MdSearch size={22} color="#fff"/>
                            </Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
            
        );
    }
}

export default NavbarPintyDelivery;