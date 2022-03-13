import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import {omdb} from './api/secret';
import Movies from './components/Movies';
import Search from './components/Search';

function App() {

  const [movieTitles, setMovieTitles] = useState([])  
  const [searchMovies, setSearchMovies] = useState('')

  const getMovieInfo =  async (searchMovies) => {
    const url = (`http://www.omdbapi.com/?s=${searchMovies}&apikey=${omdb}`)
    const res = await fetch(url)
    const resJsonData = await res.json()

    if (resJsonData.Search)
    {
      setMovieTitles(resJsonData.Search) //took only search array
    }    
  }  

  useEffect(() => {
    getMovieInfo(searchMovies)
  }, [searchMovies])


  return (
    <div className="App">
      <div>
        <Search searchMovies={searchMovies} setSearchMovies={setSearchMovies}/>
      </div>
     
      <div>
        <Movies movieTitles = {movieTitles} />
      </div>
      
    </div>
  );
}

export default App;
