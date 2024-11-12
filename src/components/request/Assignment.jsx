import React from 'react'
import { useDrop } from 'react-dnd';
import styled from "styled-components";
import { BiX } from "react-icons/bi";
import SubTitle from "../shared/common/SubTitle";

const ItemType = {
  USER: 'user',
};

const Assignment = ({ onDrop, assignUsers, onRemoveUser }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemType.USER,
    drop: (item) => onDrop(item.user),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  
  return (
    <Container>
      <SubTitle require>담당자</SubTitle>
      <div
        ref={drop}
        className="list"
        style={{
          backgroundColor: isOver ? "#f0f0f0" : assignUsers?.length ? "#fff" : "#fafafa",
          borderRadius: '0.5rem'
        }}
      >
        {assignUsers.map((user, index) => (
          <div key={index} className="assign-user">
            <div className="thumbnail">
              <button className="remove" onClick={() => onRemoveUser(user)}><BiX /></button>
              <img src={user.photoUrl} alt="" />
            </div>
            <div className="name">{user.displayName}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 3rem;
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    min-height: 10rem;
    gap: 2rem;
    .assign-user {
      display: flex;
      align-items: center;
      &:hover {
        .thumbnail {
          .remove {
            display: flex;
          }
        }
      }
      .thumbnail {
        position: relative;
        width: 4rem;
        height: 4rem;
        margin-right: 0.7rem;
        border: 1px solid #ededed;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .remove {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          background-color: rgba(0,0,0,0.5);
          z-index: 2;
          svg {
            font-size: 2.4rem;
            color: white;
          }
        }
      }
      .name {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Assignment