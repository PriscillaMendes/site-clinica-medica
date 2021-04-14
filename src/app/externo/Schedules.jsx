import * as React from 'react';
import userLogin from '../../images/singup-icon-sulley.jpg';
import FormContainer from '../common/components/FormContainer';

const initialForm = {
  doctor: '',
  date: '',
  schedule: '',
  email: '',
};

const role = [
  'Oftalmologista',
  // 'Angiologista',
  // 'Cardiologista',
  // 'Cirurgião',
  // 'Clínico geral',
  // 'Dermatologista',
  // 'Endocrinologista',
  // 'Geriatra',
  // 'Ginecologista',
  // 'Infectologista',
  // 'Oncologista',
  // 'Ortopedista',
  // 'Pediatra',
  // 'Psiquiatra',
  // 'Reumatologista',
  // 'Urologista',
];

const medicoMock = [
  {
    id: 712812,
    name: 'Luciana Soares Monteiro',

  },
  {
    id: 7128,
    name: 'tested',
  },
  {
    id: 8717888,
    name: 'Maria',
  },
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
    setForm(initialForm);
  }

  React.useEffect(() => {
    console.log(doctorRole);
    if (doctorRole === role[0]) {
      setDoctors(medicoMock);
    }
    // async function getDoctors() {
    //   const doctorsResponse = await fetch('http://localhost:3000/users')
    //     .then((response) => response.json());
    //   if (doctorsResponse) {
    //   }
    // }

    // getDoctors();
  }, [doctorRole]);

  return (
    <div className="row d-flex justify-content-center ">
      <form onSubmit={(event) => handleFormSubmit(event, form)} className="col-9 form-group">
        <div className="">
          <select
            value={doctorRole}
            onChange={(event) => handleSelectDoctorRole(event)}
            id="role"
            className="fadeIn second form-group form-control"
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
            className="fadeIn second form-group form-control"
            name="doctor"
          >
            <option key={0} value="">Selecione o médico</option>
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
            className="fadeIn third form-group form-control"
            name="date"
            placeholder="Data da Consuluta"
          />
          <input
            value={form.email}
            onChange={(event) => handleFormChange(event)}
            type="email"
            id="email"
            className="fadeIn third form-group form-control"
            name="email"
            placeholder="Email do paciente"
          />
          <input
            value={form.schedule}
            onChange={(event) => handleFormChange(event)}
            type="time"
            id="schedule"
            className="fadeIn third form-group form-control"
            name="schedule"
            placeholder="Horário disponível"
          />
        </div>
        <div className="justify-content-end">
          <input type="submit" className="fadeIn fourth " value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

function Schedules() {
  async function handleSubmit(form) {
    console.log(form);
    const doctors = await fetch('http://localhost:3000/user/role/medico').then((res) => res.json());

    const selectedDoctor = doctors.find((doctor) => doctor.name === form.medico);

    const body = JSON.stringify({
      ...(form.date && { data: form.date }),
      ...(form.doctor && { medico: selectedDoctor?.id }),
      ...(form.schedule && { horario: form.schedule }),
      paciente: '',
    });

    const newEmployee = await fetch('http://localhost:3000/agenda', {
      method: 'POST',
      body,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => response.json());

    console.log(newEmployee);
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
