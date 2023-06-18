import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'service/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movieId);
  useEffect(() => {
    api.fetchGetMoviesDetails(movieId).then(res => {
      setMovie(res.data);
      console.log(res);
    });
  }, [movieId]);

  const src = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
  return (
    <>
      <img src={src + movie.poster_path} alt={movie.title} />
      <h3>{movie.title ? movie.title : movie.name}</h3>
      <p>Vote average: {movie.vote_average}/10</p>
      <h4>Overview</h4>
      <p>{movie.overview}</p>
      <h5>Genres</h5>
      <p>{movie.genres.map(gen => `${gen.name} `)}</p>
    </>
  );
};

export default MovieDetails;

// release_date  *** cztery pierwsze cyfry
// title
// vote_average
// overview
// genres.name
