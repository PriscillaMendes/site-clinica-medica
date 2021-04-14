import * as React from 'react';
import userLogin from '../../images/singup-icon-sulley.jpg';
import FormContainer from '../common/components/FormContainer';

const initialForm = {
  cep: '',
  street: '',
  neighborhood: '',
  city: '',
  state: '',
};

function Form(props) {
  const { onSubmit } = props;
  const [form, setForm] = React.useState(initialForm);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit(event, newForm) {
    event.preventDefault();
    onSubmit(newForm);
  }

  return (
    <form onSubmit={(event) => handleFormSubmit(event, form)} className="row ">
      <div>
        <input
          value={form.cep}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="cep"
          className="fadeIn second"
          name="cep"
          placeholder="CEP"
        />
        <input
          value={form.street}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="street"
          className="fadeIn third"
          name="street"
          placeholder="Logradouro"
        />
        <input
          value={form.neighborhood}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="neighborhood"
          className="fadeIn third"
          name="neighborhood"
          placeholder="Bairro"
        />
        <input
          value={form.city}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="city"
          className="fadeIn third"
          name="city"
          placeholder="Cidade"
        />
        <input
          value={form.state}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="state"
          className="fadeIn third"
          name="state"
          placeholder="Estado"
        />
      </div>
      <div className="row col-12 d-flex justify-content-center ">
        <input type="submit" className="row d-flex justify-content-center  fadeIn fourth" value="Cadastrar" />
      </div>
    </form>
  );
}

function Address() {
  async function handleSubmit(form) {
    const body = JSON.stringify({
      cep: form.cep,
      logradouro: form.street,
      bairro: form.neighborhood,
      cidade: form.city,
      estado: form.state,
    });

    const newAddress = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      body,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => response.json());

    console.log(newAddress);
    // const response = await api.post('/')
    // console.log(body);

    // @TODO Integração
    alert('foi');
  }

  return (
    <FormContainer
      title="Cadastrar Endereço"
      srcImg={userLogin}
    >
      <Form onSubmit={(form) => handleSubmit(form)} />
    </FormContainer>
  );
}

export default Address;
// <div className="mt-4">
//   <div className="wrapper fadeInDown">
//     <div id="formContent">
//       <h2 className="active underlineHover">Cadastrar Endereço</h2>
//       <div className="fadeIn first">
//         <img className="user-logo-size" src={userLogin} id="icon" alt="User Icon" />
//       </div>
//     </div>
//   </div>
// </div>
