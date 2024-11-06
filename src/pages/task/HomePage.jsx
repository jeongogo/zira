import React, { useState } from 'react'
import useStorage from "../../store/storage"
import BasicTheme from "../../components/shared/theme/BasicTheme"
import WriteButton from "../../components/task/WriteButton";
import WriteModal from "../../components/task/WriteModal";
import PageTitle from "../../components/shared/common/PageTitle";
import Task from "../../components/task/Task";
import Sort from "../../components/task/Sort";

const HomePage = () => {
  const taskList = useStorage((state) => state.taskList);
  const setTaskList = useStorage((state) => state.setTaskList);
  const [visibleWriteModal, setVisibleWriteModal] = useState(false);
  
  return (
    <BasicTheme>
      <PageTitle>할 일 목록</PageTitle>
      <hr />
      {/* <Sort /> */}
      {taskList.length > 0 &&
        <div className="table">
          {taskList.map((item) => (
            <Task key={item.id} item={item} />
          ))}
        </div>
      }
      <WriteButton setVisibleWriteModal={setVisibleWriteModal} />
      {visibleWriteModal && <WriteModal setVisibleWriteModal={setVisibleWriteModal} />}
    </BasicTheme>
  )
}

export default HomePage