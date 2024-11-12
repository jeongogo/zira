import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ThreeColumnLayout from "../../components/shared/layout/ThreeColumnLayout"
import Detail from "../../components/task/Detail"
import Activity from "../../components/task/Activity";

const DetailPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState("");

  const handleGetTask = async () => {
    const docRef = doc(db, "tasks", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTask(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    handleGetTask();
  }, []);

  return (
    <ThreeColumnLayout sideWidth={320}>
      <div className="left-wrap">
        {task &&
          <Detail item={task} />
        }
      </div>
      <div className="right-wrap">
        <Activity />
      </div>
    </ThreeColumnLayout>
  )
}

export default DetailPage