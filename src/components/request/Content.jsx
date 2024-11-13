import React from 'react'
import styled from "styled-components";
import SubTitle from "../shared/common/SubTitle";

const Content = ({ content, setContent }) => {
  return (
    <Container>
      <SubTitle>내용</SubTitle>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 3rem;
  textarea {
    height: 32rem;
  }
`;

export default Content