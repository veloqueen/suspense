import React from 'react'

const MovieCard = (movies) => {
    
    return (
        <div>
            <div>{movies.name}</div>
            <div>{movies.director}</div>
            <div>{movies.year}</div>
            <div>{movies.description}</div>
        </div>
    )
}

export default MovieCard