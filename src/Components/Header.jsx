import React from 'react';
import { Link } from 'react-router-dom';
import LoginControl from './LoginControl';
import LoginButton from './LoginButton';
const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'navy',
    color: 'white', // 글자색을 하얀색으로 설정
    display: 'flex', // 가로로 정렬
    alignItems: 'center',
    zIndex: -1, // z-index 값을 양수로 설정
    justifyContent: 'space-between', // 가로로 가운데 정렬
    padding: '10px 20px',
  };
const menuStyle = {
    display: 'flex', // 메뉴 아이템을 가로로 배열
    listStyle: 'none',
    padding: 0,
    backgroundColor: 'navy',
  };
  
const menuItemStyle = {
    margin: '0 10px', // 메뉴 아이템 사이의 간격 조절
    backgroundColor: 'navy',
  };
const linkStyle = {
    color: 'white', // Link 글자색을 하얀색으로 설정
    textDecoration: 'none', // Link 밑줄 제거
    backgroundColor: 'navy',
  };
const Header = () => {
  return (
    <div>
    <header style={headerStyle}>
        <Link to="/">
      <img
        style={{ width: "154px", height: "20px",backgroundColor: 'transparent' }}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="로고"
      /></Link>
      <nav style={menuStyle}>
        <ul style={menuStyle}>
          <li style={menuItemStyle}>
            <Link to="../pages/Movies"style={linkStyle}>영화</Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="../pages/TV"style={linkStyle}>TV 프로그램</Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="../pages/Celebrity"style={linkStyle}>인물</Link>
          </li>
        </ul>
      </nav>
      <LoginButton/>
    </header>
    
    </div>
  );
};

export default Header;