// app/client-layout.jsx
'use client';

import { ReduxProvider } from './provider';

const ClientLayout = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default ClientLayout;
