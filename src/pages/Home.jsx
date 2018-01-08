import { render } from 'inferno';
import Component from 'inferno-component';

import Navbar from '../components/Navbar.jsx';
import Login from '../components/Login.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Login></Login>
      </div>
    );
  }
}

export default Home;
