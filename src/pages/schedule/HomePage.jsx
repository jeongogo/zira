import React from 'react'
import BasicTheme from "../../components/shared/theme/BasicTheme"
import PageTitle from "../../components/shared/common/PageTitle";
import Calendar from "../../components/schedule/Calendar";

const HomePage = () => {  
  return (
    <BasicTheme>
      <PageTitle>일정</PageTitle>
      <hr />
      <Calendar />
    </BasicTheme>
  )
}

export default HomePage