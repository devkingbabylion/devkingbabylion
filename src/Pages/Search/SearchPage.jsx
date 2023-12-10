import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';
import NewsCard from '../../Components/NewsCard/NewsCard';
import Header from '../../Components/Header/Header';
import { SearchResultLayOut } from './searchPage.styled';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function SearchPage() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const searchResult = useRecoilValue(searchResultState);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const fetchSearchResults = async pageNum => {
    const encText = encodeURIComponent(searchResult?.query);
    const calPageNum = parseInt((pageNum - 1) * 10 + 1);

    const base_url = `/.netlify/functions/search?query=${encText}&start=${calPageNum}`;
    try {
      const response = await fetch(base_url);
      if (!response.ok) {
        throw new Error('API 요청 중 오류가 발생했습니다.');
      }
      let data = await response.json();
      if (data.items.length) {
        setItems(prevItems => [...prevItems, ...data.items]);
      } else {
        setHasMoreItems(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setHasMoreItems(false);
    }
  };

  useEffect(() => {
    setItems([]);
    fetchSearchResults(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult?.query]);

  return (
    <div>
      <Header type="search" />
      <InfiniteScroll
        dataLength={items.length}
        next={() => {
          setPage(prevPage => {
            const nextPage = prevPage + 1;
            fetchSearchResults(nextPage);
            return nextPage;
          });
        }}
        hasMore={hasMoreItems}
        loader={
          <p style={{ textAlign: 'center', paddingBottom: '30px' }}>
            Loading...
          </p>
        }
        endMessage={
          <p style={{ textAlign: 'center', paddingBottom: '30px' }}>
            <b>더 이상 가져올 뉴스가 없습니다.</b>
          </p>
        }
      >
        <SearchResultLayOut>
          {items.map((item, index) => (
            <li key={index}>
              <NewsCard {...item} />
            </li>
          ))}
        </SearchResultLayOut>
      </InfiniteScroll>
    </div>
  );
}
