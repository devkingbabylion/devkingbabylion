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
        <StyledImg src={imgSrc} />
      </StyledImgBox>
      <StyledTitleContent>{title}</StyledTitleContent>
    </StyledInfoItemLayout>
  );
}
