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
  height: '',
  bloodtype: '',
  weight: '',
};

function Form() {
  const [form, setForm] = React.useState(initialForm);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleFormSubmit(event, newForm) {
    event.preventDefault();
    const body = JSON.stringify({
      ...(newForm.name && { nome: newForm.name }),
      ...(newForm.email && { email: newForm.email }),
      ...(newForm.phone && { telefone: newForm.phone }),
      ...(newForm.cep && { cep: newForm.cep }),
      ...(newForm.street && { logradouro: newForm.street }),
      ...(newForm.neighborhood && { bairro: newForm.neighborhood }),
      ...(newForm.city && { cidade: newForm.city }),
      ...(newForm.state && { estado: newForm.state }),
      ...(newForm.height && { altura: newForm.height }),
      ...(newForm.bloodtype && { tiposanguineo: newForm.bloodtype }),
      ...(newForm.weight && { peso: newForm.weight }),
      password: 'senhavazia',
      role: 'paciente',
    });

    const newPatient = await fetch('http://localhost:3000/user', {
      method: 'POST',
      body,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => response.json());

    if (newPatient) {
      setForm(initialForm);
    }
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
        {/* <input
          value={form.cep}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="cep"
          className="fadeIn second"
          name="cep"
          placeholder="CEP"
        /> */}
        {/* <input
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
        /> */}
        <input
          value={form.weight}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="weight"
          className="fadeIn third"
          name="weight"
          placeholder="Peso"
        />
        <input
          value={form.height}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="height"
          className="fadeIn third"
          name="height"
          placeholder="Altura"
        />
        <input
          value={form.bloodtype}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="bloodtype"
          className="fadeIn third"
          name="bloodtype"
          placeholder="Tipo sanguíneo"
        />
      </div>
      <div className="row col-12 d-flex justify-content-center ">
        <input type="submit" className="fadeIn fourth" value="Cadastrar" />
      </div>
    </form>
  );
}

function PatientSignup() {
  return (
    <FormContainer
      title="Cadastrar Paciente"
      srcImg=""
    >
      <Form />
    </FormContainer>
  );
}

export default PatientSignup;
