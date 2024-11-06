import React from 'react'
import moment from "moment";
import styled from "styled-components";
import useStorage from "../../store/storage";

const Task = ({ item }) => {
  const taskList = useStorage((state) => state.taskList);
  const setTaskList = useStorage((state) => state.setTaskList);

  const onChange = (e) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === item.id) {
        return {
          ...task,
          isDone: e.target.checked,
        }
      } else {
        return task;
      }
    });

    setTaskList(newTaskList);
  }

  return (
    <Container className={item.isDone ? "done" : ""}>
      <div className="title">{item.title}</div>
      <div className="date">
        {moment(item.start).format('YYYY-MM-DD')} ~ {moment(item.end).format('YYYY-MM-DD')}
      </div>
      <div className="buttons">
        <input type="checkbox" id={item.id} checked={item.isDone} onChange={onChange} />
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border-bottom: 0;
  }
  &.done {
    color: #aaa;
    &::before {
      background-color: #ddd;
    }
    .date {
      color: #aaa;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: dodgerblue;
    transition: all 0.1s;
    z-index: 2;
  }
  .title {
    max-width: 40vw;
    margin-right: auto;
    font-size: 1.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .date {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: #666;
    flex-shrink: 0;
  }
  .buttons {
    width: 5rem;
    margin-left: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

export default Task