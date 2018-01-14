import Inferno from 'inferno';
import Component from 'inferno-component';

class Navbar extends Component {
  render() {
    return (
    	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href="/">Who Liked?</a>
		</nav>
    );
  }
}

export default Navbar;