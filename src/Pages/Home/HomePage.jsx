import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Info from '../../Components/Info/Info';
import { StyledHomeLayout, StyledTitle, StyledError } from './home.styled';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const setSearchResult = useSetRecoilState(searchResultState);
  const navigate = useNavigate();

  const handleError = error => {
    console.error('Error:', error);
    if (error.message.includes('API')) {
      setError(error.message);
    } else if (error.message.includes('검색어')) {
      setError(error.message);
    }
  };

  const handleSearch = async () => {
    const encText = encodeURIComponent(query); // 올바른 URL 인코딩을 위해 변수에서 함수로 수정
    const url = `/.netlify/functions/search?query=${encText}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('API 요청 중 오류가 발생했습니다.');
      }

      const data = await response.json();
      if (data.errorCode === 'SE01') {
        throw new Error('검색어를 입력해 주세요');
      }
      setSearchResult(data);
      setError(null);

      navigate('/search');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
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
    </>
  );
}
