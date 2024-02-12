import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavFirst } from "./component/NavFirst";
import {HomeContainer} from "./component/HomeContainer"
import { CatalogContainer } from "./component/CatalogContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <> 
    <BrowserRouter>
    <NavFirst />
    <Routes>
    <Route path='/Catalogo' element={<CatalogContainer/>}/>
    <Route path='/Home' element={<HomeContainer/>}/>
    </Routes>
    </BrowserRouter>
    
      
      
    </>
  );
}

export default App;
