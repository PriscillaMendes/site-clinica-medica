import {
  BrowserRouter,
  Routes,
  Outlet,
  Route,
} from 'react-router-dom';
import Home from './externo/Home';
import Login from './externo/Login';
import Galery from './externo/Galery';
import SingUp from './externo/Signup';
import Address from './externo/Address';
import Listings from './interno/Searches';
import Schedules from './externo/Schedules';
import Navigation from './common/layout/Navigation';
import ListAddress from './interno/ListAddress';
import ListPatient from './interno/ListPatient';
import ListDoctorSchedules from './interno/ListDoctorSchedules';
import ListPatientSchedules from './interno/ListPatientSchedules';
import ListEmployee from './interno/ListEmployee';
import PrivateRoute from './common/components/PrivateRoute';
import PatientSignup from './interno/PatientSignup';
import EmployeeSignup from './interno/EmployeeSignup';
import HomeFuncionarios from './interno/HomeFuncionarios';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navigation />}>
            <Route path="auth" element={<PrivateRoute><Outlet /></PrivateRoute>}>
              <Route path="cadastro-paciente"><PatientSignup /></Route>
              <Route path="home-funcionario"><HomeFuncionarios /></Route>
              <Route path="cadastro-funcionario"><EmployeeSignup /></Route>
              <Route path="consulta" element={<Listings />}>
                <Route path="funcionarios"><ListEmployee /></Route>
                <Route path="pacientes"><ListPatient /></Route>
                <Route path="enderecos"><ListAddress /></Route>
                <Route path="agendamentosCliente"><ListPatientSchedules /></Route>
                <Route path="listar-agendamentos"><ListDoctorSchedules /></Route>
              </Route>
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
