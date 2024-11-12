import React from 'react'
import styled from "styled-components";
import SubTitle from "../shared/common/SubTitle";

const Title = ({ title, setTitle }) => {
  return (
    <Container>
      <SubTitle require>제목</SubTitle>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 3rem;
`;

export default Title