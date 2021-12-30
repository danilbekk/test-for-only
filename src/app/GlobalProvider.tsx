import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import { store } from './store';

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <GlobalStyles />
            {children}
          </BrowserRouter>
        </ReduxProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};
