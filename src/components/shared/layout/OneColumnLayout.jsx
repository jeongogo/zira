import React from 'react'
import styled from "styled-components"

const OneColumnLayout = ({ children }) => {
  return (
    <Container>
      <div className="content-area">
        {children}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  .content-area {
    position: relative;
    width: 100%;
  }
`;

export default OneColumnLayout