import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CadastroEstabelecimento from './pages/CadastroEstabelecimento';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/estabelecimentos/cadastrar" exact component={CadastroEstabelecimento} />
            </Switch>
        </BrowserRouter>
    );
}