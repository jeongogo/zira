import React from 'react'
import { useNavigate } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

const Task = ({ item }) => {
  const navigate = useNavigate();
  
  return (
    <Container className={item.status}>
      <div className="title" onClick={() => navigate(`/task/${item.id}`)}>{item.title}</div>
      <div className="status">
        {item.status === "pending" && "대기"}
        {item.status === "onHold" && "보류"}
        {item.status === "inProgress" && "진행중"}
        {item.status === "review" && "결과검토"}
        {item.status === "completed" && "완료"}
      </div>
      <div className="date">{moment(new Date(item.startDate.seconds*1000)).format('YYYY-MM-DD')}</div>
      <div className="date">{moment(item.endDate.seconds*1000).format('YYYY-MM-DD')}</div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border-bottom: 0;
  }
  &.pending {
    &::before {
      background-color: var(--status-pending);
    }
  }
  &.onHold {
    &::before {
      background-color: var(--status-onHold);
    }
  }
  &.inProgress {
    &::before {
      background-color: var(--status-inProgress);
    }
  }
  &.review {
    &::before {
      background-color: var(--status-review);
    }
  }
  &.completed {
    color: #aaa;
    &::before {
      background-color: var(--status-completed);
    }
    .date {
      color: #aaa;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    transition: all 0.1s;
    z-index: 2;
  }
  .title {
    max-width: 40rem;
    margin-right: auto;
    font-size: 1.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .date {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: #666;
    flex-shrink: 0;
  }
  .buttons {
    width: 5rem;
    margin-left: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

export default Task