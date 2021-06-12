import {BrowserRouter as Router, Route} from 'react-router-dom';
import {GlobalStyles} from '../common/styles/globalStyles';
import Home from './Home';
import Stock from './Stock';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/stock" component={Stock} />
      </Router>
      <Footer />
    </>
  );
};

export default App;
