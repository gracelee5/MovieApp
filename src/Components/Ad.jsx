import React from 'react';

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null; 
  }

  return (
    <div>
      <img src="../img/Untitled.svg" alt="광고" style={{ width: '100%' }} />
    </div>
  );
};

export default Ad;