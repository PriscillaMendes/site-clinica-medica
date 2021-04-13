const employeeMock = [
  {
    id: 0,
    nome: 'Mike',
    email: 'mike@sa.com',
    telefone: '32324575',
    cep: '86360000',
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    bairro: 'Bandeirantes',
    logradouro: 'Av. Pampulha',
    cargo: 'medico',
    salario: '2000,00',
    especialidade: 'Clinico',
    crm: 'crm-2020',
  },
  {
    id: 1,
    nome: 'Suley',
    email: 'suley@sa.com',
    telefone: '32324575',
    cep: '86360000',
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    bairro: 'Bandeirantes',
    logradouro: 'Av. Pampulha',
    cargo: 'medico',
    salario: '2000,00',
    especialidade: 'Clinico',
    crm: 'crm-2020',
  },
  {
    id: 2,
    nome: 'Buh',
    email: 'biuosfh@sa.com',
    telefone: '32324575',
    cep: '86360000',
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    bairro: 'Bandeirantes',
    logradouro: 'Av. Pampulha',
    cargo: 'medico',
    salario: '2000,00',
    especialidade: 'monstrooes',
    crm: 'crm-2020',
  },
];

const employeeColumns = [
  'Id',
  'Nome',
  'email',
  'Telefone',
  'Cidade',
  'Cep',
  'Estado',
  'Logradouro',
  'Bairro',
  'Cargo',
  'Salário',
  'Especialidade',
  'CRM',
];

function EmployeeItem(props) {
  const {
    index,
    name,
    email,
    telefone,
    cep,
    city,
    state,
    street,
    neighborhood,
    position,
    salary,
    type,
    crm,
  } = props;

  return (
    <tr className="p-3">
      <th scope="row" className="p-3">{index}</th>
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{telefone}</td>
      <td className="p-2">{city}</td>
      <td className="p-2">{cep}</td>
      <td className="p-2">{state}</td>
      <td className="p-2">{street}</td>
      <td className="p-2">{neighborhood}</td>
      <td className="p-2">{position}</td>
      <td className="p-2">{salary}</td>
      <td className="p-2">{type}</td>
      <td className="p-2">{crm}</td>
    </tr>
  );
}

function EmployeeHeader(props) {
  const { columns } = props;
  return (
    <tr>
      {columns.map((column) => (
        <th scope="col">{column}</th>
      ))}
    </tr>
  );
}

function ListEmployee() {
  return (
    <div className="p-5">
      <div className="row d-flex justify-content-center">
        <div id="" className="">
          <table className="table table-bordered bg-white rounded shadow">
            <thead>
              <EmployeeHeader columns={employeeColumns} />
            </thead>
            <tbody className="">
              {employeeMock.map((value, index) => (
                <EmployeeItem
                  key={value.id}
                  index={index + 1}
                  name={value.nome}
                  email={value.email}
                  telefone={value.telefone}
                  cep={value.cep}
                  city={value.cidade}
                  state={value.estado}
                  street={value.logradouro}
                  neighborhood={value.bairro}
                  position={value.cargo}
                  salary={value.salario}
                  type={value.especialidade}
                  crm={value.crm}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListEmployee;
