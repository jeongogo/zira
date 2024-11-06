import React from 'react'
import styled from "styled-components";

const PageTitle = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

const Container = styled.h1`
  font-size: 3rem;
  font-weight: 500;
`;

export default PageTitle