import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../movieDummy';
const pageStyle = {
    marginTop: '100px',
    padding: '20px',
  };
const MovieDetail = () => {
  const { id } = useParams(); // URL에서 영화의 id를 가져옴

  // movies 배열에서 해당 id에 해당하는 영화를 찾음
  const movie = movies.results.find((item) => item.id.toString() === id);

  if (!movie) {
    return <div>Movie not found</div>; // 해당 id의 영화가 없을 경우
  }

  return (
    <div style={pageStyle}>
      
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} style={{ width: '200px', height: 'auto' }}/>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MovieDetail;
