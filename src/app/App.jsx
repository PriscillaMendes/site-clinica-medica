import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './externo/Home';
import Login from './externo/Login';
import SingUp from './externo/Signup';
import Galery from './externo/Galery';
import Address from './externo/Address';
import Schedules from './externo/Schedules';
import Navigation from './common/layout/Navigation';
import PrivateRoute from './common/components/PrivateRoute';
import CadastroPaciente from './interno/CadastroPaciente';
import HomeFuncionarios from './interno/HomeFuncionarios';
import CadastroFuncionario from './interno/CadastroFuncionario';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navigation />}>
            <Route path="auth" element={<PrivateRoute />}>
              <Route path="cadastro-paciente"><CadastroPaciente /></Route>
              <Route path="home-funcionario"><HomeFuncionarios /></Route>
              <Route path="cadastro-funcionario"><CadastroFuncionario /></Route>
            </Route>
            <Route path="/"><Home /></Route>
            <Route path="login"><Login /></Route>
            <Route path="cadastrar"><SingUp /></Route>
            <Route path="galeria"><Galery /></Route>
            <Route path="agendamento"><Schedules /></Route>
            <Route path="endereco"><Address /></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {/* <Route >{NotFound}</Route> status={404} /> */ }
// import NotFound from './js/NotFound.js';
