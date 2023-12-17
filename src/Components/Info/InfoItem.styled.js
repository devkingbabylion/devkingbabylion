import styled from 'styled-components';

export const StyledInfoItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
  width: 20%;
`;

export const StyledImgBox = styled.div`
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 580px) {
    max-width: 75px;
    max-height: 75px;
  }
`;

export const StyledImg = styled.img`
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
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
