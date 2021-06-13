import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyles} from '../common/styles/globalStyles';
import Home from './Home';
import StockMain from './StockMain';
import StockDetail from './StockDetail';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/main" component={StockMain} />
          <Route path="/detail" component={StockDetail} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
