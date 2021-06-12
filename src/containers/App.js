import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from '../common/styles/globalStyles';
import {lightTheme, darkTheme} from '../common/styles/themes';
import Home from './Home';

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
