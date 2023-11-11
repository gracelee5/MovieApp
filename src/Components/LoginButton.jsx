import React from "react";
import { Link } from 'react-router-dom';

const LoginButton = () =>{
    const buttonStyle = {
        height: '25px', 
        borderRadius: '50px', // 둥근 테두리 스타일 적용
        margin: 15,
        display:'flex',
      };
      const linkstyle={
        backgroundColor: 'navy',
      }
    return(
        <Link to="../pages/LoginPage" style={linkstyle}>
            <button style={buttonStyle}>로그인</button>
        </Link>
    )

};

export default LoginButton