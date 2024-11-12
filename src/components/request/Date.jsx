import React from 'react'
import styled from "styled-components";
import SubTitle from "../shared/common/SubTitle";

const Date = ({ startDateRef, endDateRef }) => {
  return (
    <Container>
      <SubTitle require>시작/종료일</SubTitle>
      <div className="date-box">
        <input type="date" ref={startDateRef} placeholder="start" />
        <input type="date" ref={endDateRef} />
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 3rem;
  .date-box {
    display: flex;
    gap: 1.5rem;
  }
`;

export default Date