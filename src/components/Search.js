import React, { useState } from 'react';

const Search = (props) => {

    const [currentValue, setCurrentValue] = useState('')
    
	return (
		<div>
                <input 
                    className = 'search-input' 
                    placeholder = 'search'            
                    value = {props.value}
                    onChange={(event) => setCurrentValue(event.target.value)}/>
                    <div className='buttons-container'>
                        <button className='button-clear' onClick={(event) => props.setSearchMovies('')}>clear</button>
                        <button className='button-search' onClick={(event) => props.setSearchMovies(currentValue)}>search</button>
                    </div>
            
        </div>
	);
};

export default Search;