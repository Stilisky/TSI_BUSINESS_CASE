import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Register from './views/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/register' Component={Register} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
