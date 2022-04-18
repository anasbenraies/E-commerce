import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homme_Cont from './profile/Homme_Cont';
import Femme_Cont from './profile/Femme_Cont';
ReactDOM.render( 
    <React.StrictMode >
        <BrowserRouter>
           <Routes>
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