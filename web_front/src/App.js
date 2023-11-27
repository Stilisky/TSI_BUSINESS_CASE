import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
