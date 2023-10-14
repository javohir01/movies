import { useState, useContext} from 'react'
import {Context} from '../../context'
import './app-filter.css'

const AppFilter = () => {
    const {state, dispatch} = useContext(Context)

    return (
        <div className="btn-group">
            {btnArr.map(btn =>(
                <button 
                    key={btn.name} 
                    type="button"
                    className={`btn ${state.filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`} 
                    onClick={() => dispatch({type: 'ON_FILTER', payload: btn.name})}>
                    {btn.label}
                </button>    
            ))}
        </div>
    );
}
const btnArr = [
    {name: 'all', label: "Barcha kinolar"},
    {name: 'popular', label: "Mashhur kinolar"},
    {name: 'mostViewer', label: "Eng ko'p ko'rilgan kinolar"},
]

export default AppFilter  