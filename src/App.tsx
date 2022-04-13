import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/styled-components/GlobalStyles';
import { darkTheme, lightTheme } from '@/styled-components/Themes';

import Home from './pages/Home/Home';

function App() {
  const [isChangedTheme, setIsChangedTheme] = useState<string | null>('');

  const setColor = (color: string) => localStorage.setItem('Color', color);

  const themeToggler = (e: { target: { value: string } }) => {
    setColor(e.target.value);
    setIsChangedTheme(localStorage.getItem('Color'));

    localStorage.getItem('Color');
  };

  useEffect(() => {
    setIsChangedTheme(localStorage.getItem('Color'));
  }, []);

  const theme = useMemo(() => (isChangedTheme === 'light' ? lightTheme : darkTheme), [isChangedTheme]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Home handleChange={themeToggler} selected={localStorage.getItem('Color')} />
      </>
    </ThemeProvider>
  );
}

export default App;
