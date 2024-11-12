import React from 'react'
import styled from "styled-components"
import SideMenu from "./SideMenu"

const ThreeColumnLayout = ({ children, sideWidth }) => {
  return (
    <Container>
      <SideMenu />
      <div className={`content-area width-${sideWidth}`}>
        {children}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding-left: 20rem;
  .content-area {
    width: 100%;
    &.width-250 {
      .left-wrap {
        padding-right: 28rem;
      }
      .right-wrap {
        width: 25rem;
      }
    }
    &.width-320 {
      .left-wrap {
        padding-right: 35rem;
      }
      .right-wrap {
        width: 32rem;
      }
    }
    .left-wrap {
      width: 100%;
      padding: 3rem 4rem;
    }
    .right-wrap {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      overflow-y: auto;
      z-index: 8;
    }
  }
`;

export default ThreeColumnLayout