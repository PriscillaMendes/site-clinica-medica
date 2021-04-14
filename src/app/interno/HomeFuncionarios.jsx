import React from 'react';
import buildImg from '../../images/back-build.png';

function HomeFuncionarios() {
  return (
    <div className="row">
      <div className="mt-5 p-3 backgroud-texture">
        <div className="row d-flex justify-content-center">
          <div className="col-5 ">
            <img src={buildImg} alt="" className="mt-3 w-100 h-75" />
          </div>
          <div className="col-2">
            <div className="row pt-5 card-body col-3 text-white bg-dark h-40 card-min">
              <h5 className="">A CLÍNICA MONSTRO </h5>
              Especializada nos melhores tratamentos de todas as áreas para todos os tipos de
              monstros
            </div>
            <div className="row p-4"> </div>
            <div className="row pt-3 card-body col-3 text-white bg-dark h-40 card-min">
              A maior clínica de monstro do mundo conta com a sua ajuda
              para torna a vida dos mostros mais assustadoramente sadia.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFuncionarios;
