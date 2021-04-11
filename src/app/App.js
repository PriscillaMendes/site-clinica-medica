//import React, { Suspense, lazy } from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';

import Home from './externo/pages/Home.js';
import Login from './externo/pages/Login.js';
import SingUp from './externo/pages/Cadastrar.js';
import Galery from './externo/pages/Galery.js';
import Schedules from './externo/pages/Agendamentos.js';
import FooterExternal from './externo/layout/Footer.js';
import HeaderExternal from './externo/layout/Header.js';

import CadastroPaciente from './interno/pages/CadastroPaciente.js';
import HomeFuncionarios from './interno/pages/HomeFuncionarios.js';
import CadastroFuncionario from './interno/pages/CadastroFuncionario.js';
import FooterInternal from './interno/layout/Footer.js';
import HeaderInternal from './interno/layout/Header.js'

const { PUBLIC_URL } = process.env;


function ExternalLayout(props) {
    const { children } = props;
    return (
        <>
            <HeaderExternal />
            <main>{children}</main>
            <FooterExternal />
        </>
    )
}

function InternalLayout(props) {
    const { children } = props;
    return (
        <>
            <HeaderInternal />
            <main>{children}</main>
            <FooterInternal />
        </>
    )
}

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={PUBLIC_URL}>
                <Routes>
                    <Route path="auth" element={(<PrivateRoute><InternalLayout /></PrivateRoute>)}>
                        <Route path="cadastro-paciente">{<CadastroPaciente />}</Route>
                        <Route path="home-funcionario">{<HomeFuncionarios />}</Route>
                        <Route path="cadastro-funcionario">{<CadastroFuncionario />}</Route>
                    </Route>
                    <Route element={(<ExternalLayout />)}>
                        <Route path="/">{<Home />}</Route>
                        <Route path="login">{<Login />}</Route>
                        <Route path="singup">{<SingUp />}</Route>
                        <Route path="galery">{<Galery />}</Route>
                        <Route path="schedules">{<Schedules />}</Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

// {/* <Route >{NotFound}</Route> status={404} /> */ }
// import NotFound from './js/NotFound.js';