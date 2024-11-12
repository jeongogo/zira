import React from 'react'
import styled from "styled-components";
import UserItem from "./UserItem";

const UserList = ({ assignUsers, onAddUser, onRemoveUser }) => {
  const users = [
    {
      id: 1,
      displayName: "전홍찬",
      photoUrl: "https://cdn.pixabay.com/photo/2024/04/18/09/44/polar-bear-8703907_640.jpg",
    },
    {
      id: 2,
      displayName: "이예진",
      photoUrl: "https://cdn.pixabay.com/photo/2023/12/13/14/01/woman-8446980_640.png",
    },
  ];

  return (
    <Container>
      <h2>담당자 선택</h2>
      <ul>
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            assignUsers={assignUsers}
            onAddUser={onAddUser}
            onRemoveUser={onRemoveUser}
          />
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  padding: 2rem;
  height: 100vh;
  user-select: none;
  border-left: 1px solid #ccc;
  overflow-y: auto;
  h2 {
    font-size: 1.9rem;
    font-weight: 500;
  }
  ul {
    margin-top: 1rem;
  }
`;

export default UserList