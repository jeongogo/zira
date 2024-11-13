import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ThreeColumnLayout from "../../components/shared/layout/ThreeColumnLayout"
import PageTitle from "../../components/shared/common/PageTitle";
import UserList from "../../components/request/UserList";
import Project from "../../components/request/Project";
import Title from "../../components/request/Title";
import Content from "../../components/request/Content";
import Assignment from "../../components/request/Assignment";
import Attachment from "../../components/request/Attachment";
import Submit from "../../components/request/Submit";
import Date from "../../components/request/Date";
import useStore from "../../store/store";

const HomePage = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const [projectList, setProjectList] = useState([]);
  const [project, setProject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [assignUsers, setAssignUsers] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleGetProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    setProjectList([{ id: "none", name: "프로젝트를 선택해 주세요." }, ...projects]);
  }

  const onAddUser = (user) => {
    const currentUser = assignUsers.filter((item) => item.id === user.id);

    if (currentUser?.length > 0) {
      return;
    }
    
    setAssignUsers((prevUsers) => [...prevUsers, user]);
  }

  const onRemoveUser = (user) => {
    const currentUsers = assignUsers.filter((item) => item.id !== user.id);    
    setAssignUsers(currentUsers);
  }

  const handleRequest = async () => {
    if (project === "") {
      alert("프로젝트를 선택해 주세요.")
      return;
    }

    if (title === "") {
      alert("제목을 입력해 주세요.")
      return;
    }

    if (!startDateRef.current.value) {
      alert("시작일을 입력해 주세요.")
      return;
    }

    if (!endDateRef.current.value) {
      alert("종료일을 입력해 주세요.")
      return;
    }

    if (assignUsers?.length < 1) {
      alert("담당자를 지정해 주세요.")
      return;
    }

    try {
      setIsSubmit(true);
      const data = {
        project,
        title,
        content,
        startDate: new window.Date(startDateRef.current.value),
        endDate: new window.Date(endDateRef.current.value),
        assignUsers,
        attachments: [],
        status: "pending",
        requestor: {
          uid: user.uid,
          photoUrl: user.photoUrl ?? 'https://cdn.pixabay.com/photo/2024/02/23/23/58/dog-8593014_640.jpg',
          displayName: user.displayName ?? 'requestor',
        },
      }
      const docRef = await addDoc(collection(db, "tasks"), data);
      console.log("Document written with ID: ", docRef.id);
      navigate(-1);
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmit(false);
    }
  }

  useEffect(() => {
    handleGetProjects();
  }, []);
  
  return (
    <ThreeColumnLayout sideWidth={250}>
      <DndProvider backend={HTML5Backend}>
        <div className="left-wrap">
          <div className="max-content">
            <PageTitle>업무 요청</PageTitle>
            <hr />
            <Project projectList={projectList} setProject={setProject} />
            <Title title={title} setTitle={setTitle} />
            <Content content={content} setContent={setContent} />
            <Date startDateRef={startDateRef} endDateRef={endDateRef} />
            <Assignment onDrop={onAddUser} assignUsers={assignUsers} onRemoveUser={onRemoveUser} />
            <Attachment />
            <Submit isSubmit={isSubmit} handleRequest={handleRequest} />
          </div>
        </div>
        <div className="right-wrap">
          <UserList assignUsers={assignUsers} onAddUser={onAddUser} onRemoveUser={onRemoveUser} />
        </div>
      </DndProvider>
    </ThreeColumnLayout>
  )
}

export default HomePage