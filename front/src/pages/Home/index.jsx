import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import NavbarPintyDelivery from "../../componets/NavbarPintyDelivery";
import EstablishmentCard from "../../componets/establishmentCard";

import api from "../../services/api";
import "./style.css";

export default function Home() {
  const [establishments, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/establishments").then((response) => {
      setEstablishment(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div id="navbar-pintydelivery">
        <NavbarPintyDelivery />
      </div>

      <div className="home-container">
        <div className="estabelecimentos-container">
          <h1>Estabelecimentos</h1>
          {loading ? (
            <Spinner animation="border" variant="danger" />
          ) : establishments.length > 0 ? (
            <div className="grid">
              {establishments.map((establishment) => (
                <EstablishmentCard
                  key={establishment.id}
                  establishment={establishment}
                />
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
