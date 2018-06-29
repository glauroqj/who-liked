import { render } from 'inferno';
import Component from 'inferno-component';
import axios from 'axios'

import Loading from '../components/Loading.jsx'
import Navbar from '../components/Navbar.jsx';
import Login from '../components/Login.jsx';
import List from '../components/List.jsx';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			dashboard: false,
			login: true,
			user: {}
		}
	}
	
	async componentWillMount() {
		let vm = this;
		let token = window.location.hash.split('#');
		let verify = window.location.hash.split('=');
		
		if(verify[0] === '#access_token') {
			/* if has hash show the dashboard */
			let userInfo = await this.getUserInfo(token[1]);
			this.setState({
				dashboard: true,
				login: false,
				token: token[1],
				user: userInfo.data.data
			});
		}
		
		setTimeout(() => {
			vm.setState({
				loading: false
			});
		}, 1500);
	}
	
	getUserInfo(token) {
		return axios({
			method:'get',
			url:'https://api.instagram.com/v1/users/self/?' + token,
			responseType:'json'
		})
		.then((response) => {
			return response
		})
		.catch((err) => {
			return err
		})
	}
	
	render() {
		return (
			<div>
			{this.state.loading &&
				<Loading/>
			}
			{(!this.state.loading && this.state.login) &&
				[<Navbar/>,<Login/>]
			}
			{(!this.state.loading && this.state.dashboard) &&
				[<Navbar user={this.state.user}/>,<List/>]
			}
			</div>
		);
	}
}

export default Home;
