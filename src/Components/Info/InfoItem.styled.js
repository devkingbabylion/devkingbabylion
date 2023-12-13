import styled from 'styled-components';

export const StyledInfoItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  border: 1px solid blue;
`;

export const StyledImgBox = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 1px solid red; */
  @media screen and (max-width: 580px) {
    width: 75px;
    height: 75px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledTitleContent = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 580px) {
    font-size: 12px;
  }
`;
