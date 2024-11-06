import React from 'react'
import SideMenu from "../common/SideMenu"
import styled from "styled-components"
import TopMenu from "../common/TopMenu"

const BasicTheme = ({ children }) => {
  return (
    <Container>
      <TopMenu />
      <SideMenu />
      <div className="content-area">
        {children}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding-top: 4.4rem;
  padding-left: 20rem;
  .content-area {
    position: relative;
    width: 100%;
    padding: 3rem;
  }
`;

export default BasicTheme