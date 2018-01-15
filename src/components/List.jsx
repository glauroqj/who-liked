import Inferno from 'inferno';
import Component from 'inferno-component';

class List extends Component {
  render() {
    return (
    	<div>
	    	<div class="container">
		    	<div class="d-flex flex-row justify-content-center">
					<div class="card border-secondary mb-3 mt-3">
					  <div class="card-body text-secondary">
					    <h4 class="card-title">Lista Dados</h4>
					  </div>
					</div>
		    	</div>
	    	</div>
    	</div>
    );
  }
}

export default List;