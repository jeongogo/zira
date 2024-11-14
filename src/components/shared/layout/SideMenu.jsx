import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import useStorage from "../../../store/storage"
import styled from "styled-components";
import {
  BiHomeAlt,
  BiCalendar,
  BiListCheck,
  BiFolderPlus,
  BiBell,
  BiFolder
} from "react-icons/bi";
import useStore from "../../../store/store"
import { IoSettingsOutline } from "react-icons/io5";

const SideMenu = () => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const theme = useStorage((state) => state.theme);

  const onLogout = async () => {
    await signOut(auth);
    setUser("");
  };

  return (
    <Container className={`theme ${theme}`}>
      <ul>
        <li>
          <NavLink to="/">
            <BiHomeAlt style={{ fontSize: "1.6rem", margin: "0 1.1rem 0 0.1rem" }} />홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/schedule">
            <BiCalendar style={{ fontSize: "1.6rem", margin: "0 1.1rem 0 0.1rem" }} />일정
          </NavLink>
        </li>
        <li>
          <NavLink to="/task">
            <BiListCheck style={{ fontSize: "2.2rem", margin: "0 0.7rem 0 0" }} />할 일 목록
          </NavLink>
        </li>
        <li>
          <NavLink to="/project">
            <BiFolder style={{ fontSize: "1.6rem", margin: "0 1.1rem 0 0.2rem" }} />프로젝트
          </NavLink>
        </li>
        <li>
          <NavLink to="/notification">
            <BiBell style={{ fontSize: "1.6rem", margin: "0 1.1rem 0 0.2rem" }} />알림
          </NavLink>
        </li>
        <li className="bottom"></li>
        <li>
          <NavLink to="/request">
            <BiFolderPlus style={{ fontSize: "1.6rem", margin: "0 1.1rem 0 0.2rem" }} />업무 요청
          </NavLink>
        </li>
        <li>
            <Link to="/mypage">
              <div className="photo">
                <img src={user.photoURL ? user.photoURL : "/assets/images/avatar_default.png"} alt="" />
              </div>
              <div className="name">{user.email}</div>
            </Link>
        </li>
        <li>
          <NavLink to="/preferences">
            <IoSettingsOutline style={{ fontSize: "1.6rem", margin: "0 1.1rem 0 0.2rem" }} />설정
          </NavLink>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 22rem;
  user-select: none;
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 1.5rem;
    overflow-y: auto;
    li {
      padding: 0.5rem 0;
      &.bottom {
        margin-top: auto;
      }
      a {
        display: flex;
        align-items: center;
        padding: 1rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 0.5rem;
        &:hover {
          background-color: rgba(0,0,0,0.5);
          text-decoration: underline;
        }
        &.active {
          background-color: rgba(0,0,0,0.5);
        }
        .photo {
          width: 2.2rem;
          height: 2.2rem;
          margin-right: 0.5rem;
          background-color: #eee;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .name {
          margin-left: 0.4rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`;

export default SideMenu