import * as React from 'react';
import userLogin from '../../images/singup-icon-sulley.jpg';
import FormContainer from '../common/components/FormContainer';

const initialForm = {
  doctor: '',
  date: '',
  schedule: '',
};

const role = [
  'Angiologista',
  'Cardiologista',
  'Cirurgião',
  'Clínico geral',
  'Dermatologista',
  'Endocrinologista',
  'Geriatra',
  'Ginecologista',
  'Infectologista',
  'Oftalmologista',
  'Oncologista',
  'Ortopedista',
  'Pediatra',
  'Psiquiatra',
  'Reumatologista',
  'Urologista',
];

function Form(props) {
  const { onSubmit } = props;
  const [form, setForm] = React.useState(initialForm);
  const [doctorRole, setDoctorRole] = React.useState('');
  const [doctors, setDoctors] = React.useState([]);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSelectDoctorRole(event) {
    const { value } = event.target;
    setDoctorRole(value);
  }

  function handleFormSubmit(event, newForm) {
    event.preventDefault();
    onSubmit(newForm);
  }

  React.useEffect(() => {
    // @TODO Integração
    setDoctors([
      { name: 'Teste Nome Medico', id: 1 },
    ]);
  }, [doctorRole]);

  return (
    <form onSubmit={(event) => handleFormSubmit(event)} className="row">
      <div>
        <select
          value={doctorRole}
          onChange={(event) => handleSelectDoctorRole(event)}
          id="role"
          className="fadeIn second"
          name="role"
        >
          <option key={0} value="">Especialidade</option>
          {role.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <select
          value={form.doctor}
          onChange={(event) => handleFormChange(event)}
          id="doctor"
          className="fadeIn second"
          name="doctor"
        >
          <option key={0} value="">X</option>
          {doctors.map((doctor) => (
            <option
              key={doctor.id}
              value={doctor.name}
            >
              {doctor.name}
            </option>
          ))}
        </select>
        <input
          value={form.date}
          onChange={(event) => handleFormChange(event)}
          type="date"
          id="date"
          className="fadeIn third"
          name="date"
          placeholder="Data da Consuluta"
        />
        <input
          value={form.schedule}
          onChange={(event) => handleFormChange(event)}
          type="time"
          id="schedule"
          className="fadeIn third"
          name="schedule"
          placeholder="Horário disponível"
        />
      </div>
      <div id="formFooter">
        <input type="submit" className="fadeIn fourth" value="Cadastrar" />
      </div>
      <pre>
        <code>{JSON.stringify(form, null, '')}</code>
      </pre>
    </form>
  );
}

function Schedules() {
  function handleSubmit(form) {
    const body = {
      data: form.date,
      horario: form.schedule,
      paciente: form, // ?
      medico: form.doctor,
    };
    console.log(body);

    alert('foi');
  }

  return (
    <FormContainer
      title="Cadastrar Agendamento"
      srcImg={userLogin}
    >
      <Form onSubmit={(form) => handleSubmit(form)} />
    </FormContainer>
  );
}

export default Schedules;
