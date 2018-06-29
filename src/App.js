import React, { Component } from 'react';
import './App.css';

import axios from 'axios'
import {auth} from './auth';

import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Login from './components/Login';
import List from './components/List';

class App extends Component {
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

	loginInstagram() {
		console.log('call API')
		// if( auth !== '' && auth !== undefined ) {
		// 	window.location.href = '//api.instagram.com/oauth/authorize/?client_id='+auth.clientID+'&redirect_uri='+auth.redirectURI+'&response_type=token';
		// }
	}
	
	render() {
		return (
			<div>
			{this.state.loading &&
				<Loading/>
			}
			{(!this.state.loading && this.state.login) &&
				[<Navbar key={0}/>,<Login callLogin={this.loginInstagram.bind(this)} key={1}/>]
			}
			{(!this.state.loading && this.state.dashboard) &&
				[<Navbar user={this.state.user} key={0}/>,<List key={1}/>]
			}
			</div>
		);
	}
}

export default App;

