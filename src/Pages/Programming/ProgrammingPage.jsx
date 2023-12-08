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
        <ProgrammingCard name={'Angular'} />
      </StyledProgrammingLayout>
      <Footer />
    </>
  );
}
