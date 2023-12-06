import React from 'react';
import {
  Container,
  TitleContent,
  DetailContent,
  Divider,
  DateContent,
} from './NewsCard.styled';

export default function NewsCard({ title, description, link, pubDate }) {
  return (
    <Container onClick={() => window.open(link, '_blank')}>
      <TitleContent dangerouslySetInnerHTML={{ __html: title }}></TitleContent>
      <DetailContent
        dangerouslySetInnerHTML={{ __html: description }}
      ></DetailContent>
      <Divider></Divider>
      <DateContent>{pubDate.split(' ').slice(0, 5).join(' ')}</DateContent>
    </Container>
  );
}
