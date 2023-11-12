import React from 'react';
import tvDummy from '../tvDummy'; 
import { useStyles } from './TV.style';

const pageStyle = {
  marginTop: '100px', // 헤더의 높이에 맞춰 조절 (헤더 높이에 따라 값 조절 필요)
  padding: '20px', // 페이지 컨텐츠와 헤더 사이 여백
};

const TV = () => {
  const classes = useStyles();
  return (
    <div style={pageStyle} className={classes.tvContainer}>
      {tvDummy.results.map((show) => (
        <div key={show.id} className={classes.tvItem}>
          <img
            src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
            alt={show.name}
            className={classes.tvItemImage}
          />
          <div>{show.name}</div>
          <div>{show.vote_average}</div>
        </div>
      ))}
    </div>
  );
};

export default TV;
