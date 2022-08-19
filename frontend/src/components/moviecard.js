import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MovieCard = (movie) => {
    
    return (
        <Card>
            <CardHeader
                title={movie.name}
                subheader={movie.year}
            />
            <CardMedia
                component="img"
                height="120"
                image="tbd"
                alt="movie avatar"
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">{movie.genre}</Typography>
                <Typography variant="body2" color="text.secondary">{movie.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default MovieCard;