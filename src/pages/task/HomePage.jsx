import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import TwoColumnLayout from "../../components/shared/layout/TwoColumnLayout"
import PageTitle from "../../components/shared/common/PageTitle";
import Task from "../../components/task/Task";
import Sort from "../../components/task/Sort";

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
      <PageTitle>할 일 목록</PageTitle>
      <hr />
      {/* <Sort /> */}
      {taskList.length > 0 &&
        <div className="list">
          {taskList.map((item) => (
            <Task key={item.id} item={item} />
          ))}
        </div>
      }
    </TwoColumnLayout>
  )
}

export default HomePage