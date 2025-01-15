import React, { useState, useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=a15a79d8';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            if (data.Search) {
                setMovies(data.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setMovies([]);
        }
    };

    useEffect(() => {
        searchMovies('Batman'); // Initial load
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
