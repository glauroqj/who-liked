import { version } from 'inferno';
import Component from 'inferno-component';
import './registerServiceWorker';
import Logo from './logo';

import Home from './pages/Home';

import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <IndexRoute component={ Home }/>
    </Route>
  </Router>
);

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/Home" component={Home} />
      </div>
    );
  }
}

export default App;
