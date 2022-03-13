import React from 'react';

const Search = (props) => {
	return (
		<div>
            <input 
            className = 'form-control' 
            placeholder = 'search'
            value = {props.value} 
            onChange = {(event) => props.setSearchMovies(event.target.value)}></input>
        </div>
	);
};

export default Search;