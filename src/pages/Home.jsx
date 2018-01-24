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
			loading: true
		}
	}

	componentWillUpdate() {
		if(this.state.loading) {
			return [<Loading></Loading>]
		} else {
			return [<Navbar></Navbar>, <Login></Login>]
		}
	}

	componentDidMount() {
		var vm = this;
		setTimeout(function() {
			vm.setState({
				loading: false
			});
			console.log('CARREGOu')
		}, 1500);
	}

	render() {
		return (
			<div>
				{this.componentWillUpdate()}
			</div>
		);
	}
}

export default Home;
