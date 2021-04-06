import React from 'react'

import '../css/Header.css';
import logo_img from '../images/clinica/logo2.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className="col-12 header-size">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <img src={logo_img} className="col-4 " /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/galery">Galeria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Endereços</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/schedules">Agendamentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}