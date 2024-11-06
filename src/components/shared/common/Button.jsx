import React from 'react'
import styled from "styled-components";

const Button = ({ children, theme, onClick }) => {
  return (
    <Container className={theme} onClick={onClick}>{children}</Container>
  )
}

const Container = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 0.2rem;
  &.gray {
    background-color: #efefef;
  }
  &.blue {
    color: white;
    background-color: royalblue;
  }
`;

export default Button