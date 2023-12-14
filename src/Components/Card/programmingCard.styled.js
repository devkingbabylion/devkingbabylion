import styled from 'styled-components';

export const StyledProgrammingCardLayOut = styled.div`
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
    margin: 0px 10px;
  }

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const StyledImgBox = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100%;
  }

  @media screen and (min-width: 414px) {
    display: none;
  }
`;

export const StyledHoverCardLayOut = styled.div`
  width: 347px;
  height: 310px;
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
  @media screen and (max-width: 414px) {
    position: absolute;
    top: 50vh;
    left: 50vw;
    z-index: 999;
    transform: translate(-50%, -50%);
    animation-duration: 0.5s;
    animation-name: fadein;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const StyledDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 115%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 414px) {
    display: none;
  }
  animation-duration: 0.5s;
  animation-name: fadein;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
