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
  }
`;
export const StyledHoverCardLayOut = styled.div`
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
