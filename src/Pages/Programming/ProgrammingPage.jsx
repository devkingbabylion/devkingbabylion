import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { StyledProgrammingLayout } from './programming.styled';

export default function ProgrammingPage() {
  return (
    <StyledProgrammingLayout>
      <Header />
      <p>Programming</p>
      <Footer />
    </StyledProgrammingLayout>
  );
}
