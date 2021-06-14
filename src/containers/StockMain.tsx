import StockHeader from '../components/StockHeader';
import StockContent from '../components/StockContent';
import {lightTheme, darkTheme} from '../common/styles/themes';
import {useDarkMode} from '../components/hooks/useDarkMode';
import {ThemeProvider} from 'styled-components';
import {FunctionComponent} from 'react';

const StockMain: FunctionComponent = () => {
  const {theme, themeToggler} = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <StockHeader main={true} theme={theme} themeToggler={themeToggler} />
        <StockContent theme={theme} />
      </ThemeProvider>
    </>
  );
};

export default StockMain;
