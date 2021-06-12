import Toggler from '../components/Toggler';
import {BackgroundStyles} from '../common/styles/backgroundStyles';
import {lightTheme, darkTheme} from '../common/styles/themes';
import {useDarkMode} from '../components/hooks/useDarkMode';
import {ThemeProvider} from 'styled-components';

const Stock = () => {
  const {theme, themeToggler} = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Toggler theme={theme} toggleTheme={themeToggler} />
        <BackgroundStyles />

        <div>
          <p>테스트 페이지(stock)</p>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Stock;
