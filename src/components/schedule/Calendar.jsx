import React, { useEffect, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import useStorage from "../../store/storage"

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const taskList = useStorage((state) => state.taskList);

  useEffect(() => {
    const filterTaskList = taskList.filter((i) => !i.isDone);
    setEvents(filterTaskList);
  }, []);

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="ko"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </Container>
  )
}

function renderEventContent(eventInfo) {
  return (
    <EventContent>
      {eventInfo.event.title}
    </EventContent>
  )
}

const Container = styled.div`
  .fc-h-event {
    border: none;
  }
`;

const EventContent = styled.div`
  padding-top: 1px;
  padding-bottom: 1px;
  font-size: 1.1rem;
  text-align: center;
`;

export default Calendar