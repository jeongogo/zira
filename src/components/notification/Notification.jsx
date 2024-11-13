import React from 'react'
import styled from "styled-components";

const Notification = ({ item }) => {
  return (
    <Container>
      <div className="thumbnail">
        
      </div>
      <div className="content">
        <button className="title">{item.title}</button>
        <div className="date">{item.date}</div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.5rem;
  border-radius: 1rem;
  .thumbnail {
    width: 4rem;
    height: 4rem;
    margin-right: 1.5rem;
    background-color: #ededed;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .content {
    .title {
      font-size: 1.5rem;
      color: #454545;
      &:hover {
        text-decoration: underline;
      }
    }
    .date {
      margin-top: 0.3rem;
      font-size: 1.3rem;
      color: #999;
    }
  }
`;

export default Notification