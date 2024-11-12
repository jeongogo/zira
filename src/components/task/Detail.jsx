import React from 'react'
import styled from "styled-components";
import SubTitle from "../shared/common/SubTitle";

const Detail = ({ item }) => {
  return (
    <Container>
      <div className="project">{item.project.name}</div>
      <div className="title">{item.title}</div>      
      <div className="content">{item.content}</div>      
      <SubTitle>담당자</SubTitle>
      <ul>
        {item.assignUsers.map((user) => (
          <li key={user.id}>{user.displayName}</li>
        ))}
      </ul>
      <SubTitle>첨부파일</SubTitle>
    </Container>
  )
}

const Container = styled.div`
  
`;

export default Detail