import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Movies from './components/Movies';
import {omdb} from './api/secret';

function App() {

  const [movieTitles, setMovieTitles] = useState([])
  const getMovieInfo =  async() => {
    const url = (`http://www.omdbapi.com/?s=harry potter&apikey=` + omdb)
    const res = await fetch(url)
    const resJsonData = await res.json()
    setMovieTitles(resJsonData.Search) //took only search array
  }  

  useEffect(() => {
    getMovieInfo()
  }, [])

  return (
    <div className="App">
      <Movies movieTitles = {movieTitles} />
    </div>
  );
}

export default App;
