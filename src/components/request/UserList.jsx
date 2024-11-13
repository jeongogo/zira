import React from 'react'
import styled from "styled-components";
import UserItem from "./UserItem";
import SubTitle from "../shared/common/SubTitle";

const UserList = ({ assignUsers, onAddUser, onRemoveUser }) => {
  const users = [
    {
      id: 1,
      displayName: "홍길동",
      photoUrl: "https://cdn.pixabay.com/photo/2024/04/18/09/44/polar-bear-8703907_640.jpg",
    },
    {
      id: 2,
      displayName: "김모미",
      photoUrl: "https://cdn.pixabay.com/photo/2023/12/13/14/01/woman-8446980_640.png",
    },
  ];

  return (
    <Container>
      <SubTitle>담당자 선택</SubTitle>
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
  background-color: #fafafa;
  overflow-y: auto;
  h2 {
    font-size: 1.9rem;
    font-weight: 500;
  }
  ul {
    padding-top: 0.5rem;
  }
`;

export default UserList