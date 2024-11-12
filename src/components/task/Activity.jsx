import React from 'react'
import styled from "styled-components";
import SubTitle from "../shared/common/SubTitle";

const Activity = () => {
  return (
    <Container>
      <SubTitle>Activity</SubTitle>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  padding: 2rem;
  background-color: #fafafa;
  overflow-y: auto;
`;

export default Activity