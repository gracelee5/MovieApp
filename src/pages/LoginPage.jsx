import React, { useState } from 'react';

const pageStyle = {
  marginTop: '100px',
  padding: '20px',
};
const inputStyle={
    marginTop: '10px',
    borderRadius: '10px',
    borderColor: '#EAEAEA',
    padding: '10px', // 내용 주위 여백
    margin: '0 auto', // 가운데 정렬
    width:'750px',
    height:'20px',
}

const buttonStyle = {
    marginTop: '20px',
    backgroundColor:'#00005D',
    display: 'block', // 새로운 블록 요소로 만들어 input 아래에 배치
    color:'white',
    borderRadius: '50px',
    padding: '10px', // 내용 주위 여백
    width:'750px',
    height:'50px',
  };
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (isEmailValid) {
      // 이메일 유효성 검사를 통과하면 이 부분에 로그인 처리 로직 추가
      console.log('로그인 성공!');
    } else {
      console.log('올바른 이메일 주소를 입력해주세요.');
    }
  };
  return (
    <div style={pageStyle}>
      
      <p style={{fontFamily: 'Caligrahhy',fontSize:'30px'}}>이메일과 비밀번호를 입력해주세요</p>
      <p>이메일 주소</p>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{...inputStyle,  borderColor: isEmailValid ? 'initial' : 'red' }}
        />

        {!isEmailValid && <p style={{ color: 'red' }}>올바른 이메일 주소를 입력해주세요.</p>}
      
      <p>비밀번호</p>
      <input type="password" value={password} onChange={handlePasswordChange} style={inputStyle}/>
      <button onClick={handleSubmit} style={buttonStyle}>확인</button>
   

    </div>
  );
};

export default LoginPage;
