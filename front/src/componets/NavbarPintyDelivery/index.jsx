import React /*useState, useEffect*/ from "react";
import { Navbar, Nav /*NavDropdown, Form, Button*/ } from "react-bootstrap";
// import { useHistory } from 'react-router-dom';
// import { MdSearch } from 'react-icons/md';

// import api from '../../services/api';

import "./style.css";

import marca from "../../assets/marca.png";

const NavbarPintyDelivery = () => {
  // const history = useHistory();

  // const [categorias, setCategorias] = useState([]);

  // useEffect(() => {
  //     api.get('estabelecimentos/categorias').then(response => {
  //         setCategorias(response.data);
  //     })
  // }, []);

  function irParaHome() {
    // history.push('/');
  }

  function irParaCadastroEstabelecimento() {
    // history.push('/estabelecimentos/cadastrar');
  }

  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="md"
        className="navbar-pinty-delivery"
      >
        <Navbar.Brand onClick={irParaHome}>
          <img
            src={marca}
            width="190"
            height="45"
            className="d-inline-block align-top"
            alt="Logo Pinty Delivery"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="mr-auto"> */}
          <Nav className="ml-auto">
            <Nav.Link
              onClick={irParaCadastroEstabelecimento}
              className="mr-auto"
            >
              Registre seu Delivery
            </Nav.Link>
          </Nav>
          {/* <Nav className="ml-auto">

                        <NavDropdown title="Categorias" className="mr-auto" alignRight>
                            {categorias.map(categoria => (
                                <NavDropdown.Item href={"/estabelecimentos/categorias/" + categoria.id} key={categoria.id} className="item-dropdown">{categoria.descricao}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Item className="divisor" role="separator"/>
                    </Nav> */}
          {/* <Form inline>
                        <Form.Control type="text" placeholder="Buscar estabelecimento" className="mr-auto  input-busca" />
                    </Form> */}
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
};

export default NavbarPintyDelivery;
