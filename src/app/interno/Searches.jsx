import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const links = [
  { title: 'Funcionários Cadastrados', to: 'funcionarios' },
  { title: 'Pacientes Cadastrados', to: 'pacientes' },
  { title: 'Endereços Auxiliares', to: 'enderecos' },
  { title: 'Agendamentos de Clientes', to: 'agendamentosCliente' },
  { title: 'Agendamentos Médico', to: 'listar-agendamentos' },
];

function Listings() {
  const role = window.localStorage.getItem('role');
  const isDoctor = role === 'medico';

  return (
    <div className="container pt-5">
      <div className="row d-flex justify-content-center">
        {links.map((link) => (
          <div className="p-2 col-2">
            {link.title !== 'Agendamentos Médico'
              ? <Link className="btn btn-outline-info" to={link.to}>{link.title}</Link>
              : isDoctor && <Link className="btn btn-outline-info" to={link.to}>{link.title}</Link>}
          </div>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>

  );
}

export default Listings;
