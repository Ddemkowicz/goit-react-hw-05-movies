import { useState } from 'react';
// import { api } from 'service/api';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MoiveDetails from '../pages/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import NotFound from 'pages/NotFound';

export const App = () => {
  const [movies, setMovies] = useState([]);

  const resetMovies = () => {
    setMovies([]);
  };

  // const fetchLog = () => {
  //   console.log(movies);
  //   // try {
  //   //   const movies = await api.fetchSearchMovies('batman');
  //   //   console.log(movies);
  //   // } catch (error) {
  //   //   alert(error);
  //   // } finally {
  //   //   console.log('finally');
  //   // }
  // };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout resetMovies={resetMovies} />}>
        <Route index element={<Home movies={movies} setMovies={setMovies} />} />
        <Route
          path="movies"
          element={<Movies movies={movies} setMovies={setMovies} />}
        />

        <Route path="movies/:movieId" element={<MoiveDetails />} />
        {/*  <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>  */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
