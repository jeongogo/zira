import React from 'react'
import styled from "styled-components";
import SubTitle from "../shared/common/SubTitle";

const Project = ({ projectList, setProject }) => {
  return (
    <Container>
      <SubTitle require>프로젝트</SubTitle>
      <select onChange={(e) => setProject({ id: e.target.value, name: e.target.options[e.target.selectedIndex].dataset.name })}>
        {projectList.map((item) => (
          <option key={item.id} value={item.id} data-name={item.name}>{item.name}</option>
        ))}
      </select>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 1.5rem;
`;

export default Project