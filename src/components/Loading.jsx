import { render } from 'inferno';
import Component from 'inferno-component';

class Loading extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

  render() {
    return (
    	<div>
    		<span><i class="fa fa-refresh fa-spin fa-lg fa-fw"></i> Carregando...</span>
    	</div>
    );
  }
}

export default Loading;