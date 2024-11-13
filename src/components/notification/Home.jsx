import React from 'react'
import styled from "styled-components";
import Notification from "./Notification";
import PageTitle from "../shared/common/PageTitle";

const Home = ({ notificationList }) => {
  return (
    <Container>
      <PageTitle>알림</PageTitle>
      {notificationList?.length > 0 &&
        <div className="list">
          {notificationList.map((item) => (
            <Notification key={item.id} item={item} />
          ))}
        </div>
      }
    </Container>
  )
}

const Container = styled.div`
  .list {
    
  }
`;

export default Home