import ThemeButton from '../components/ThemeButton';
import {BackgroundStyles} from '../common/styles/backgroundStyles';
import {lightTheme, darkTheme} from '../common/styles/themes';
import {useDarkMode} from '../components/hooks/useDarkMode';
import StockHeader from '../components/StockHeader';
import StockContent from '../components/StockContent';
import {ThemeProvider} from 'styled-components';

const Stock = () => {
  const {theme, themeToggler} = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <ThemeButton theme={theme} toggleTheme={themeToggler} />
        <BackgroundStyles />

        <StockHeader />
        <StockContent />
      </ThemeProvider>
    </>
  );
};

export default Stock;
