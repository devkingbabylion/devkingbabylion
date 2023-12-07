import React from 'react';
import { HeaderContainer, SearchBarWrapper } from './header.styled';
import { Link } from 'react-router-dom';
import devkingbabylion from '../../Assets/devkingbabylion.png';
import SearchBar from '../SearchBar/SearchBar';
export default function Header({ type }) {
  switch (type) {
    case 'home':
      return (
        <HeaderContainer type={type}>
          <Link to="/">
            🦁개발왕 아기사자🦁
            {/* <img src={devkingbabylion} alt="로고" /> */}
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
            <SearchBar />
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
            <SearchBar />
          </SearchBarWrapper>
        </HeaderContainer>
      );
    default:
      return null;
  }
}
