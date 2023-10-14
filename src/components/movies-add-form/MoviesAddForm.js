import { useState, useContext} from 'react'
import {Context} from '../../context'

import "./movies-add-form.css";

const MoviesAddForm = props => {
  const [state, setState] = useState({ name: '', viewers: ''}); 

  const {_, dispatch} = useContext(Context);

  const changeHandlerInput = e => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    if(state.name === '' || state.viewers === '') {
      alert("don't be empty!!!");
      return 
    }
    const data = { name: state.name, viewers: state.viewers};
    dispatch({type: 'ADD_MOVIE', payload: data});
    setState({ name: '', viewers: ''})
  };

  return (
    <div className='movies-add-form'>
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={onSubmitHandler}>
        <input 
          type='text' 
          className='form-control new-post-label' 
          placeholder='Qanday kino?' 
          onChange={changeHandlerInput} 
          name='name'
          value={state.name}
        />
        <input 
          type='number'
          className='form-control new-post-label'
          placeholder="Necha marotaba ko'rilgan?" 
          onChange={changeHandlerInput}
          name='viewers'
          value={state.viewers}
        />
        <button 
          type="submit" 
          className="btn btn-outline-dark"
        >
          Qo'shish
        </button>
      </form>
    </div>
  )

}

export default MoviesAddForm