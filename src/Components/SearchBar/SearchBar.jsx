import React from 'react';
import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from './searchBar.styled';
import searchBtn from '../../Assets/Search.svg';
export default function SearchBar({ query, setQuery, handleSearch }) {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {/* <SearchButton src={searchBtn} alt="로고" /> */}
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
