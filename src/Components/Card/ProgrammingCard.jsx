import React, { useState } from 'react';
import styled from 'styled-components';
import linkIcon from '../../Assets/link.svg';
import Angular from '../../Assets/Angular.svg';
import JavaScript from '../../Assets/JavaScript.svg';
import CSS from '../../Assets/CSS.svg';
import BootStrap from '../../Assets/BootStrap.svg';
import HTML5 from '../../Assets/HTML5.svg';
import NodeJs from '../../Assets/NodeJs.svg';
import Sass from '../../Assets/Sass.svg';
import TailWind from '../../Assets/Tailwind.svg';
import TypeScript from '../../Assets/TypeScript.svg';
import Vue from '../../Assets/Vue.svg';

const StyledProgrammingCard = styled.div`
  width: 347px;
  height: 310px;
  border-radius: 20px;
  background: linear-gradient(
    to bottom,
    #a3a3a3 0%,
    #a3a3a3 60%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0.2) 100%
  );

  .item {
    display: flex;
    align-items: center;
    padding-top: 40%;
    color: #fff;
    font-size: 30px;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
const StyledHoverCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #8a8a8a;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 19px;
  img {
    width: 18px;
    height: 18px;
  }
  h1 {
    font-size: 30px;
    margin-top: 23px;
    margin-left: auto;
    margin-right: auto;
  }
  div {
    display: flex;
    align-items: center;
    margin-left: 27px;
    color: #fff;
  }
  a {
    margin-left: 8px;
    color: #fff;
    text-decoration: underline #fff;
  }
`;

export default function ProgrammingCard({ name, links }) {
  const [card, setCard] = useState(false);
  const logos = {
    Angular,
    JavaScript,
    CSS,
    HTML5,
    NodeJs,
    Sass,
    TailWind,
    BootStrap,
    TypeScript,
    Vue,
  };

  return (
    <div>
      <StyledProgrammingCard
        onMouseEnter={() => setCard(true)}
        onMouseLeave={() => setCard(false)}
      >
        {!card && (
          <div className="item">
            <img src={logos[name]} alt="logo" />
            <p>{name}</p>
          </div>
        )}
        {card && (
          <StyledHoverCard>
            <h1>{name}</h1>
            {links &&
              links.map((link, index) => (
                <div key={index}>
                  <img src={linkIcon} alt="Link" />
                  <a href={link.url}>{link.title}</a>
                </div>
              ))}
          </StyledHoverCard>
        )}
      </StyledProgrammingCard>
    </div>
  );
}
