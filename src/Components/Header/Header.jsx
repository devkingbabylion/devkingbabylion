import React, { useState, useEffect } from 'react';
import {
  StyledHeaderLayout,
  StyledSearchBarWrapper,
  StyledHeaderMenuLayout,
} from './header.styled';
import { useSetRecoilState } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import lionIcon from '../../Assets/devkingbabylion.png';

export default function Header({ type }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const setSearchResult = useSetRecoilState(searchResultState);
  const navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) {
      setError('검색어를 입력해 주세요');
      return;
    }
    setSearchResult({ query });
    navigate('/search');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  switch (type) {
    case 'home':
      return (
        <StyledHeaderLayout type={type}>
          <Link className="home" to="/">
            <span className="text">🦁개발왕 아기사자🦁</span>
            <img src={lionIcon} alt="Lion Icon" className="icon" />
          </Link>

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
        </StyledHeaderLayout>
      );
    case 'search':
      return (
        <StyledHeaderLayout
          type={type}
          scrolling={scrolling ? 'true' : undefined}
        >
          <Link className="home2" to="/">
            <span className="text2">🦁개발왕 아기사자🦁</span>
            <img src={lionIcon} alt="Lion Icon" className="icon" />
          </Link>

          <StyledHeaderMenuLayout>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/programming">Programming</Link>
            </li>
          </StyledHeaderMenuLayout>
          <StyledSearchBarWrapper>
            <SearchBar
              query={query}
              setQuery={setQuery}
              handleSearch={handleSearch}
            />
          </StyledSearchBarWrapper>
        </StyledHeaderLayout>
      );
    case 'programming':
      return (
        <StyledHeaderLayout
          type={type}
          scrolling={scrolling ? 'true' : undefined}
        >
          <Link className="home2" to="/">
            <span className="text2">🦁개발왕 아기사자🦁</span>
            <img src={lionIcon} alt="Lion Icon" className="icon" />
          </Link>
          <StyledHeaderMenuLayout>
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
          </StyledHeaderMenuLayout>
          <StyledSearchBarWrapper>
            <SearchBar
              query={query}
              setQuery={setQuery}
              handleSearch={handleSearch}
            />
          </StyledSearchBarWrapper>
        </StyledHeaderLayout>
      );
    default:
      return null;
  }
}
