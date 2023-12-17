import React from 'react';
import InfoItem from './InfoItem';
import { StyledInfoLayout, StyledColBox } from './Info.styled';
import Github_icon from '../../Assets/Github_logo_icon.png';
import Notion_icon_min from '../../Assets/notion_black_logo_icon-min.png';
import Figma_icon_min from '../../Assets/figma_logo_icon-min.png';
import Naver_icon_min from '../../Assets/Naver_logo_icon-min.png';

export default function Info() {
  const devData = [
    {
      title: '@swJaNG12',
      imgSrc: 'https://avatars.githubusercontent.com/u/123090529?v=4',
      link: 'https://github.com/swJaNG12',
    },
    {
      title: '@esoby',
      imgSrc: 'https://avatars.githubusercontent.com/u/138556584?v=4',
      link: 'https://github.com/esoby',
    },
    {
      title: '@GoodSilver9',
      imgSrc: 'https://avatars.githubusercontent.com/u/111060399?v=4',
      link: 'https://github.com/GoodSilver9',
    },
    {
      title: '@jiwanchoi',
      imgSrc: 'https://avatars.githubusercontent.com/u/54405518?v=4',
      link: 'https://github.com/jiwanchoi',
    },
  ];

  const projectData = [
    {
      title: 'GitHub',
      imgSrc: Github_icon,
      link: 'https://github.com/devkingbabylion/devkingbabylion',
    },
    {
      title: 'Notion',
      imgSrc: Notion_icon_min,
      link: 'https://heather-stamp-0c9.notion.site/b5a567a21cca4bb0b1810618b1f23d96?v=03f6dbb2cba94f95852a0d329a3494eb&pvs=4',
    },
    {
      title: 'Figma',
      imgSrc: Figma_icon_min,
      link: 'https://www.figma.com/file/vFEVBVZ7FQmJnqHwuVBmWR',
    },
    {
      title: 'Naver API',
      imgSrc: Naver_icon_min,
      link: 'https://developers.naver.com/docs/serviceapi/search/news/news.md#%EB%89%B4%EC%8A%A4',
    },
  ];

  return (
    <StyledInfoLayout>
      <StyledColBox>
        {devData.map((data, idx) => (
          <InfoItem key={idx} {...data} />
        ))}
      </StyledColBox>
      <StyledColBox>
        {projectData.map((data, idx) => (
          <InfoItem key={idx} {...data} />
        ))}
      </StyledColBox>
    </StyledInfoLayout>
  );
}
