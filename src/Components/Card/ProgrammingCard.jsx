import React, { useState } from 'react';
import {
  StyledProgrammingCardLayOut,
  StyledHoverCardLayOut,
  StyledImgBox,
  StyledDim,
} from './programmingCard.styled';
import linkIcon from '../../Assets/link.svg';
import Angular from '../../Assets/angular.svg';
import JavaScript from '../../Assets/JavaScript.svg';
import CSS from '../../Assets/CSS.svg';
import BootStrap from '../../Assets/BootStrap.svg';
import HTML5 from '../../Assets/HTML5.svg';
import NodeJs from '../../Assets/NodeJs.svg';
import Sass from '../../Assets/Sass.svg';
import TailWind from '../../Assets/Tailwind.svg';
import TypeScript from '../../Assets/TypeScript.svg';
import Vue from '../../Assets/Vue.svg';
import Npm from '../../Assets/npm.svg';
import Express from '../../Assets/express.svg';
import Jquery from '../../Assets/jquery.svg';
import react from '../../Assets/React.svg';

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
    Npm,
    Express,
    Jquery,
    React: react,
  };

  return (
    <div>
      {!card && (
        <>
          <StyledProgrammingCardLayOut onMouseEnter={() => setCard(true)}>
            <div className="item">
              <img src={logos[name]} alt="logo" />
              <p>{name}</p>
            </div>
          </StyledProgrammingCardLayOut>
        </>
      )}
      <StyledImgBox onClick={() => setCard(true)}>
        <img src={logos[name]} alt="logo" />
      </StyledImgBox>
      {card && (
        <>
          <StyledDim onClick={() => setCard(false)} />
          <StyledHoverCardLayOut
            onMouseLeave={() => setCard(false)}
            onClick={() => setCard(false)}
          >
            <h1>{name}</h1>
            {links &&
              links.map((link, index) => (
                <div key={index}>
                  <img src={linkIcon} alt="Link" />
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </div>
              ))}
          </StyledHoverCardLayOut>
        </>
      )}
    </div>
  );
}
