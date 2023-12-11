import styled, { css } from 'styled-components';

export const StyledHeaderLayout = styled.header`
  background-color: white;
  padding-left: 50px;
  padding-right: 50px;
  height: 100px;
  display: flex;
  gap: 50px;
  align-items: center;
  list-style: none;
  font-size: 18px;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  position: fixed;
  top: 0;
  transition: transform 0.5s ease;

  ${({ scrolling }) =>
    scrolling &&
    css`
      transform: translateY(-100%);
    `}
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

export const StyledSearchBarWrapper = styled.div`
  margin-left: auto;
`;
export const StyledHeaderMenuLayout = styled.ul`
  display: flex;
  gap: 50px;
`;
