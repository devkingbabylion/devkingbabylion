import React, { useState } from 'react';
import { HeaderContainer, SearchBarWrapper } from './header.styled';
import { useSetRecoilState } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import devkingbabylion from '../../Assets/devkingbabylion.png';
import SearchBar from '../SearchBar/SearchBar';

export default function Header({ type }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const setSearchResult = useSetRecoilState(searchResultState);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) {
      setError('검색어를 입력해 주세요');
      return;
    }
    setSearchResult({ query });
    navigate('/search');
  };

  switch (type) {
    case 'home':
      return (
        <HeaderContainer type={type}>
          <Link to="/">🦁개발왕 아기사자🦁</Link>
          <li>
            <Link
              to="/"
              style={{
                color: '#5d5a88',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/programming">Programming</Link>
          </li>
        </HeaderContainer>
      );
    case 'search':
      return (
        <HeaderContainer type={type}>
          <Link to="/">🦁개발왕 아기사자🦁</Link>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/programming">Programming</Link>
          </li>
          <SearchBarWrapper>
            <SearchBar
              query={query}
              setQuery={setQuery}
              handleSearch={handleSearch}
            />
          </SearchBarWrapper>
        </HeaderContainer>
      );
    case 'programming':
      return (
        <HeaderContainer type={type}>
          <Link to="/">🦁개발왕 아기사자🦁</Link>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/programming"
              style={{
                color: '#5d5a88',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Programming
            </Link>
          </li>
          <SearchBarWrapper>
            <SearchBar
              query={query}
              setQuery={setQuery}
              handleSearch={handleSearch}
            />
          </SearchBarWrapper>
        </HeaderContainer>
      );
    default:
      return null;
  }
}
