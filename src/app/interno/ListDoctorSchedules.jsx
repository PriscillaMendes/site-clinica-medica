const doctorMock = [
  {
    id: 0,
    nome: 'Mike',
    email: 'mike@sa.com',
    telefone: '1875432324575',
    data: '20-10-2020',
    hora: '10:10',
  },
  {
    id: 1,
    nome: 'Suley',
    email: 'suley@sa.com',
    telefone: '9864232324575',
    data: '20-10-2020',
    hora: '10:10',
  },
  {
    id: 2,
    nome: 'Buh',
    email: 'biuosfh@sa.com',
    telefone: '9658732324575',
    data: '20-10-2020',
    hora: '10:10',
  },
];

const doctorColumns = [
  'Id',
  'Nome do Cliente',
  'email',
  'Telefone',
  'data',
  'hora',
];

function DoctorItem(props) {
  const {
    index,
    name,
    email,
    phone,
    data,
    hour,
  } = props;

  return (
    <tr className="p-3">
      <th scope="row" className="p-3">{index}</th>
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
function phoneMask(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{5})(\d)/, '$1');
}
function hourMask(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{2})/, '$1:$2');
}
function dataMask(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{2})(\d{4})/, '$1-$2-$3');
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
                  phone={phoneMask(value.telefone)}
                  data={dataMask(value.data)}
                  hour={hourMask(value.hora)}
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
