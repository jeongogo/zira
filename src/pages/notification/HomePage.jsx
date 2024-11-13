import React, { useState } from 'react'
import TwoColumnLayout from "../../components/shared/layout/TwoColumnLayout"
import Home from "../../components/notification/Home"

const HomePage = () => {
  const [notificationList, setNotificationList] = useState([
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsa.",
      date: "2024-11-01",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, molestias?",
      date: "2024-11-09",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos modi architecto, consectetur doloribus quo debitis.",
      date: "2024-11-11",
    },
  ]);

  return (
    <TwoColumnLayout>
      <Home notificationList={notificationList} />
    </TwoColumnLayout>
  )
}

export default HomePage