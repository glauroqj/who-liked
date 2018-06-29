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

	componentDidMount() {
		var vm = this;
		setTimeout(function() {
			vm.setState({
				loading: false
			});
		}, 1500);
	}

	render() {
		return (
			<div>
				{this.state.loading &&
					<Loading/>
				}
				{!this.state.loading &&
					[<Navbar/>,<Login/>]
				}
			</div>
		);
	}
}

export default Home;
