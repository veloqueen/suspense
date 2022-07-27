import React, { useState, useEffect } from 'react';
import MovieCard from './moviecard';

const MovieGrid = ( props ) => {

    const [movies, setMovies] = useState([]);
    const [errors, setErrors] = useState(false);
    
    useEffect(()=> {

        const moviesURL = "http://127.0.0.1:8000/movies/";
        const config = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
            })
        }
        fetch(moviesURL,config)
            .then(data => data.json())
            .then(data => {
                setMovies(data);
            })
            .catch(err => setErrors(err));
    }, []);

    return (
        <>
            <h1>Test</h1>
            <div>
                {movies.map((movie) => { return <MovieCard 
                        key={movie.id} 
                        name={movie.name} 
                        director={movie.director} 
                        year={movie.year} 
                        description={movie.description}
                        >                 
                    </MovieCard>
                })}
            </div>
        </>
    )
}

export default MovieGrid