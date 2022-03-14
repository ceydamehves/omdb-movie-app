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
      setMovieTitles(resJsonData.Search)
    }    
  }  

  useEffect(() => {
    getMovieInfo(searchMovies)
  }, [searchMovies])

  const popcorn = require('./assets/popcorn.png')

  return (
    <div className="App">
      <div className='center'>
        <h1 className='title'>OMDb API</h1>
        <p className='subtitle'>The Open Movie Database 
          <img className='emoji' src = {popcorn}/></p>        
      </div>
      <div className='search-section'>
        <h3 className='subtitle'>Movie title</h3>
        <Search searchMovies={searchMovies} setSearchMovies={setSearchMovies}/>        
      </div>     
      <div className='results-section'>
        {searchMovies != '' ?
        <h3 className='title-results'>Results for "search"
        <p className='subtitle-results'>click on  a movie title to learn about it.</p></h3> :
        <h3 className='title-results'>Search results will appear here</h3> }
        <Movies movieTitles = {movieTitles} />
      </div>   
    </div>
  );
}

export default App;
