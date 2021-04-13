import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const links = [
  { title: 'Funcionários Cadastrados', to: 'funcionarios' },
  { title: 'Pacientes Cadastrados', to: 'pacientes' },
  { title: 'Endereços Auxiliares', to: 'enderecos' },
];

function Listings() {
  return (
    <div className="">
      <ul>
        {links.map((link) => (
          <li>
            <Link to={link.to}>{link.title}</Link>
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
