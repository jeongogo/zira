import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";

const Calendar = ({ taskList }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(
      taskList.map((task) => ({
        ...task,
        start: new Date(task.startDate.seconds*1000),
        end: new Date(task.endDate.seconds*1000),
        extendedProps: {
          id: task.id,
          isDone: task.state === "end"
        },
      }))
    );
  }, [taskList]);

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="ko"
        weekends={false}
        events={events}
        eventContent={(eventInfo) => renderEventContent(eventInfo, navigate)}
        dayCellContent={(args) => {
          return args.date.getDate();
        }}
      />
    </Container>
  )
}

function renderEventContent(eventInfo, navigate) {
  return (
    <EventContent className={eventInfo.event.extendedProps.status} onClick={() => navigate(`/task/${eventInfo.event.id}`)}>
      {eventInfo.event.title}
    </EventContent>
  )
}

const Container = styled.div`
  user-select: none;
  .fc .fc-toolbar-title {
    font-size: 1.8rem;
    font-weight: 500;
  }
  .fc .fc-button {
    padding: 0.3rem 1rem;
    color: #333;
    background-color: transparent;
    border: none;
    outline: none;
    &:disabled {
      opacity: 1;
    }
    &:hover {
      background-color: #ededed;
    }
    &:focus, &:focus:active {
      color: #333;
      background-color: transparent;
      box-shadow: none;
    }
    &.fc-today-button {
      text-transform: uppercase;
    }
  }
  .fc-h-event {
    border: none;
  }
  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 1.2rem;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: #fffde7;
  }
  .fc .fc-daygrid-day-top {
    flex-direction: row;
    padding: 0 3px;
  }
`;

const EventContent = styled.div`
  padding-top: 1px;
  padding-bottom: 1px;
  font-size: 1.1rem;
  text-align: center;
  cursor: pointer;
  &.pending {
    color: #222;
    background-color: var(--status-pending);
  }
  &.onHold {
    color: white;
    background-color: var(--status-onHold);
  }
  &.inProgress {
    color: white;
    background-color: var(--status-inProgress);
  }
  &.review {
    color: white;
    background-color: var(--status-review);
  }
  &.completed {
    color: #666;
    background-color: var(--status-completed);
  }
`;

export default Calendar