import { useState, useContext} from 'react'
import {Context} from '../../context'
import "./search-panel.css"

const SearchPanel = (props) => {
  const [term, setState] = useState('');

  const { state, dispatch} = useContext(Context)

  const updateTermHandler = e => {
    const term = e.target.value.toLowerCase();
    setState(term);
    dispatch({ type: 'ON_TERM', payload: term });
  }

  return (
    <input 
      type='text'   
      className='form-control search-input'   
      placeholder='Qidirish'
      onChange={updateTermHandler}
      value={term}
    />
  )
}

export default SearchPanel
