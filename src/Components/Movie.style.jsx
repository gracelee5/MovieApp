import styled from 'styled-components';

export const MovieContainer = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;
  color: white;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled.div`
  padding: 10px;
  text-align: center;
  background-color: rgb(76, 77, 126);
  justify-content: flex-start;
  width: 130px;
  height: 50px;
  color: white;
`;

export const GlobalStyles = styled.div`
  * {
    background-color: rgb(255, 255, 255);
  }

  .app-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* 나머지 전역 스타일 설정 */
  /* ... */
`;
