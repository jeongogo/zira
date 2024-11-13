import React from 'react'
import styled from "styled-components";

const Status = ({ onEditStatus }) => {
  return (
    <Container>
      <button className="pending" onClick={() => onEditStatus("pending")}><span></span>대기</button>
      <button className="inProgress" onClick={() => onEditStatus("inProgress")}><span></span>진행중</button>
      <button className="review" onClick={() => onEditStatus("review")}><span></span>결과검토</button>
      <button className="completed" onClick={() => onEditStatus("completed")}><span></span>완료</button>
      <button className="onHold" onClick={() => onEditStatus("onHold")}><span></span>보류</button>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 11rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  border-radius: 1rem;
  z-index: 2;
  button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.7rem 1.5rem;
    font-size: 1.4rem;
    color: #454545;
    &:hover {
      background-color: #f9f9f9;
    }
    &.pending {
      span {
        background-color: var(--status-pending);
      }
    }
    &.onHold {
      span {
        background-color: var(--status-onHold);
      }
    }
    &.inProgress {
      span {
        background-color: var(--status-inProgress);
      }
    }
    &.review {
      span {
        background-color: var(--status-review);
      }
    }
    &.completed {
      span {
        background-color: var(--status-completed);
      }
    }
    span {
      width: 8px;
      height: 8px;
      margin-right: 0.8rem;
      border-radius: 3px;
    }
  }
`;

export default Status