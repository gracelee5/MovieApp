import React from 'react';
import AdPage from '../Components/AdPage'; // AdPage 컴포넌트 가져오기
const pageStyle = {
    marginTop: '100px', // 헤더의 높이에 맞춰 조절 (헤더 높이에 따라 값 조절 필요)
    padding: '20px', // 페이지 컨텐츠와 헤더 사이 여백
};
const Home = () => {
  return (
    <div style={pageStyle}>
      
      {/* AdPage 컴포넌트를 렌더링 */}
      <AdPage />
    </div>
  );
};

export default Home;
