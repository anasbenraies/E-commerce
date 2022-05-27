const InitialState={
    panier:[]  ,
    indice : 0
}

 ; 

const PanierReducer = (state=InitialState,action)=>{
    switch(action.type){
        case 'ADD_TO_PANIER':
            return {...state,panier:[...state.panier,action.payload]} ;
        case 'increment': 
            return {...state,indice:state.indice+1}
        case 'Delete_From_Panier':
            return {...state,panier:state.panier.filter((el)=>el.indice!=action.payload.indice)}
        case 'clear':
            return {...state,panier:[]}
        }
        
    return state ;
}
export default PanierReducer