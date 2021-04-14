import * as React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import userLogin from '../../images/user-mike-login.jpg';
import FormContainer from '../common/components/FormContainer';

const initialForm = {
  login: '',
  password: '',
};

const LoginForm = (props) => {
  const { onSubmit } = props;
  const [form, setForm] = React.useState(initialForm);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input type="text" value={form.login} onChange={(event) => handleFormChange(event)} id="login" className="fadeIn-login second-login" name="login" placeholder="Login" />
      <input type="password" value={form.password} onChange={(event) => handleFormChange(event)} id="password" className="fadeIn-login third-login" name="password" placeholder="Senha" />
      <input type="submit" className="fadeIn fourth" value="Entrar" />
    </form>
  );
};

const Login = () => {
  const navigate = useNavigate();

  async function handleLoginUser(form) {
    const body = JSON.stringify({
      email: form.login,
      password: form.password,
    });

    const auth = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => response.json());

    if (!auth.erro) {
      window.localStorage.setItem('token', auth.id);
      window.localStorage.setItem('role', auth.role);
      navigate('/auth/home-funcionario');
    }
  }

  return (
    <FormContainer
      title="Entrar"
      srcImg={userLogin}
    >
      <LoginForm onSubmit={(form) => handleLoginUser(form)} />
      <div id="formFooter-login">
        <Link className="underlineHover" to="/esqueceu-senha">Queceu a senha? Nóoo</Link>
      </div>
    </FormContainer>
  );
};

export default Login;
