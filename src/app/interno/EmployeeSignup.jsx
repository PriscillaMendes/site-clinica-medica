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
      ...(newForm.startData && { contrato_date: newForm.startData }),
      ...(newForm.position && { role: newForm.position }),
      ...(newForm.type && { especialidade: newForm.type }),
      ...(newForm.crm && { CRM: newForm.crm }),
      ...(newForm.password && { password: newForm.password }),
      ...(newForm.salary && { salario: newForm.salary }),
    });

    const newEmployee = await fetch('http://localhost:3000/user', {
      method: 'POST',
      body,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => response.json());

    if (newEmployee) {
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
          value={form.salary}
          onChange={(event) => handleFormChange(event)}
          type="text"
          id="salary"
          className="fadeIn third"
          name="salary"
          placeholder="Salário"
        />
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
    </form>
  );
}

function EmployeeSignup() {
  return (
    <FormContainer
      title="Cadastrar Funcionario"
      srcImg=""
    >
      <Form />
    </FormContainer>
  );
}

export default EmployeeSignup;
