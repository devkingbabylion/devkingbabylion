import styled from 'styled-components';

export const StyledCardLayout = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;

  /* height: 160px; */
  gap: 12px;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media screen and (max-width: 967px) {
    width: 100%;
  }
`;

export const StyledTitleContent = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;

  /* white-space: nowrap; */
`;

export const StyledDetailContent = styled.p`
  width: 100%;
  /* color: #3c3c43; */
  color: #2c2c2c;
  font-size: 14px;
  line-height: normal;

  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledDateContent = styled.p`
  /* color: rgba(102, 102, 102, 0.8); */
  color: #4a4a4a;
  font-size: 12px;
  line-height: normal;
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
`;
