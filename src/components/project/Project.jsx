import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FcFolder } from "react-icons/fc";

const Project = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/project/${item.id}`)}>
      <FcFolder size={80} />
      <div className="name">
        {item.name}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  svg {
    flex-shrink: 0;
  }
  &:hover {
    .name {
      text-decoration: underline;
    }
  }
  .name {
    margin-top: -0.7rem;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default Project