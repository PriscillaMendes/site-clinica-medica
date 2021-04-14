const doctorMock = [
  {
    id: 0,
    nome: 'Pedro Garcia',
    email: 'pedrogarcia@gmail.com',
    telefone: '(31) 99654-2135',
    data: '20-04-2021',
    hora: '10:00',
  },
  {
    id: 1,
    nome: 'Beatriz Oliveira',
    email: 'beatriz28@hotmail.com',
    telefone: '(31) 99124-8091',
    data: '25-04-2021',
    hora: '15:00',
  },
];

const doctorColumns = [
  // 'Id',
  'Nome do Cliente',
  'email',
  'Telefone',
  'data',
  'horario',
];

function DoctorItem(props) {
  const {
    // index,
    name,
    email,
    phone,
    data,
    hour,
  } = props;

  return (
    <tr className="p-3">
      {/* <th scope="row" className="p-3">{index}</th> */}
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{phone}</td>
      <td className="p-2">{data}</td>
      <td className="p-2">{hour}</td>
    </tr>
  );
}

function DoctorHeader(props) {
  const { columns } = props;
  return (
    <tr>
      {columns.map((column) => (
        <th scope="col">{column}</th>
      ))}
    </tr>
  );
}

function ListDoctorSchedules() {
  return (
    <div className="p-5">
      <div className="row d-flex justify-content-center">
        <div id="" className="">
          <table className="table table-bordered bg-white rounded shadow">
            <thead>
              <DoctorHeader columns={doctorColumns} />
            </thead>
            <tbody className="">
              {doctorMock.map((value, index) => (
                <DoctorItem
                  key={value.id}
                  index={index + 1}
                  name={value.nome}
                  email={value.email}
                  phone={value.telefone}
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

export default ListDoctorSchedules;
