import React from "react";

const MovieDisplay = ({ movieData }) => {
  const loaded = () => {
    return (
      <div>
        <h1>{movieData.Title}</h1>
        <h2>{movieData.Genre}</h2>
        <img src={movieData.Poster} alt={movieData.Title} />
        <h2>{movieData.Year}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };
  return movieData ? loaded() : loading();
};

export default MovieDisplay;
