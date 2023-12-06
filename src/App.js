import React, { useState } from 'react';
import AppRoutes from './Routes/AppRoutes';
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
      <AppRoutes />
    </RecoilRoot>
  );
}
