import React from 'react'
import '../css/Card.css';
import userLogin from '../images/user-mike-login.jpg';

export default class Login extends React.Component{
    render(){
        return(
            <div className="mt-4">
               <div className="wrapper-login fadeInDown-login">
            <div id="formContent-login">
                <h2 className="active"> Entrar </h2>

                <div className="fadeIn-login first-login">
                <img className="user-logo-size" src={userLogin} id="icon" alt="User Icon" />
                </div>

                <form>
                <input type="text" id="login" className="fadeIn-login second-login" name="login" placeholder="Login" />
                <input type="text" id="password" className="fadeIn-login third-login" name="login" placeholder="Senha" />
                <input type="submit" className="fadeIn fourth" value="Entrar" />
                </form>

                <div id="formFooter-login">
                <a className="underlineHover" href="#">Queceu a senha? Nóoo</a>
                </div>

            </div>
            </div>
            </div>
           
        );
    }
}