import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../Assets/angular.svg';
import link from '../../Assets/link.svg';

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
  }
`;

export default function ProgrammingCard() {
  const [card, setCard] = useState(false);

  return (
    <div>
      <StyledProgrammingCard
        onMouseEnter={() => setCard(true)}
        onMouseLeave={() => setCard(false)}
      >
        {!card && (
          <div className="item">
            <img src={logo} alt="logo" />
            <p>Angular</p>
          </div>
        )}
        {card && (
          <StyledHoverCard>
            <h1>JavaScript</h1>
            <div>
              <img src={link} alt="MDN" />
              <a href="">JavaScript MDN</a>
            </div>
            <div>
              <img src={link} alt="MDN" />
              <a href="">JavaScript MDN</a>
            </div>
            <div>
              <img src={link} alt="MDN" />
              <a href="">JavaScript MDN</a>
            </div>
          </StyledHoverCard>
        )}
      </StyledProgrammingCard>
    </div>
  );
}
