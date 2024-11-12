import React, { useState } from 'react'
import styled from "styled-components";
import Button from "../shared/common/Button";

const WriteModal = ({ setVisibleWriteModal, handleAddProject }) => {
  const [projectName, setProjectName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (projectName.trim() === "") {
      return;
    }

    const data = {
      name: projectName,
    }

    handleAddProject(data);
  }

  return (
    <Container>
      <div className="wrap">
        <form onSubmit={onSubmit}>
          <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          <div className="submit-box">
            <Button theme="gray" onClick={() => setVisibleWriteModal(false)}>취소</Button>
            <Button theme="blue" onClick={onSubmit}>저장</Button>
          </div>
        </form>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.1);
  z-index: 10;
  .wrap {
    position: relative;
    width: 48rem;
    padding: 3.5rem 3rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 1rem;
    .submit-box {
      margin-top: 2rem;
      text-align: right;
      button {
        margin-left: 1.5rem;
      }
    }
  }
`;

export default WriteModal