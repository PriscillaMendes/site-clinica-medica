const employeeMock = [
  {
    id: 0,
    nome: 'Mike',
    email: 'mike@sa.com',
    telefone: '32324575',
    especialidade: 'assutador',
    medico: 'Suley',
    data: '20-10-2020',
    hora: '10:10',
  },
  {
    id: 1,
    nome: 'Suley',
    email: 'suley@sa.com',
    telefone: '32324575',
    especialidade: 'fofinho',
    medico: 'Suley',
    data: '20-10-2020',
    hora: '10:10',
  },
  {
    id: 2,
    nome: 'Buh',
    email: 'biuosfh@sa.com',
    telefone: '32324575',
    especialidade: 'uh',
    medico: 'Suley',
    data: '20-10-2020',
    hora: '10:10',
  },
];

const employeeColumns = [
  'Id',
  'Nome',
  'email',
  'Telefone',
  'Especialidade',
  'Medico',
  'data',
  'hora',
];

function PatientItem(props) {
  const {
    index,
    name,
    email,
    phone,
    type,
    doctor,
    data,
    hour,
  } = props;

  return (
    <tr className="p-3">
      <th scope="row" className="p-3">{index}</th>
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{phone}</td>
      <td className="p-2">{type}</td>
      <td className="p-2">{doctor}</td>
      <td className="p-2">{data}</td>
      <td className="p-2">{hour}</td>
    </tr>
  );
}

function PatientHeader(props) {
  const { columns } = props;
  return (
    <tr>
      {columns.map((column) => (
        <th scope="col">{column}</th>
      ))}
    </tr>
  );
}

function ListPatientSchedules() {
  return (
    <div className="p-5">
      <div className="row d-flex justify-content-center">
        <div id="" className="">
          <table className="table table-bordered bg-white rounded shadow">
            <thead>
              <PatientHeader columns={employeeColumns} />
            </thead>
            <tbody className="">
              {employeeMock.map((value, index) => (
                <PatientItem
                  key={value.id}
                  index={index + 1}
                  name={value.nome}
                  email={value.email}
                  phone={value.telefone}
                  type={value.especialidade}
                  doctor={value.medico}
                  data={value.data}
                  hour={value.hora}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListPatientSchedules;
