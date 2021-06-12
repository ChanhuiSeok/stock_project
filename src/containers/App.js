import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Stock from './Stock';
import {GlobalStyles} from '../common/styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/stock" component={Stock} />
      </Router>
    </>
  );
};

export default App;
