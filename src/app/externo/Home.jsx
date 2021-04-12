import React from 'react';
import buildImg from '../../images/clinica/faixada.jpg';

export default function Home() {
  return (
    <div className="mt-5 p-3 backgroud-texture">
      <div className="row d-flex justify-content-center">
        {/* <div className="col-2" /> */}
        <div className="col-8 container">
          <img src={buildImg} alt="" className="mt-3 border border-primary rounded w-100" />
          <div className="card-body">
            <h6 className="card-title">A Clínica Monstro é especializada nos melhores tratamentos de todas as áreas para todos os tipos de monstros</h6>
          </div>
        </div>
        {/* <div className="col" /> */}
      </div>
      <div className="row mt-5 align-self-center">
        <div className="col" />
        <div className="col-3 card card_home  d-flex justify-content-center">
          <div className="card-body ">
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
        <div className="col-3 card card_home ">
          <div className="card-body ">
            <div className="d-flex justify-content-center">
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
        <div className="col-3 card card_home ">
          <div className="card-body ">
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
