import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import TwoColumnLayout from "../../components/shared/layout/TwoColumnLayout"
import PageTitle from "../../components/shared/common/PageTitle";
import Calendar from "../../components/schedule/Calendar";

const HomePage = () => {
  const [taskList, setTaskList] = useState([]);

  const handleGetTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    setTaskList(tasks);
  }

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <TwoColumnLayout>
      <PageTitle>일정</PageTitle>
      <hr />
      <Calendar taskList={taskList} />
    </TwoColumnLayout>
  )
}

export default HomePage