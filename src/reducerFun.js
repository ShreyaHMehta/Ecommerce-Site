export const reducerFun = (state, action) => {
    switch (action.type) {
        case "lth": 
            return{
                ...state,
                sortAge: action.payload
            };
        case "htl": 
            return{
                ...state,
                sortAge: action.payload
            };
        case "Country": 
            return{
                ...state,
                sortAdd: action.payload
            };
        case "State": 
            return{
                ...state,
                sortAdd: action.payload
            };
        case "City": 
            return{
                ...state,
                sortAdd: action.payload
            };      
        default :
            return state;
    }
  
}

