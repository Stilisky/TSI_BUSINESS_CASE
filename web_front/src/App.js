import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Register from './views/Register';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Player from './views/Player';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/register' Component={Register} />
        <Route path='/login' Component={Login} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/players/views/:playerId' Component={Player} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
