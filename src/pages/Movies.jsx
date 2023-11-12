// Movies.jsx

import React from 'react';
import Movie from '../Components/Movie';
import { movies } from '../movieDummy';
import { Link } from 'react-router-dom';
import * as styles from './Movies.style'; // 스타일 import

const pageStyle = {
  marginTop: '100px',
  padding: '20px',
};

const Movies = () => {
  return (
    <div style={{ ...pageStyle, ...styles.movieContainer }}>
      {movies.results.map((item) => (
        <Link to={`/movies/${item.id}`} key={item.id} style={styles.movieCard}>
          <Movie
            title={item.title}
            posterPath={item.poster_path}
            voteAverage={item.vote_average}
            overview={item.overview}
          />
        </Link>
      ))}
    </div>
  );
};

export default Movies;
