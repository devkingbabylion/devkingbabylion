import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 400px;
  padding: 10px 25px;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #f2f1fa;
  position: relative;
  justify-content: space-between;

  z-index: 0;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 89%;
  max-width: 320px;
  align-items: center;
  gap: 240px;
  flex-shrink: 0;
  background: none;
`;

export const SearchButton = styled.button`
  background: #f2f1fa;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
