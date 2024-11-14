import React from 'react'
import styled from "styled-components";
import Project from "./Project";
import PageTitle from "../shared/common/PageTitle";

const Home = ({ projectList, setVisibleWriteModal }) => {
  return (
    <Container>
      <div className="top">
        <PageTitle>프로젝트</PageTitle>
        <button className="write-button" onClick={() => setVisibleWriteModal(true)}>등록하기</button>
      </div>
      {projectList?.length > 0 &&
        <div className="list">
          {projectList.map((item) => (
            <Project key={item.id} item={item} />
          ))}
        </div>
      }
    </Container>
  )
}

const Container = styled.div`
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .write-button {
      padding: 1rem 2rem;
      font-size: 1.4rem;
      background-color: #efefef;
      border-radius: 0.5rem;
      &:hover {
        background-color: #e0e0e0;
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

export default Home