import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 160px;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const TitleContent = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;

  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DetailContent = styled.p`
  width: 100%;
  color: #3c3c43;
  font-size: 14px;
  line-height: normal;

  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const DateContent = styled.p`
  color: rgba(102, 102, 102, 0.8);
  font-size: 12px;
  line-height: normal;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
`;
