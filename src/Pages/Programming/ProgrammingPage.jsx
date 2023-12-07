import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { StyledProgrammingLayout } from './programming.styled';

export default function ProgrammingPage() {
  return (
    <>
      <Header type="programming" />
      <StyledProgrammingLayout>
        <p>Programming</p>
      </StyledProgrammingLayout>
    </>
  );
}
