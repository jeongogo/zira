import React from 'react'
import styled from "styled-components"
import SideMenu from "./SideMenu"

const TwoColumnLayout = ({ children }) => {
  return (
    <Container>
      <SideMenu />
      <div className="content-area">
        {children}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding-left: 22rem;
  .content-area {
    position: relative;
    width: 100%;
    padding: 3rem 4rem;
  }
`;

export default TwoColumnLayout