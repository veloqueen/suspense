import React from 'react'

const MovieCard = (movie) => {
    
    return (
        <div>
            <div>{movie.name}</div>
            <div>{movie.director}</div>
            <div>{movie.year}</div>
            <div>{movie.description}</div>
        </div>
    )
}

export default MovieCard

// return <li key={movie.id}>{movie.name} , {movie.genre}</li>