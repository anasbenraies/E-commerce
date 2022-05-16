import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homme_Cont from './profile/Homme_Cont';
import Femme_Cont from './profile/Femme_Cont';
import Produit from './profile/Produit';
ReactDOM.render( 
    <React.StrictMode >
        <BrowserRouter>
           <Routes>
                <Route path="/Homme/produit1" element={<Produit list={["azer","azer","aezrero"]} produit={  {image:["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dhresource.com%2F0x0s%2Ff2-albu-g8-M01-9A-30-rBVaV1ws3s2ACg3XAATtGTWKfh4067.jpg%2Fpure-color-men-039-s-suits-size-s-m-l-xl.jpg&f=1&nofb=1"],titre:"jean Slim", prix:"79.9 TND" } }/>} />
                <Route path="/" element={<App />} />
                <Route path="Homme" element={<Homme_Cont list={["T-shirts","Jackets","Jeans","Montres"]}/>} />
                <Route path='Femme' element={<Femme_Cont list={["Robes" , "Jeans" , "Chemise" , "Montres"]}/>}/>
            </Routes>
        </BrowserRouter>
     </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();