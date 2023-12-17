import React, { useState, useRef, useEffect } from 'react';
import {
  SearchBarContainer,
  SearchInput,
  SearchBarContent,
  SearchButton,
  CloseButton,
} from './searchBtn.styled';
import searchBtn from '../../Assets/Search.svg';
import searchBtn2 from '../../Assets/Search2.svg';

export default function SearchBtn({ query, setQuery, handleSearch }) {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const searchBarRef = useRef(null);
  const searchInputRef = useRef(null);
  const handleSearchButtonClick = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleOutsideClick = e => {
    if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
      setIsSearchBarOpen(false);
    }
  };
  const handleWheel = () => {
    setIsSearchBarOpen(false);
  };
  const handleCloseButtonClick = () => {
    setIsSearchBarOpen(false);
  };
  useEffect(() => {
    if (isSearchBarOpen) {
      document.addEventListener('mouseleave', handleOutsideClick); // 마우스가 창을 떠나는 경우
      document.addEventListener('wheel', handleWheel);
    } else {
      document.removeEventListener('mouseleave', handleOutsideClick);
      document.removeEventListener('wheel', handleWheel);
    }

    return () => {
      document.removeEventListener('mouseleave', handleOutsideClick);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [isSearchBarOpen]);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      search();
    }
  };

  const search = () => {
    handleSearch();
    if (!query.trim()) {
      searchInputRef.current.focus();
    }
  };
  return (
    <div>
      <SearchButton onClick={handleSearchButtonClick}>
        <img
          src={searchBtn}
          alt="Search Icon"
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        />
      </SearchButton>

      <SearchBarContainer
        isOpen={isSearchBarOpen ? 'true' : undefined}
        ref={searchBarRef}
      >
        <SearchBarContent>
          <img
            src={searchBtn2}
            alt="Search Icon"
            style={{
              width: '20px',
              height: '20px',
              cursor: 'pointer',
            }}
          />
          <SearchInput
            type="text"
            placeholder="Search for..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && search()}
            ref={searchInputRef}
          />
        </SearchBarContent>
        {/* <CloseButton onClick={handleCloseButtonClick} /> */}
      </SearchBarContainer>
    </div>
  );
}
