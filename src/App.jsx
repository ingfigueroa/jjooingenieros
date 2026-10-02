import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";




import Juegosolimpicos from "./componentes/jjoo_ingenieros";
import EntregarCintas from "./componentes/participantes_entregar_cintas";
import Home from "./componentes/home.jsx";




function App() {
  return (
    <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/jjooingenieros' element={<Juegosolimpicos />}/>
        <Route path='/jjooingenieros/entregarcintas' element={<EntregarCintas />}/>
       

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
