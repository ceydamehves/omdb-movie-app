import React, { useState } from 'react';

const Search = (props) => {

    const [currentValue, setCurrentValue] = useState('')
    
	return (
		<div>
                <input 
                    className = 'form-control' 
                    placeholder = 'search'            
                    value = {props.value}
                    onChange={(event) => setCurrentValue(event.target.value)}/>
                    <div>
                    <button onClick={(event) => props.setSearchMovies('')}>Clear</button>
                    <button onClick={(event) => props.setSearchMovies(currentValue)}>Search</button>
                    </div>
            
        </div>
	);
};

export default Search;