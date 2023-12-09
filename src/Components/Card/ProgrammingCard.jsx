import React, { useState } from 'react';
import {
  StyledProgrammingCardLayOut,
  StyledHoverCardLayOut,
} from './programmingCard.styled';
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
      <StyledProgrammingCardLayOut
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
          <StyledHoverCardLayOut>
            <h1>{name}</h1>
            {links &&
              links.map((link, index) => (
                <div key={index}>
                  <img src={linkIcon} alt="Link" />
                  <a href={link.url}>{link.title}</a>
                </div>
              ))}
          </StyledHoverCardLayOut>
        )}
      </StyledProgrammingCardLayOut>
    </div>
  );
}
