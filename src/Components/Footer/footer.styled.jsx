import styled from 'styled-components';

export const StyledFooterLayout = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100px;
  background-color: #697077;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  color: #ffffff;
  align-items: center;
`;

export const StyledFooterContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 4px;
  margin-bottom: 5px;
`;

export const StyledFooterLink = styled.a`
  color: #b9dcde;
`;
