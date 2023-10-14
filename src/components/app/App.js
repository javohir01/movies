import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';

import './App.css';
import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import MovieList from '../movie-list/MovieList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';

function App() {
  const [isLoading, setIsloading] = useState(false);

  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    setIsloading(true);
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
      .then(response => response.json())
      .then(json => {
        const newArr = json.map(item => ({
          name: item.title,
          viewers: item.userId*500,
          favourite: false,
          like: false,
          id: item.id
        }))
        dispatch({type: 'GET_DATA', payload: newArr})
      })
      .catch(err => console.log(err))
      .finally(() => setIsloading(false))
  },[]);
  return (
    <div className='mt-3 container app font-nonospace'>
      <div className='content'>
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter />
        </div>
        {isLoading  && 'loading...'}
        <MovieList />
        <MoviesAddForm />
      </div>  
    </div>
  );
}

export default App;