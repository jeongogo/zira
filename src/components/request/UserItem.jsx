import React, { useEffect, useState } from 'react'
import { useDrag } from 'react-dnd';
import styled from "styled-components";

const ItemType = {
  USER: 'user',
};

const UserItem = ({ user, assignUsers, onAddUser, onRemoveUser }) => {
  const [checked, setChecked] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.USER,
    item: { user },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const onChange = (e) => {
    if (e.target.checked) {
      onAddUser(user);
    } else {
      onRemoveUser(user);
    }
  }

  useEffect(() => {
    const currentUser = assignUsers.filter((item) => item.id === user.id);

    if (currentUser.length > 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [assignUsers]);

  return (
    <Container>
      <div className="thumbnail"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        draggable
      >
        <img src={user.photoUrl} alt="" />
      </div>
      <div className="name">
        <label htmlFor={user.id}>{user.displayName}</label>
        <input type="checkbox" id={user.id} checked={checked} onChange={onChange} />
      </div>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 0.7rem 0;
  .thumbnail {
    width: 4rem;
    height: 4rem;
    margin-right: 0.7rem;
    border: 1px solid #ededed;
    border-radius: 50%;
    flex-shrink: 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .name {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    flex-grow: 1;
    label {
      width: 100%;
    }
    input {
      flex-shrink: 0;
    }
  }
`;

export default UserItem