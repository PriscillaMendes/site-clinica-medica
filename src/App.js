import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './js/Header.js';
import Index from './js/Home.js';
import Galery from './js/Galery.js';
import Login from './js/Login.js';
import SingUp from './js/Cadastrar.js';
import Schedules from './js/Agendamentos.js';
import Footer from './js/Footer.js';
import NotFound from './js/NotFound.js';


const { PUBLIC_URL } = process.env;


function App() {
    return (
        <div className="App">
            <Header className="row" />
            <BrowserRouter basename={PUBLIC_URL}>
                <Suspense >
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/galery" component={Galery} />
                        <Route path="/login" component={Login} />
                        <Route path="/singup" component={SingUp} />
                        <Route path="/schedules" component={Schedules} />
                        <Route component={NotFound} status={404} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
            <Footer className="row" />
        </div>
    );
}

export default App;
