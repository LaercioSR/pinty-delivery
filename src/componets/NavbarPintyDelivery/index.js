import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { MdSearch } from 'react-icons/md';

class NavbarPintyDelivery extends React.Component {
    render() {
        return (
            <div id="navbar-pinty-delivery">
                <Navbar bg="light" expand="md">
                <Navbar.Brand href="/">Pinty Delivery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/estabelecimentos/cadastrar">Cadastre seu Delivery</Nav.Link>
                        <NavDropdown title="Estabelecimentos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/estabelecimentos/categorias/1">Restaurante</NavDropdown.Item>
                            <NavDropdown.Item href="/estabelecimentos/categorias/2">Padaria</NavDropdown.Item>
                            <NavDropdown.Item href="/estabelecimentos/categorias/3">Supermercado</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar estabelecimento" className="mr-sm-2" />
                        <Button onClick={() => {}} type="button">
                            <MdSearch size={22} color="#fff"/>
                        </Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
            
        );
    }
}

export default NavbarPintyDelivery;