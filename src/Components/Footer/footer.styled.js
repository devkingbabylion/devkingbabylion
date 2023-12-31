import styled from 'styled-components';

export const StyledFooterLayout = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100px;

  padding-top: 10px;
  background-color: #697077;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  align-items: center;

  /* min-width: 414px; */
  @media screen and (max-width: 640px) {
    flex-direction: column;
    font-size: 12px;
  }
`;

export const StyledFooterContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 4px;
  margin-bottom: 5px;
`;

export const StyledFooterLink = styled.a`
  color: #fff;
`;
