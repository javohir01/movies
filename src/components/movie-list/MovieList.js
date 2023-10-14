import MoveListItem from "../movie-list-item/MovieListItem"
import {useContext} from 'react'
import { Context } from "../../context"
import { filterHandler, searchHandler } from "../../utils/data"

import "./movie-list.css"

const MovieList = ({ onToggleProp}) => {
  const {state, dispatch} = useContext(Context)

  const data = filterHandler(searchHandler(state.data, state.term), state.filter)
  return (
    <ul className="movie-list">
        {data.map(item => (
            <MoveListItem
                key={item.id} 
                {...item}
            />
        ))}
    </ul>
  )
}

export default MovieList
