import React from 'react'
import styled from "styled-components";
import { BiMouse } from "react-icons/bi";
import SubTitle from "../shared/common/SubTitle";

const Attach = () => {
  return (
    <Container>
      <SubTitle>첨부파일</SubTitle>
      <div className="drop">
        <BiMouse />
        Drag and drop files here.
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #ededed;
  .drop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15rem;
    font-size: 1.6rem;
    font-weight: 100;
    color: #ccc;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    svg {
      margin-bottom: 0.8rem;
      font-size: 3rem;
    }
  }
`;

export default Attach