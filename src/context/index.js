import { createContext, useReducer } from "react";
import {v1 as uuid} from "uuid"; 

const initialValue = {
    data: [],
    term: '',
    filter: 'all'
}

export const Context = createContext() 

const reducer = (state = initialValue, action) => {
    const { type, payload} = action
    switch (type) {
        case 'GET_DATA':
            return {...state, data: payload}
        case 'ON_DELETE':
            const newArr = state.data.filter(f => f.id !== payload);
            return { ...state, data: newArr}
        case 'ON_TOGGLE_PROP':
            const {id, prop} = payload;
            const toggleArr = state.data.map(item => {
                if(id === item.id) {
                    return { ...item, [prop]: !item[prop]}
                }
                return item
            })
            return { ...state, data: toggleArr}
        case 'ADD_MOVIE':
            const {name, viewers} = payload;
            const newItem = {name, viewers, favourite: false, like: false, id: uuid()};
            return { ...state, data: [...state.data, newItem]}
        case 'ON_FILTER':
            return { ...state, filter: payload}
        case 'ON_TERM':
            return { ...state, term: payload}
        default: 
            return {state}
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}

export default Provider