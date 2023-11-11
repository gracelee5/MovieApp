import React, { useState } from 'react';

function LoginControl() {
  // 사용자의 로그인 상태를 저장하는 상태 변수 선언
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const buttonStyle = {
    height: '25px', 
    borderRadius: '50px', // 둥근 테두리 스타일 적용
    margin: 15,
    display:'flex',
  };
  const textStyle={
    backgroundColor:'navy',
    color:'white',
    display:'flex',
}
  // 로그인 버튼을 클릭할 때 호출되는 함수
  const handleLoginClick = () => {
    // 현재 로그인 상태의 반대 상태로 변경
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{display:'flex', backgroundColor:'navy'}}>

      <button onClick={handleLoginClick} style={buttonStyle}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <p style={textStyle}>{isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</p>
    </div>
  );
}

export default LoginControl;


