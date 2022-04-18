import './App.css'; 
import Sidebar from './profile/SideBar';
import { Link } from "react-router-dom";
import Acceuil from './profile/Acceuil';

function App() {
let my="type" ;
  return(
    <div className="App">
      <Acceuil list={["Accueil","Homme","Femme","panier"]}/>
    </div>
      )
}

export default App;
