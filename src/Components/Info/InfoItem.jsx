import React from 'react';
import {
  StyledInfoItemLayout,
  StyledImgBox,
  StyledImg,
  StyledTitleContent,
} from './InfoItem.styled';

export default function InfoItem({ title, imgSrc, link }) {
  return (
    <StyledInfoItemLayout onClick={() => window.open(link, '_blank')}>
      <StyledImgBox>
        <StyledImg src={imgSrc} alt="gitIcon" />
      </StyledImgBox>
      <StyledTitleContent>{title}</StyledTitleContent>
    </StyledInfoItemLayout>
  );
}
