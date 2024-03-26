import './App.css';
// import Navigation from './components/navegation';
// import { Register } from './components/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/navbar';
import Inicio from './components/vistas/inicio';
import Consultar from './components/vistas/consultar';
import Registrar from './components/vistas/registrar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/vistas/inicio'element={<Inicio />}/>
          <Route path='/vistas/consultar'element={<Consultar />}/>
          <Route path='/vistas/registrar'element={<Registrar />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
