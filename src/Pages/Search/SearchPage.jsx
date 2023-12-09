import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';
import NewsCard from '../../Components/NewsCard/NewsCard';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { SearchResultLayOut } from './searchPage.styled';

export default function SearchPage() {
  const searchResult = useRecoilValue(searchResultState);
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
      {/* <Footer /> */}
    </div>
  );
}
