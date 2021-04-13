import * as React from 'react';
import FormContainer from '../common/components/FormContainer';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  cep: '',
  street: '',
  neighborhood: '',
  city: '',
  state: '',
  startData: '',
  position: '',
  salary: '',
  password: '',
  type: '',
  crm: '',
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
          value={form.name}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="cep"
          className="fadeIn second"
          name="name"
          placeholder="Nome"
        />
        <input
          value={form.email}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="email"
          className="fadeIn second"
          name="email"
          placeholder="e-mail"
        />
        <input
          value={form.phone}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="phone"
          className="fadeIn second"
          name="phone"
          placeholder="Telefone"
        />
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
        <input
          value={form.startData}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="startData"
          className="fadeIn third"
          name="startData"
          placeholder="Data de início"
        />
        <input
          value={form.position}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="position"
          className="fadeIn third"
          name="position"
          placeholder="Cargo"
        />
        {form.position === 'Medico' || form.position === 'medico' || form.position === 'Médico' || form.position === 'médico'
          ? (
            <div>
              <input
                value={form.type}
                onChange={(event) => handleFormChange(event)}
                type="text"
                id="type"
                className="third"
                name="type"
                placeholder="Especialidade"
              />
              <input
                value={form.crm}
                onChange={(event) => handleFormChange(event)}
                type="text"
                id="crm"
                className="third"
                name="crm"
                placeholder="CRM"
              />
            </div>
          )
          : <div> </div>}
        <input
          value={form.password}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="password"
          className="fadeIn third"
          name="password"
          placeholder="Senha"
        />
      </div>
      <div className="row col-12 d-flex justify-content-center">
        <input type="submit" className="fadeIn fourth" value="Cadastrar" />
      </div>
      <code>{JSON.stringify(form, null, '')}</code>
    </form>
  );
}

function EmployeeSignup() {
  function handleSubmit(form) {
    const body = {
      nome: form.name,
      email: form.email,
      telefone: form.phone,
      cep: form.cep,
      logradouro: form.street,
      bairro: form.neighborhood,
      cidade: form.city,
      estado: form.state,
      dataDeInicio: form.startData,
      cargo: form.position,
      especialidade: form.type,
      crm: form.crm,
      senha: form.senha,
    };
    console.log(body);

    // @TODO Integração
    alert('foi');
  }

  return (
    <FormContainer
      title="Cadastrar Funcionario"
      srcImg=""
    >
      <Form onSubmit={(form) => handleSubmit(form)} />
    </FormContainer>
  );
}

export default EmployeeSignup;
