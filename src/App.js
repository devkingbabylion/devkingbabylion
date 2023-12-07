import React, { useState } from 'react';
<<<<<<< HEAD
import AppRoutes from './Routes/AppRoutes';
import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header/Header';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Footer from './Components/Footer/Footer';
=======
import ProgrammingCard from './Components/Card/ProgrammingCard';
>>>>>>> 0e287f2 (✨ feature:  Programming페이지 Card 컴포넌트구현)

export default function App() {
  return (
<<<<<<< HEAD
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Footer />
      <AppRoutes />
    </RecoilRoot>
=======
    <div>
      <h1>네이버 뉴스 검색</h1>
      <input
        type="text"
        placeholder="검색할 단어를 입력하세요"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {searchResult && (
        <div>
          <h2 style={{ color: 'red' }}>검색 결과</h2>
          <ul>
            {searchResult.items.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ProgrammingCard />
    </div>
>>>>>>> 0e287f2 (✨ feature:  Programming페이지 Card 컴포넌트구현)
  );
}
