import React from 'react';
import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from './searchBar.styled';
import searchBtn from '../../Assets/Search.svg';
export default function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="Search for..." />
      {/* <SearchButton src={searchBtn} alt="로고" /> */}
      <SearchButton>
        <img
          src={searchBtn}
          alt="Search Icon"
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
        />
      </SearchButton>
    </SearchBarContainer>
  );
}
