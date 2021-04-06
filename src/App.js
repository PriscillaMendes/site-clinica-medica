//import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Home from './js/externo/Home.js';
import Header from './js/Header.js';
import Galery from './js/externo/Galery.js';
import Login from './js/externo/Login.js';
import SingUp from './js/externo/Cadastrar.js';
import Schedules from './js/externo/Agendamentos.js';
import Footer from './js/Footer.js';
import CadastroFuncionario from './js/interno/CadastroFuncionario';
import CadastroPaciente from './js/interno/CadastroPaciente';
import HomeFuncionarios from './js/interno/HomeFuncionarios';
import PrivateRoute from './js/PrivateRoute';


const { PUBLIC_URL } = process.env;


function App() {
    return (
        <div className="App">
            <Header className="row" />
            <BrowserRouter basename={PUBLIC_URL}>
                <Routes>
                    <Route path="/">{<Home />}</Route>
                    <Route path="/galery">{<Galery />}</Route>
                    <Route path="/singup">{<SingUp />}</Route>
                    <Route path="/schedules">{<Schedules />}</Route>
                    <Route path="/login">{<Login />}</Route>
                    <PrivateRoute>
                        <Route path="/home-funcionario">{<HomeFuncionarios />}</Route>
                    </PrivateRoute>
                    <PrivateRoute>
                        <Route path="/cadastro-funcionario">{<CadastroFuncionario />}</Route>
                    </PrivateRoute>
                    <PrivateRoute>
                        <Route path="/cadastro-paciente">{<CadastroPaciente />}</Route>
                    </PrivateRoute>
                </Routes>
            </BrowserRouter>
            <Footer className="row" />
        </div>
    );
}

export default App;

// {/* <Route >{NotFound}</Route> status={404} /> */ }
// import NotFound from './js/NotFound.js';