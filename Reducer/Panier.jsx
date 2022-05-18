const InitialState=[] ; 

const PanierReducer = (state=InitialState,action)=>{
    switch(action.type){
        case 'ADD_TO_PANIER':
            return [...state,action.payload] ;
    }
}
export default PanierReducer