import React from 'react'
import styled from "styled-components";
import useStorage from "../../store/storage"
import SubTitle from "../shared/common/SubTitle";

const Theme = () => {
  const theme = useStorage((state) => state.theme);
  const setTheme = useStorage((state) => state.setTheme);

  const themes = [
    { name: "Default", value: "default" },
    { name: "Nightfall", value: "nightfall" },
    { name: "Midnight Forest", value: "midnightForest" },
    { name: "Stellar Abyss", value: "stellarAbyss" },
    { name: "Shadowed Ocean", value: "shadowedOcean" },
    { name: "Obsidian Night", value: "obsidianNight" },
    { name: "Mystic Twilight", value: "mysticTwilight" },
    { name: "Deep Sapphire", value: "deepSapphire" },
    { name: "Ember Eclipse", value: "emberEclipse" },
    { name: "Foggy Dusk", value: "foggyDusk" },
    { name: "Ironwood", value: "ironwood" },
  ];

  return (
    <Container>
      <SubTitle>테마</SubTitle>
      <ul>
        {themes.map(({ name, value }) => (
          <li
            key={value}
            className={theme === value ? "active" : ""}
            onClick={() => setTheme(value)}
          >
            <div className={`theme ${value}`}></div>
            <div className="name">{name}</div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 3rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 3rem;
    li {
      display: flex;
      align-items: center;
      width: 20rem;
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      transition: all 0.1s;
      overflow: hidden;
      cursor: pointer;
      &.active, &:hover {
        box-shadow: 0 0 12px rgba(0,0,0,0.15);
        .name {
          font-weight: 500;
        }
      }
      .theme {
        position: relative;
        width: 4.4rem;
        height: 4.4rem;
        flex-shrink: 0;
      }
      .name {
        margin-left: 1rem;
        font-size: 1.3rem;
        color: #454545;
      }
    }
  }
`;

export default Theme