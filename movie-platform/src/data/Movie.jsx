import React from 'react';
import '../styles/Movie.css'; // Ensure CSS file exists

function Movie() {
    const movies = [
        {
            img: "https://m.media-amazon.com/images/M/MV5BZTRiOGQ2NGUtNzc3NC00OTY0LWJiZWMtNzBlOGVlNTY0ZThlXkEyXkFqcGc@._V1_SX300.jpg",
            title: "Dear X",
            genre: "Crime, Drama, Romance",
            description: "A woman dons a mask to flee her situation."
        },
        {
            img: "https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_SX300.jpg",
            title: "Stranger Things",
            genre: "Drama  Fantasy  Horror",
            description: "A group of kids in a small town discover a mysterious supernatural force and encounter a dark, evil presence"
        },
        {
            img: "https://m.media-amazon.com/images/M/MV5BOGZhODE5ZmEtMmE2OC00M2YzLWFjODMtYzI3ZTI0Mzk0MmY1XkEyXkFqcGc@._V1_SX300.jpg",
            title: "Mayor of Kingstown",
            genre: "Crime, Drama, Thriller",
            description: "The McLusky family are power brokers tackling systemic racism, corruption, and inequality."
        },
        {
            img: "https://m.media-amazon.com/images/M/MV5BNjY4ZWM5MTYtZTBmNC00YTY0LWFmOTItMTM5MWRiMDE4YzhiXkEyXkFqcGc@._V1_SX300.jpg",
            title: "Fallout",
            genre: "Drama  Thriller",
            description: "In a Hong Kong recycling plant, a massive fire exposes a radiation crisis caused by illegal garbage smuggling. Government advisor, executive, and firefighters embark on a high-stakes mission to mitigate the disaster."
        },
        {
            img: "https://m.media-amazon.com/images/M/MV5BODI5Y2YxM2UtZjhjYy00ZjM0LTg3NjQtYjQxMTBmZjM4ZTlkXkEyXkFqcGc@._V1_SX300.jpg",
            title: "Emily in Paris",
            genre: "Comedy  Drama  Romance",
            description: "A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things",
        },
        
    ];

    return (
        <>
            {movies.map((movie, index) => (
                <div className="movie" key={index}>
                    <img className="movie-img" src={movie.img} alt={movie.title} />
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie-genre">{movie.genre}</p>
                    <p className="movie-text">{movie.description}</p>
                </div>
            ))}
        </>
    );
}

export default Movie;