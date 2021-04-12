const addressMock = [
  {
    id: 0,
    cep: '86360000',
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    bairro: 'Bandeirantes',
    logradouro: 'Av. Pampulha',
  },
  {
    id: 1,
    cep: '86360000',
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    bairro: 'Bandeirantes',
    logradouro: 'Av. Pampulha',
  },
  {
    id: 2,
    cep: '86360000',
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    bairro: 'Bandeirantes',
    logradouro: 'Av. Pampulha',
  },
];

const adressColumns = [
  'Id',
  'Cidade',
  'Cep',
  'Estado',
  'Logradouro',
  'Bairro',
];

function AdressItem(props) {
  const {
    index,
    cep,
    city,
    state,
    street,
    neighborhood,
  } = props;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{city}</td>
      <td>{cep}</td>
      <td>{state}</td>
      <td>{street}</td>
      <td>{neighborhood}</td>
    </tr>
  );
}

function AdressHeader(props) {
  const { columns } = props;
  return (
    <tr>
      {columns.map((column) => (
        <th scope="col">{column}</th>
      ))}
    </tr>
  );
}

function ListAddress() {
  return (
    <div className="row">
      <div id="formContent" className="container">
        <table className="table">
          <thead>
            <AdressHeader columns={adressColumns} />
          </thead>
          <tbody>
            {addressMock.map((address, index) => (
              <AdressItem
                key={address.id}
                index={index + 1}
                cep={address.cep}
                city={address.cidade}
                state={address.estado}
                street={address.logradouro}
                neighborhood={address.bairro}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListAddress;
