import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  const [movieData, setMovieData] = useState(null);
  const apiKey = "1e8fd010";

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovieData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("running");
    
    const randomMovies = [
      "Clueless",
      "The Godfather",
      "Inception",
      "Pulp Fiction",
      "The Shawshank Redemption",
      "Go",
      "Shrek",
      "American Psycho",
      "Barie",
      "Rocky Horror Picture Show",
    ];
    const randomIndex = Math.floor(Math.random() * randomMovies.length);
    const randomMovie = randomMovies[randomIndex];
    getMovie(randomMovie);
  }, []);

  return (
    <div className="App">
      <Form onSubmitForm={getMovie} />
      <MovieDisplay movieData={movieData} />
    </div>
  );
}

export default App;
