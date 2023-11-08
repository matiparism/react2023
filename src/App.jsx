import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ItemListCointainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavbarComponent/> 
      <ItemListCointainer greeting="Bienvenid@s a 3D Garage"/>
      {      }
    </div>
    
  );
}


export default App;

