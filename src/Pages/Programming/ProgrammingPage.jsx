import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { StyledProgrammingLayout } from './programming.styled';
import ProgrammingCard from '../../Components/Card/ProgrammingCard';

export default function ProgrammingPage() {
  return (
    <>
      <Header type="programming" />
      <StyledProgrammingLayout>
        <p>Programming</p>
        <ProgrammingCard name={'JavaScript'} />
        <ProgrammingCard
          name={'HTML5'}
          links={[
            { url: 'https://www.naver.com/', title: '링크 1' },
            { url: 'https://www.naver.com/', title: '링크 2' },
          ]}
        />
      </StyledProgrammingLayout>
      <Footer />
    </>
  );
}
