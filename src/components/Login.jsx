import Component from 'inferno-component';
import { auth } from '../auth.js'

class Login extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	clientID: '',
	    	redirectURI: '',
	    	authData: false
	    }
		}
		
	componentWillMount() {
		if(auth != undefined) {
			this.setState({
				clientID: auth.clientID,
				redirectURI: auth.redirectURI,
				authData: true
			});
		}
	}

	loginInstagram() {
		if( auth != '' && auth != undefined ) {
			window.location.href = '//api.instagram.com/oauth/authorize/?client_id='+auth.clientID+'&redirect_uri='+auth.redirectURI+'&response_type=token';
		}

	}

	componentDidMount() {		

	}

	render() {
		console.log('STATE: ', this.state)
	    return (
	    	<div>
		    	<div className="container">
			    	<div className="d-flex flex-row justify-content-center">
						<div className="card border-secondary mb-3 mt-3">
						  <div className="card-body text-secondary">
						    <h4 className="card-title">Saiba quem curtiu suas fotos!</h4>
						  </div>
						</div>
			    	</div>
			    	<div className="d-flex flex-row justify-content-center">
			    		<div className="w-50">
				    		<button type="button" className="btn btn-primary btn-lg btn-block" onClick={ this.loginInstagram }>
								<i className="fa fa-instagram" aria-hidden="true"></i> Login Instagram
				    		</button>
				    	</div>	
			    	</div>
		    	</div>
	    	</div>
	    );
	}
}

export default Login;