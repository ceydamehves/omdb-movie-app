import React from 'react';

const Movies = (props) => {
	return (
		<>
			{props.movieTitles.map((movie, index) => (				
					<div key={index} className='movies'> {movie["Title"]} </div>			
			))}
		</>
	);
};

export default Movies;