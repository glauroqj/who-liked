import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	call() {
		console.log('PROPS: ', this.props)
		// return props.callLogin()
	}

	render() {
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
				    		<button type="button" className="btn btn-primary btn-lg btn-block" onClick={ this.call }>
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