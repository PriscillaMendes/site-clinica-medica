import * as React from 'react';
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
    <form onSubmit={(event) => handleFormSubmit(event, form)} className="row">
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
      <div id="formFooter">
        <input type="submit" className="fadeIn fourth" value="Cadastrar" />
      </div>
      <code>{JSON.stringify(form, null, '')}</code>
    </form>
  );
}

function PatientSignup() {
  function handleSubmit(form) {
    const body = {
      cep: form.cep,
      logradouro: form.street,
      bairro: form.neighborhood,
      cidade: form.city,
      estado: form.state,
    };
    console.log(body);

    // @TODO Integração
    alert('foi');
  }

  return (
    <FormContainer
      title="Cadastrar Paciente"
      srcImg=""
    >
      <Form onSubmit={(form) => handleSubmit(form)} />
    </FormContainer>
  );
}

export default PatientSignup;
