import {Router, Route, Switch} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    word-spacing:-1px;
  }
`;

const Apps = () => (
  <>
    <GlobalStyles />
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/stock" component={Stock} />
    </Router>
  </>
);

export default App;
