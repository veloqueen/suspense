import React, { useState, useEffect } from 'react';
import MovieCard from './moviecard';

const MovieGrid = ( props ) => {

    const [movies, setMovies] = useState([]);
    
    useEffect(()=> {

        const moviesURL = "http://127.0.0.1:8000/movies/";
        const config = {
            method: "GET",
/*             headers: new Headers({
                "Content-Type": "application/json"
            }) */
        }
        fetch(moviesURL,config)
            .then(data => data.json())
            .then(data => {
                setMovies(data);
                console.log(setMovies)
            })
    }, []);

    return (

        <div>
            {movies.map((movie) => {
                <MovieCard 
                    key={movie.id} 
                    name={movie.name} 
                    director={movie.director} 
                    year={movie.year} 
                    description={movie.descripton}
                    >                    
                </MovieCard>
            })}
        </div>
    )
}

export default MovieGrid