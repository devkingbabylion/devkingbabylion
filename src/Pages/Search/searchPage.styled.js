import styled from 'styled-components';

export const SearchResultLayOut = styled.ul`
  display: flex;
  justify-content: center;
  padding: 150px 20px 80px 20px;
  row-gap: 40px;
  column-gap: 5%;
  flex-wrap: wrap;
  @media screen and (max-width: 1050px) {
    column-gap: 3%;
  }
  @media screen and (max-width: 967px) {
    padding: 150px 100px 80px 100px;
  }
  @media screen and (max-width: 620px) {
    padding: 150px 40px 80px 40px;
    padding-top: 150px;
  }
`;
