import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { Link } from 'react-router-dom';

export default function SearchPage() {
  const searchResult = useRecoilValue(searchResultState);
  console.log(searchResult);

  return (
    <div>
      {searchResult && (
        <div>
          <Link to="/">home</Link>
          <h2 style={{ color: 'red' }}>검색 결과</h2>
          <ul>
            {searchResult.items.map((item, index) => (
              <li key={index}>
                <NewsCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
