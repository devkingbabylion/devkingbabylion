import React from 'react';
import AppRoutes from './Routes/AppRoutes';
import GlobalStyle from './Styles/GlobalStyle';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <AppRoutes />
    </RecoilRoot>
  );
}
