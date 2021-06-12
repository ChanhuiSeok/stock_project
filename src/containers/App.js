import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import Home from './Home';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    word-spacing:-1px;
  }
`;

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </>
);

export default App;
