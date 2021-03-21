import React from 'react'
import '../css/CardCadastro.css';
import userLogin from '../images/singup-icon-sulley.jpg';

export default class Agendamentos extends React.Component{
    render(){
        return(
            <div className="mt-4">
               <div className="wrapper fadeInDown">
                <div id="formContent">
                <h2 className="inactive"> Entrar </h2>
                    <h2 className="active underlineHover">Cadastrar</h2>

                    <div className="fadeIn first">
                    <img className="user-logo-size" src={userLogin} id="icon" alt="User Icon" />
                    </div>

                    <div className="row">
                    <form className="col-6">
    
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Nome" />
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="email" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Senha" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Telefone" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="CEP" />
                    </form>
                    <form className="col-6">
                    
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Especialidade" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Médico" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Data" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Horário" />
                    
                    </form>
                    </div>
                    <div id="formFooter">
                        <input type="submit" className="fadeIn fourth" value="Cadastrar" />
                    </div>

                </div>
            </div>
            </div>
           
        );
    }
}