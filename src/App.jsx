import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation  from "./components/Navegate";
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Formulario  from "./components/Formulario";
import MyBarChart from './components/MyBarChart';


function App() {

  return (
    <BrowserRouter>
    <Navigation/>
    <div>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='formulario' element={<Formulario/>}/>
        <Route path='grafico' element={<MyBarChart/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App
