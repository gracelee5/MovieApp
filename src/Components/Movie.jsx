import React, { useState } from 'react';
import { MovieContainer, Overlay, Content } from './Movie.style';

function Movie({ title, posterPath, voteAverage, overview }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MovieContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}
        alt={title}
      />
      {isHovered && (
        <Overlay>
          <p>{title}</p>
          <p>{overview}</p>
        </Overlay>
      )}
      <Content>
        <p>{title} {voteAverage}</p>
      </Content>
    </MovieContainer>
  );
}

export default Movie;
