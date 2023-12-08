import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
  padding-left: 50px;
  padding-right: 50px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  gap: 50px;
  // justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 18px;

  ${props => {
    switch (props.type) {
      case 'home':
        return css`
          justify-content: center;
        `;
      default:
        return css``;
    }
  }};
`;

export const SearchBarWrapper = styled.div`
  margin-left: auto;
`;
