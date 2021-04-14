import * as React from 'react';

const employeeColumns = [
  // 'Id',
  'Nome',
  'email',
  'Telefone',
  'Altura',
  'Peso',
  'Tipo Sanguíneo',
];

function EmployeeItem(props) {
  const {
    name,
    email,
    telefone,
    height,
    weight,
    bloodType,
  } = props;

  return (
    <tr className="p-3">
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{telefone}</td>
      <td className="p-2">{height}</td>
      <td className="p-2">{weight}</td>
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
  const [patient, setpPatient] = React.useState([]);

  React.useEffect(() => {
    async function getpatient() {
      const response = await fetch('http://localhost:3000/user/role/paciente').then((res) => res.json());
      if (response) {
        setpPatient(response);
      }
    }

    getpatient();
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
              {patient.map((value, index) => (
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
                  weight={value.peso}
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
