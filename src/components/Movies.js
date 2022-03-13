import React from 'react';

const Movies = (props) => {
	return (
		<>
			{props.movieTitles.map((movie, index) => (				
					<div>{movie["Title"]}</div>			
			))}
		</>
	);
};

export default Movies;