import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import userLogin from '../../../images/user-mike-login.jpg';


const initialForm = {
    login: '',
    password: '',
}

const LoginForm = (props) => {
    const { onSubmit } = props;
    const [form, setForm] = useState(initialForm);

    function handleFormChange(event) {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(form)
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" value={form.login} onChange={(event) => handleFormChange(event)} id="login" className="fadeIn-login second-login" name="login" placeholder="Login" />
            <input type="text" value={form.password} onChange={(event) => handleFormChange(event)} id="password" className="fadeIn-login third-login" name="password" placeholder="Senha" />
            <input type="submit" className="fadeIn fourth" value="Entrar" />
        </form>
    )
}

const Login = () => {
    const navigate = useNavigate();

    function handleLoginUser(form) {
        // mock da autenticação
        window.localStorage.setItem('token', 'meu_token_autenticado')
        navigate('/home-funcionario')
    }

    return (
        <div className="mt-4">
            <div className="wrapper-login fadeInDown-login">
                <div id="formContent-login">
                    <h2 className="active"> Entrar </h2>
                    <div className="fadeIn-login first-login">
                        <img className="user-logo-size" src={userLogin} id="icon" alt="User Icon" />
                    </div>
                    <LoginForm onSubmit={(form) => handleLoginUser(form)} />
                    <div id="formFooter-login">
                        <a className="underlineHover" href="#">Queceu a senha? Nóoo</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;