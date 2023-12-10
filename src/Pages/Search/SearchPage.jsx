import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';
import NewsCard from '../../Components/NewsCard/NewsCard';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { SearchResultLayOut } from './searchPage.styled';

export default function SearchPage() {
  const searchResult = useRecoilValue(searchResultState);
  // const [emptyResult, setEmptyResult] = useState(false);
  // useEffect(() => {
  //   if (searchResult === null) {
  //     setEmptyResult(true);
  //   }
  // }, [searchResult]);
  console.log(searchResult);

  return (
    <div>
      <Header type="search" />
      {searchResult && (
        <SearchResultLayOut>
          {searchResult.items.map((item, index) => (
            <li key={index}>
              <NewsCard {...item} />
            </li>
          ))}
        </SearchResultLayOut>
      )}
      {/* {emptyResult && (
        <SearchResultLayOut>
          <div>검색결과가없습니다.</div>
        </SearchResultLayOut>
      )} */}
      {/* <Footer /> */}
    </div>
  );
}
