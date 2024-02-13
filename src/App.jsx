import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavFirst } from "./component/NavFirst";
import {HomeContainer} from "./component/HomeContainer"
import { CatalogContainer } from "./component/CatalogContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./component/CartProvider";
import { CarrelloContainer } from "./component/CarrelloContainer";
import { HomePage } from "./component/HomePage";
function App() {
  return (
    <> 
    <CartProvider>
    <BrowserRouter>
    <NavFirst />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    <Route path='/Catalogo' element={<CatalogContainer/>}/>
    <Route path='/Home' element={<HomeContainer/>}/>
    <Route path='Carrello' element={<CarrelloContainer/>}/>
    
    </Routes>
    </BrowserRouter>
    </CartProvider>
    
    
      
      
    </>
  );
}

export default App;
