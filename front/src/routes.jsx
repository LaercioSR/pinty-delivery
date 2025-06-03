import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

import Home from "./pages/Home";
import RegisterEstablishment from "./pages/RegisterEstablishment";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route
          path="/estabelecimentos/cadastrar"
          element={<RegisterEstablishment />}
        />
      </RouterRoutes>
    </BrowserRouter>
  );
}
