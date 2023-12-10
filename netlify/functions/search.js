import fetch from 'node-fetch';

export async function handler(event, context) {
  const query = event.queryStringParameters.query;
  console.log(query);
  const url = `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(
    query,
  )}`;
  console.log(url);

  const response = await fetch(url, {
    headers: {
      'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
