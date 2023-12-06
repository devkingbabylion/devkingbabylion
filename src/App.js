import React, { useState } from 'react';
import AppRoutes from './Routes/AppRoutes';
import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header/Header';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </RecoilRoot>
  );
}
