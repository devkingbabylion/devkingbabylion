import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../Recoil/searchResultState';

export default function SearchPage() {
  const searchResult = useRecoilValue(searchResultState);
  console.log(searchResult);

  return (
    <div>
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
    </div>
  );
}
