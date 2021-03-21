import React from 'react'

import '../css/Header.css';
import logo_img from '../images/clinica/logo2.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className="col-12 header-size">
                <div className="footer-color d-flex justify-content-center col-12 mt-5">
                    <div className="">
                        Rua dos maiores Monstros, 736, Cidade Monstro, Monstropolis. Tel.:66-69696-9669
                    </div>
                </div>
            </div>
        );

    }
}