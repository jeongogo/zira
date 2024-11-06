import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiHomeAlt, BiCalendar, BiListCheck } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const SideMenu = () => {
  return (
    <Container>
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
          <NavLink to="/setting">
            <IoSettingsOutline style={{ fontSize: "1.8rem", margin: "0 0.7rem 0 0" }} />설정
          </NavLink>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 4.4rem;
  left: 0;
  width: 20rem;
  background-color: white;
  border-right: 1px solid #ededed;
  user-select: none;
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 4.4rem);
    padding: 2rem 1.5rem;
    li {
      padding: 0.5rem 0;
      &:last-of-type {
        margin-top: auto;
      }
      a {
        display: flex;
        align-items: center;
        padding: 1rem;
        font-size: 1.4rem;
        border-radius: 0.5rem;
        &:hover {
          background-color: #f9f9f9;
          text-decoration: underline;
        }
        &.active {
          background-color: #f9f9f9;
        }
      }
    }
  }
`;

export default SideMenu