import React from 'react';
import {
  StyledNewsCardLayout,
  StyledTitleContent,
  StyledDetailContent,
  StyledDivider,
  StyledDateContent,
} from './NewsCard.styled';

export default function NewsCard({ title, description, link, pubDate }) {
  return (
    <StyledNewsCardLayout onClick={() => window.open(link, '_blank')}>
      <StyledTitleContent
        dangerouslySetInnerHTML={{ __html: title }}
      ></StyledTitleContent>
      <StyledDetailContent
        dangerouslySetInnerHTML={{ __html: description }}
      ></StyledDetailContent>
      <StyledDivider></StyledDivider>
      <StyledDateContent>
        {pubDate.split(' ').slice(0, 5).join(' ')}
      </StyledDateContent>
    </StyledNewsCardLayout>
  );
}
