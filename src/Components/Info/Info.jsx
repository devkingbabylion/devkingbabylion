import React from 'react';
import InfoItem from './InfoItem';
import { StyledInfoLayout, StyledColBox } from './Info.styled';

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
      imgSrc: 'https://cdn-icons-png.flaticon.com/256/25/25231.png',
      link: 'https://github.com/devkingbabylion/devkingbabylion',
    },
    {
      title: 'Notion',
      imgSrc:
        'https://cdn.icon-icons.com/icons2/2428/PNG/512/notion_black_logo_icon_147102.png',
      link: 'https://heather-stamp-0c9.notion.site/b5a567a21cca4bb0b1810618b1f23d96?v=03f6dbb2cba94f95852a0d329a3494eb&pvs=4',
    },
    {
      title: 'Figma',
      imgSrc:
        'https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png',
      link: 'https://www.figma.com/file/vFEVBVZ7FQmJnqHwuVBmWR',
    },
    {
      title: 'Naver API',
      imgSrc:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c52c0238210507.Y3JvcCw5NTgsNzQ5LDIyMCw0NQ.png',
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
