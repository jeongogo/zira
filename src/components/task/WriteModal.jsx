import React, { useEffect, useRef } from 'react'
import styled from "styled-components";
import useStorage from "../../store/storage";
import Button from "../shared/common/Button";

const Write = ({ setVisibleWriteModal }) => {
  const taskList = useStorage((state) => state.taskList);
  const setTaskList = useStorage((state) => state.setTaskList);
  const inputTitleRef = useRef(null);
  const inputStartDateRef = useRef(null);
  const inputEndDateRef = useRef(null);

  const onSave = () => {
    if (inputTitleRef.current.value.trim() === "" || inputStartDateRef.current.value.trim() === "" || inputEndDateRef.current.value.trim() === "") {
      return;
    }

    const newTask = {
      id: taskList.length + 1,
      title: inputTitleRef.current.value,
      start: inputStartDateRef.current.value,
      end: inputEndDateRef.current.value,
      isDone: false,
    }

    setTaskList([ newTask, ...taskList ]);
    setVisibleWriteModal(false);
  }

  useEffect(() => {
    if (inputTitleRef.current !== null) {
      inputTitleRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <div className="wrap">
        <h2>제목</h2>
        <div className="input-box">
          <input type="text" ref={inputTitleRef} />
        </div>
        <h2>시작/종료일</h2>
        <div className="date-box">
          <input type="date" ref={inputStartDateRef} placeholder="start" />
          <input type="date" ref={inputEndDateRef} />
        </div>
        <div className="submit-box">
          <Button theme="gray" onClick={() => setVisibleWriteModal(false)}>취소</Button>
          <Button theme="blue" onClick={onSave}>저장</Button>
        </div>
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
    h2 {
      margin-top: 2rem;
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
      font-weight: 500;
      &:first-of-type {
        margin-top: 0;
      }
    }
    .date-box {
      display: flex;
      gap: 1rem;
    }
    .input-box {
    }
    .submit-box {
      margin-top: 3rem;
      text-align: right;
      button {
        margin-left: 1.5rem;
      }
    }
  }
`;

export default Write