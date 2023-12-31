import styled from 'styled-components';

export const StyledProgrammingLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledProgramminContainer = styled.div`
  padding: 50px;
  padding-top: 150px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;

  @media screen and (max-width: 414px) {
    padding: 5%;
    padding-top: 150px;
    gap: 75px;
  }
`;
