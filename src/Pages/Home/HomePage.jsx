import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Info from '../../Components/Info/Info';
import {
  StyledHomeLayout,
  RootContainer,
  StyledTitle,
  StyledError,
} from './home.styled';

export default function HomePage() {
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

  return (
    <>
      <RootContainer>
        <Header type="home" />
        <StyledHomeLayout>
          <StyledTitle>🦁개발왕 아기사자🦁</StyledTitle>
          <SearchBar
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
          />
          {error && <StyledError>{error}</StyledError>}
          <Info />
        </StyledHomeLayout>
        <Footer />
      </RootContainer>
    </>
  );
}
