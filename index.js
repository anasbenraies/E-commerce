import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homme_Cont from './profile/Homme_Cont';
import Femme_Cont from './profile/Femme_Cont';
import Produit from './profile/Produit';
import PanierReducer from './Reducer/PanierReducer';
import Panier from './profile/Panier';

const store=createStore(PanierReducer);

ReactDOM.render( 
    <Provider store={store}>
    <React.StrictMode >
        <BrowserRouter>
           <Routes>
               <Route path="/panier" element={<Panier list={["Homme" ,"Femme","Panier"]}/>} />
                <Route path="/homme/produit1" element={<Produit list={["Homme" ,"Femme","Panier"]} produit={  {image:["https://static.pullandbear.net/2/photos//2022/V/0/2/p/8686/500/407/8686500407_4_1_8.jpg?t=1650884561321&imwidth=375"],titre:"jean carrot", prix:"79.9 TND" } }/>} />
                 <Route path="/homme/produit2" element={<Produit list={["Homme" ,"Femme","Panier"]} produit={  {image:["https://static.pullandbear.net/2/photos//2022/V/0/2/p/8711/511/800/8711511800_4_1_8.jpg?t=1644317215281&imwidth=375"],titre:"Jackets", prix:"95.9 TND" } }/>} />
                <Route path="/" element={<App />} />
                <Route path="homme" element={<Homme_Cont list={["T-shirts","Jackets","Jeans","Montres","Panier"]}/>} />
                <Route path='Femme' element={<Femme_Cont list={["Robes" , "Jeans" , "Chemise" , "Montres"]}/>}/>

            </Routes>
        </BrowserRouter>
     </React.StrictMode>
     </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();