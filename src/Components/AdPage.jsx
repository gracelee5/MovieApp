import React, { useState } from 'react';
import Ad from './Ad';

const AdPage = () => {
  const [showAd, setShowAd] = useState(false);

  const toggleAd = () => {
    setShowAd((prevShowAd) => !prevShowAd);
  };

  return (
    <div>
      <Ad showAd={showAd} />
      <button onClick={toggleAd}>광고 {showAd ? '숨기기' : '보기'}</button>
      
    </div>
  );
};

export default AdPage;
