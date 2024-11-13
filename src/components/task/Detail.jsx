import React, { useState } from 'react'
import moment from "moment";
import styled from "styled-components";
import PageTitle from "../shared/common/PageTitle";
import SubTitle from "../shared/common/SubTitle";
import Status from "./Status";
import { FcFolder } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Detail = ({ item, handleUpdateStatus }) => {
  const [visibleStatus, setVisibleStatus] = useState(false);

  const onEditStatus = (status) => {
    handleUpdateStatus(status);
    setVisibleStatus(false);
  }

  return (
    <Container>
      <div className="project">
        <FcFolder size={18} />{item.project.name}
      </div>
      <div className="top">
        <PageTitle>{item.title}</PageTitle>
        <div className="status">
          <button className={`open-status ${item.status}`} onClick={() => setVisibleStatus((prev) => !prev)}>
            {item.status === "pending" && "대기"}
            {item.status === "onHold" && "보류"}
            {item.status === "inProgress" && "진행중"}
            {item.status === "review" && "결과검토"}
            {item.status === "completed" && "완료"}
          </button>
          {visibleStatus && <Status onEditStatus={onEditStatus} />}
        </div>
        <button className="more">
          <BiDotsVerticalRounded size={20} />
        </button>
      </div>
      <div className="content">
        <div className="requestor">
          {item.requestor.displayName}
        </div>
        {item.content}
      </div>
      <div className="date">
        <SubTitle>시작/종료일</SubTitle>
        <div className="wrap">
          {moment(item.startDate.seconds*1000).format('YYYY-MM-DD')} ~ {moment(item.endDate.seconds*1000).format('YYYY-MM-DD')}
        </div>
      </div>
      <div className="assignments">
        <SubTitle>담당자</SubTitle>
        <ul>
          {item.assignUsers.map((user) => (
            <li key={user.id}>
              <div className="thumbnail">
                <img src={user.photoUrl} alt="" />
              </div>
              <div className="name">{user.displayName}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="attachment">
        <SubTitle>첨부파일</SubTitle>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .project {
    display: flex;
    align-items: flex-end;
    margin-right: 1rem;
    font-size: 1.5rem;
    color: #777;
    svg {
      margin-right: 0.5rem;
    }
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    h1 {
      max-width: calc(100% - 10rem);
      font-weight: 700;
    }
    .status {
      position: relative;
      margin-left: auto;
      .open-status {
        padding: 0.5rem 1rem;
        font-size: 1.3rem;
        font-weight: 500;
        border-radius: 0.5rem;
        transition: all 0.1s;
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
      }
    }
    .more {
      display: flex;
      margin-left: 1.5rem;
    }
  }
  .content {
    margin-top: 6rem;
    padding: 2.5rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    .requestor {
      margin-bottom: 1rem;
    }
  }
  .date {
    margin-top: 6rem;
    .wrap {
      font-size: 1.8rem;
      color: #454545;
    }
  }
  .assignments {
    margin-top: 6rem;
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 2rem;
      margin-top: 2rem;
      li {
        display: flex;
        align-items: center;
        .thumbnail {
          position: relative;
          width: 4rem;
          height: 4rem;
          margin-right: 0.8rem;
          border: 1px solid #ededed;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .name {
          font-size: 1.5rem;
        }
      }
    }
  }
  .attachment {
    margin-top: 6rem;
  }
`;

export default Detail