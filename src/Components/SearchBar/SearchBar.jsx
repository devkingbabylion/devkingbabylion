import React from 'react';
import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from './searchBar.styled';
import searchBtn from '../../Assets/Search.svg';
export default function SearchBar({ query, setQuery, handleSearch }) {
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearch();
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
