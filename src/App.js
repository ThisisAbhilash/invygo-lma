import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import Appbar from './components/app-bar';
import AppRoutes from './app-routes';

function App() {
  return (
    <ThemeProvider>
        <Appbar />
        <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
