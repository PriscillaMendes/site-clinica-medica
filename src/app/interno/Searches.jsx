import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const links = [
  { title: 'Funcionários Cadastrados', to: 'funcionarios' },
  { title: 'Pacientes Cadastrados', to: 'pacientes' },
  { title: 'Endereços Auxiliares', to: 'enderecos' },
];

function Listings() {
  return (
    <div className="container pt-5">
      <ul>
        {links.map((link) => (
          <li className="row p-2">
            <Link className="btn btn-outline-info col-2" to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>

  );
}

export default Listings;
