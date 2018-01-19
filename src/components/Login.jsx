import Inferno from 'inferno';
import Component from 'inferno-component';

class Login extends Component {
    constructor(props) {
	    super(props);
	    this.clickMe = ''
    }
	clickMe() {
	    console.log('HIDE ALL')
	}

	render() {
	    return (
	    	<div>
		    	<div class="container">
			    	<div class="d-flex flex-row justify-content-center">
						<div class="card border-secondary mb-3 mt-3">
						  <div class="card-body text-secondary">
						    <h4 class="card-title">Saiba quem curtiu suas fotos!</h4>
						  </div>
						</div>
			    	</div>
			    	<div class="d-flex flex-row justify-content-center">
			    		<div class="w-50">
				    		<button type="button" class="btn btn-primary btn-lg btn-block" onClick={ this.clickMe }>
								<i class="fa fa-instagram" aria-hidden="true"></i> Login Instagram
				    		</button>
				    	</div>	
			    	</div>
		    	</div>
	    	</div>
	    );
	}
}

export default Login;