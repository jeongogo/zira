import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopMenu = () => {
  return (
    <Container>
      <h1>ZIRA</h1>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/mypage">마이페이지</Link>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.4rem;
  padding: 0 2.5rem;
  background-color: white;
  border-bottom: 1px solid #ededed;
  z-index: 9;
  h1 {
    margin-right: auto;
    font-size: 1.8rem;
    font-weight: 500;
  }
  a {
    display: flex;
    margin-left: 1.5rem;
    margin-right: 0.5rem;
    font-size: 1.3rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default TopMenu