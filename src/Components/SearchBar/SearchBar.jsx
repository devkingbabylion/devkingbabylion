import React, { useRef } from 'react';
import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from './searchBar.styled';
import searchBtn from '../../Assets/Search.svg';
export default function SearchBar({ query, setQuery, handleSearch }) {
  const inputRef = useRef(null);
  const search = () => {
    handleSearch();
    if (!query.trim()) {
      inputRef.current.focus();
    }
  };
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && search()}
        ref={inputRef}
      />
      <SearchButton onClick={search}>
        <img
          src={searchBtn}
          alt="Search Icon"
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
        />
      </SearchButton>
    </SearchBarContainer>
  );
}
