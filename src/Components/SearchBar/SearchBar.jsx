import React, { useRef } from 'react';
import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from './searchBar.styled';
import searchBtn from '../../Assets/Search.svg';
export default function SearchBar({ query, setQuery, handleSearch }) {
  const inputRef = useRef(null);
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      try {
        handleSearch();
      } catch (error) {
        // 에러 발생 시, 처리하고 input에 focus 설정
        console.error(error);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    }
  };
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={handleSearch}>
        <img
          src={searchBtn}
          alt="Search Icon"
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
        />
      </SearchButton>
    </SearchBarContainer>
  );
}
