import React from 'react';

import galeryImg0 from '../../images/clinica/galery0.jpg';
import galeryImg1 from '../../images/clinica/galery1.jpeg';
import galeryImg2 from '../../images/clinica/galery2.gif';
import galeryImg3 from '../../images/clinica/galery3.jpg';
import galeryImg4 from '../../images/clinica/galery5.jpg';
import backImg from '../../images/background-sulley.png';

function Galery() {
  return (
    <div className="row col-12 body-size">
      <div className="col-4">
        <h1 className="text-light">Galeria</h1>
        <img className="col mt-5 card-min" alt="" src={backImg} />
      </div>
      <br />
      <div className="col align-self-center ">
        <div className="col-8 card-min">
          <div id="carousel1" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner ">
              <div className="carousel-item active ">
                <img className="d-block w-100 border " src={galeryImg2} style={{ height: '300px' }} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 border " src={galeryImg1} style={{ height: '300px' }} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 border " src={galeryImg0} style={{ height: '300px' }} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 border " src={galeryImg3} style={{ height: '300px' }} alt="4 slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 border " src={galeryImg4} style={{ height: '300px' }} alt="5 slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galery;
