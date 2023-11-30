import React, { useState } from "react";

const NaverSearchExample = () => {
	const [query, setQuery] = useState("");
	const [searchResult, setSearchResult] = useState(null);
	const [error, setError] = useState(null);
	const client_id = process.env.REACT_APP_CLIENT_ID;
	const client_secret = process.env.REACT_APP_CLIENT_SECRET;

	const handleSearch = async () => {
		const encText = encodeURIComponent(query); // 올바른 URL 인코딩을 위해 변수에서 함수로 수정
		const url = `v1/search/news.json?query=${encText}`;

		try {
			const response = await fetch(url, {
				headers: {
					"X-Naver-Client-Id": client_id,
					"X-Naver-Client-Secret": client_secret,
				},
			});

			console.log(response);

			if (!response.ok) {
				throw new Error("네이버 API 요청 실패");
			}

			const data = await response.json();
			setSearchResult(data);
			setError(null);
			console.log(searchResult);

			console.log(data);
		} catch (error) {
			console.error("Error:", error);
			setError("API 요청 중 오류가 발생했습니다.");
		}
	};

	return (
		<div>
			<h1>네이버 뉴스 검색</h1>
			<input
				type="text"
				placeholder="검색할 단어를 입력하세요"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>검색</button>

			{error && <p style={{ color: "red" }}>{error}</p>}

			{searchResult && (
				<div>
					<h2>검색 결과</h2>
					<ul>
						{searchResult.items.map((item, index) => (
							<li key={index}>
								<strong>{item.title}</strong>
								<p>{item.description}</p>
								<a href={item.link} target="_blank" rel="noopener noreferrer">
									{item.link}
								</a>
								console.log(item)
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default NaverSearchExample;
