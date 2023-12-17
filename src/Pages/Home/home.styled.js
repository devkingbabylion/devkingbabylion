import { styled } from 'styled-components';

export const StyledHomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  /* overflow-y: auto; */
`;
export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: calc(100vh - 200px);
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const StyledTitle = styled.p`
  font-weigth: bold;
  font-size: 20px;
`;

export const StyledError = styled.p`
  color: red;
`;
