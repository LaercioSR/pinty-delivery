import {React, useState, useEffect} from "react";
import { Navbar, Nav, NavDropdown, Form, Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

// import api from '../../services/api';

import "./style.css";

import marca from "../../assets/marca.png";

const NavbarPintyDelivery = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //     api.get('establishment/categories').then(response => {
  //         setCategorias(response.data);
  //     })
  // }, []);

  function homePage() {
    navigate('/');
  }

  function establishmentRegisterPage() {
    navigate('/estabelecimentos/cadastrar');
  }

  return (
    <div className="nav-container">
      <Navbar
        variant="light"
        expand="md"
        className="navbar-pinty-delivery"
      >
        <Navbar.Brand className="logo" onClick={homePage}>
          <img
            src={marca}
            width="190"
            height="45"
            className=""
            alt="Logo Pinty Delivery"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="registerButton">
            <Nav.Link onClick={establishmentRegisterPage} className="mr-auto">Registre seu Delivery</Nav.Link>
          </Nav>

          <Nav className="categoriesDropdown">
            <NavDropdown title="Categorias" className="mr-auto" alignRight>
              {categories.map(categoria => (
                <NavDropdown.Item href={"/estabelecimentos/categorias/" + categoria.id} key={categoria.id} className="item-dropdown">{categoria.descricao}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Item className="divisor" role="separator"/>
          </Nav>

          <Form className="searchContent" inline>
            <Form.Control type="text" placeholder="Buscar estabelecimento" className="mr-auto searchInput" />
            <Button onClick={() => {}} type="button">
              <MdSearch size={22} background="#fff" color="#fff"/>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarPintyDelivery;
