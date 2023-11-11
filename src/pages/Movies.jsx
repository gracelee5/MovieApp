import React from 'react';
import Movie from '../Components/Movie';
import { movies } from '../movieDummy';
const pageStyle = {
    marginTop: '100px', // 헤더의 높이에 맞춰 조절 (헤더 높이에 따라 값 조절 필요)
    padding: '20px', // 페이지 컨텐츠와 헤더 사이 여백
};
const Movies = () => {
  return (
    <div style={pageStyle}>
      {movies.results.map((item) => (
        <Movie
          key={item.id}
          title={item.title}
          posterPath={item.poster_path}
          voteAverage={item.vote_average}
          overview={item.overview}
        />
      ))}
    </div>
  );
};

export default Movies;

