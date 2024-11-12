import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import TwoColumnLayout from "../../components/shared/layout/TwoColumnLayout"
import Home from "../../components/project/Home"
import WriteModal from "../../components/project/WriteModal";

const HomePage = () => {
  const [visibleWriteModal, setVisibleWriteModal] = useState(false);
  const [projectList, setProjectList] = useState([]);

  const handleGetProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    setProjectList(projects);
  }

  const handleAddProject = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "projects"), data);
      console.log("Document written with ID: ", docRef.id);
      setVisibleWriteModal(false);
      setTimeout(() => {
        handleGetProjects();
      }, 500);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    handleGetProjects();
  }, []);

  return (
    <TwoColumnLayout>
      <Home projectList={projectList} setVisibleWriteModal={setVisibleWriteModal} />
      {visibleWriteModal && <WriteModal setVisibleWriteModal={setVisibleWriteModal} handleAddProject={handleAddProject} />}
    </TwoColumnLayout>
  )
}

export default HomePage