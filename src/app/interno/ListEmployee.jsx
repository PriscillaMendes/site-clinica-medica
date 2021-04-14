import * as React from 'react';

const employeeColumns = [
  // 'Id',
  'Nome',
  'email',
  'Telefone',
  // 'Cidade',
  // 'Cep',
  // 'Estado',
  // 'Logradouro',
  // 'Bairro',
  'Cargo',
  'Salário',
  'Especialidade',
  'CRM',
];

function EmployeeItem(props) {
  const {
    // index,
    name,
    email,
    telefone,
    // cep,
    // city,
    // state,
    // street,
    // neighborhood,
    position,
    salary,
    type,
    crm,
  } = props;

  return (
    <tr className="p-3">
      {/* <th scope="row" className="p-3">{index}</th> */}
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{telefone}</td>
      {/* <td className="p-2">{city}</td> */}
      {/* <td className="p-2">{cep}</td> */}
      {/* <td className="p-2">{state}</td> */}
      {/* <td className="p-2">{street}</td> */}
      {/* <td className="p-2">{neighborhood}</td> */}
      <td className="p-2">{position}</td>
      <td className="p-2">{salary}</td>
      <td className="p-2">{type || '-'}</td>
      <td className="p-2">{crm || '-'}</td>
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
  const [employees, setEmployees] = React.useState([]);

  React.useEffect(() => {
    async function getEmployees() {
      const responseEmployees = await fetch('http://localhost:3000/user/role/funcionario').then((res) => res.json());
      if (responseEmployees) {
        setEmployees((prev) => [...prev, ...responseEmployees]);
      }
      const responseDoctor = await fetch('http://localhost:3000/user/role/medico').then((res) => res.json());
      if (responseDoctor) {
        setEmployees((prev) => [...prev, ...responseDoctor]);
      }
      const responseAdmin = await fetch('http://localhost:3000/user/role/admin').then((res) => res.json());
      if (responseAdmin) {
        setEmployees((prev) => [...prev, ...responseAdmin]);
      }
    }

    getEmployees();
  }, []);

  return (
    <div className="p-5">
      <div className="row d-flex justify-content-center">
        <div id="" className="">
          <table className="table table-bordered bg-white rounded shadow">
            <thead>
              <EmployeeHeader columns={employeeColumns} />
            </thead>
            <tbody className="">
              {employees.map((value, index) => (
                <EmployeeItem
                  key={value.id}
                  index={index + 1}
                  name={value.nome}
                  email={value.email}
                  telefone={value.telefone}
                  // cep={value.cep}
                  // city={value.cidade}
                  // state={value.estado}
                  // street={value.logradouro}
                  // neighborhood={value.bairro}
                  position={value.role}
                  salary={value.salario}
                  type={value.especialidade}
                  crm={value.CRM}
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
