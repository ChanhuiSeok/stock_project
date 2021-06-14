import StockHeader from '../components/StockHeader';
import {lightTheme, darkTheme} from '../common/styles/themes';
import {useDarkMode} from '../components/hooks/useDarkMode';
import {ThemeProvider} from 'styled-components';
import {FunctionComponent} from 'react';
import StockSearchInfo from '../components/StockSearchInfo';

const StockDetail: FunctionComponent = () => {
  const {theme, themeToggler} = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <StockHeader detail={true} theme={theme} themeToggler={themeToggler} />
        <StockSearchInfo />
      </ThemeProvider>
    </>
  );
};

export default StockDetail;
