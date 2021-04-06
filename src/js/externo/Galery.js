import React from 'react';

import galery_img0 from '../../images/clinica/galery0.jpg';
import galery_img1 from '../../images/clinica/galery1.jpeg';
import galery_img2 from '../../images/clinica/galery2.gif';
import galery_img3 from '../../images/clinica/galery3.jpg';
import galery_img4 from '../../images/clinica/galery5.jpg';
import back_img from '../../images/background-sulley.png';
import '../../App.css';
export default class Galery extends React.Component {


    render() {
        return (
            <div className="row col-12 body-size">
                <div className="col-4">
                    <h1 className="text-light">Galeria</h1>
                    <img className="col mt-5" src={back_img} />
                </div>
                <br />
                <div className="col align-self-center ">
                    <div className="col-8 ">
                        <div id="carousel1" className="carousel slide " data-ride="carousel">
                            <div className="carousel-inner ">
                                <div className="carousel-item active ">
                                    <img className="d-block w-100 border border-dark shadow" src={galery_img2} style={{ "height": "300px" }} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 border border-dark shadow" src={galery_img1} style={{ "height": "300px" }} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 border border-dark shadow" src={galery_img0} style={{ "height": "300px" }} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 border border-dark shadow" src={galery_img3} style={{ "height": "300px" }} alt="4 slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 border border-dark shadow" src={galery_img4} style={{ "height": "300px" }} alt="5 slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}