import React from 'react';
import buildImg from '../../images/back-build.png';

export default function Home() {
  return (
    <div className="mt-5 p-3 backgroud-texture">
      <div className="row d-flex justify-content-center">
        <div className="col-5 ">
          <img src={buildImg} alt="" className="mt-3 w-100 h-75" />
        </div>
        <div className="card-body col-3 text-white bg-dark h-75 card-min">
          <h5 className="">A CLÍNICA MONSTRO </h5>
          é especializada nos melhores tratamentos de todas as áreas para todos os tipos de monstros
        </div>
        {/* <div className="col" /> */}
      </div>
      <div className="div-diagonal col-12"> </div>
      <div className="row mt-2 align-self-center">
        <div className="col" />
        <div className="col-3 card card_home bg-dark d-flex justify-content-center">
          <div className="card-body text-white">
            <div className="d-flex justify-content-center">
              <i className="row fa fa-bullseye " aria-hidden="true" style={{ 'font-size': '60px' }} />
            </div>
            <h5 className="row card-title d-flex justify-content-center mt-2">Missão</h5>
            <p>
              Proporcionar saúde e bem-estar físico aos monstros por meio de carinho e dedicação,
              do uso da tecnologia e do aprimoramento constante dos profissionais,
              contribuindo com a saúde pública e com a busca da felicidade dos
              monstros.
            </p>
          </div>
        </div>
        <div className="col" />
        <div className="col-3 card card_home bg-dark">
          <div className="card-body text-white">
            <div className="d-flex justify-content-center ">
              <i className="row fa fa-search " aria-hidden="true" style={{ 'font-size': '60px' }} />
            </div>
            <h5 className="row card-title d-flex justify-content-center mt-2">Visão</h5>
            <p>
              Buscar a excelência no tratamento de Monstros e Monstras
              oferecendo tratamento humano e solidário.
            </p>
          </div>
        </div>
        <div className="col" />
        <div className="col-3 card card_home bg-dark">
          <div className="card-body text-white">
            <div className="d-flex justify-content-center">
              <i className="row fa fa-archive " aria-hidden="true" style={{ 'font-size': '60px' }} />
            </div>
            <h5 className="row card-title d-flex justify-content-center mt-2">Valores</h5>
            <p>
              Valorização da vida, Conhecimento, Responsabilidade social e
              ambiental, Ética, Pioneirismo tecnológico, Excelência, Monstroalização
            </p>
          </div>
        </div>
        <div className="col" />
        <br />
      </div>
    </div>
  );
}
