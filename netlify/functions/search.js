import fetch from 'node-fetch';

export async function handler(event, context) {
  const query = event.queryStringParameters.query;
  const start = event.queryStringParameters.start || 1;
  console.log(`query ${query}`);
  const url = `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(
    query,
  )}&start=${start}`;

  const response = await fetch(url, {
    headers: {
      'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
    },
  });
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
