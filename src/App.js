import React from 'react';
import GlobalStyles from './constants/globalStyle';
import SearchContextProvider from './context/SearchContext';
import SearchPage from './pages/Search';

export default function App() {
  return (
    <SearchContextProvider>
      <GlobalStyles />
      <SearchPage />
    </SearchContextProvider>
  )
}
