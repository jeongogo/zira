import React from 'react'
import styled from "styled-components";

const WriteButton = ({ setVisibleWriteModal }) => {
  return (
    <Container onClick={() => setVisibleWriteModal(true)}>등록하기</Container>
  )
}

const Container = styled.button`
  position: absolute;
  top: 3.5rem;
  right: 3rem;
  display: block;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  background-color: #efefef;
  border-radius: 0.5rem;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export default WriteButton