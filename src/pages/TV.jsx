
import React from 'react';

const pageStyle = {
    marginTop: '100px', // 헤더의 높이에 맞춰 조절 (헤더 높이에 따라 값 조절 필요)
    padding: '20px', // 페이지 컨텐츠와 헤더 사이 여백
};

const TV = () => {
  return (
    <div style={pageStyle}>
      <p>TV 프로그램</p>
      {/* TV 페이지 내용 */}
    </div>
  );
};

export default TV;
