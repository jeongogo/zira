import React from 'react'
import styled from "styled-components";

const Submit = ({ isSubmit, handleRequest }) => {
  return (
    <Container onClick={handleRequest} disabled={isSubmit}>등록하기</Container>
  )
}

const Container = styled.button`
  display: block;
  margin: 4rem auto;
  padding: 1.5rem 5rem;
  font-size: 1.7rem;
  font-weight: 500;
  color: white;
  background-color: royalblue;
  border-radius: 0.5rem;
`;

export default Submit