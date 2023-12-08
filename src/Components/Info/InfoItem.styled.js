import styled from 'styled-components';

export const StyledInfoItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const StyledImgBox = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  height: 100%;
`;

export const StyledTitleContent = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
