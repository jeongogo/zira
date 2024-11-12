import React from 'react'
import styled from "styled-components";
import PageTitle from "../shared/common/PageTitle";
import Theme from "./Theme";


const Home = () => {
  return (
    <Container>
      <PageTitle>설정</PageTitle>
      <Theme />
    </Container>
  )
}

const Container = styled.div`
`;

export default Home