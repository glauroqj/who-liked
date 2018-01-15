import { render } from 'inferno';
import Component from 'inferno-component';

import Loading from '../components/Loading.jsx'
import Navbar from '../components/Navbar.jsx';
import Login from '../components/Login.jsx';
import List from '../components/List.jsx'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			navbar: false,
			login: false,
			list: false
		}
	}
	render() {
		return (
			<div>
			<Loading></Loading>
			<Navbar></Navbar>
			<Login></Login>
			<List></List>
			</div>
			);
	}
}

export default Home;
