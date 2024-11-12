import React from 'react'
import styled from "styled-components";

const SubTitle = ({ children, require }) => {
  return (
    <Container>{children} {require && <span className="require">*</span>}</Container>
  )
}

const Container = styled.h2`
  font-size: 1.9rem;
  font-weight: 500;
  flex-shrink: 0;
  margin-bottom: 0.7rem;
  .require {
    color: crimson;
  }
`;

export default SubTitle