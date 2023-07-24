import { useContext, createContext, useReducer } from "react";
import { reducerFun } from "./reducerFun";

const initialState = {
    sortAge: " " ,
    sortAdd: " "
}

const FilterContext = createContext(initialState);

const FilterProvider = ({children}) => {
    const [state, filterDispatch] = useReducer(reducerFun, {sortAge: " ", sortAdd: " "} );

    return (
        <FilterContext.Provider value={{ state, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
