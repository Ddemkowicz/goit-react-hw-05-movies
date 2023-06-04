import { useEffect, useState } from 'react';
import { api } from 'service/api';
import Home from './Home/Home';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchGetTrending().then(res => {
      setMovies(res);
    });
  }, []);

  const fetchLog = () => {
    console.log(movies);
    // try {
    //   const movies = await api.fetchSearchMovies('batman');
    //   console.log(movies);
    // } catch (error) {
    //   alert(error);
    // } finally {
    //   console.log('finally');
    // }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <button type="button" onClick={fetchLog}>
        LOG
      </button>
      React homework template
      <Home movies={movies} />
    </div>
  );
};
