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
    altura: '135cm',
    tiposanguineo: 'B+-',
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
    altura: '185cm',
    tiposanguineo: 'M++',
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
    altura: '120cm',
    tiposanguineo: 'H++',
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
  'Altura',
  'Tipo Sanguíneo',
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
    height,
    bloodType,
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
      <td className="p-2">{height}</td>
      <td className="p-2">{bloodType}</td>
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

function ListPatient() {
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
                  height={value.altura}
                  bloodType={value.tiposanguineo}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListPatient;
