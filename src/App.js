import './App.css';
// import Navigation from './components/navegation';
// import { Register } from './components/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/navbar';
import Consultar from './components/vistas/consultar';
import Registrar from './components/vistas/registrar';
import Inicio from './components/vistas/inicio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'element={<Inicio />}/>
          <Route path='/consultar'element={<Consultar />}/>
          <Route path='/registrar'element={<Registrar />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
