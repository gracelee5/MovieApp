import React from 'react';
import { Link } from 'react-router-dom';
const pageStyle = {
    marginTop: '100px', // 헤더의 높이에 맞춰 조절 (헤더 높이에 따라 값 조절 필요)
    padding: '20px', // 페이지 컨텐츠와 헤더 사이 여백
};
const NotFound = () => {
  return (
    <div style={pageStyle}>
      <h2>해당 페이지를 찾지 못했습니다.</h2>
      <p>주소가 잘못되었거나 더  이상 제공되지 않는 페이지입니다.</p>
      <Link to="/">메인 화면으로 돌아가기</Link>
    </div>
  );
};

export default NotFound;