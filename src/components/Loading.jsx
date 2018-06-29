import React, { Component } from 'react';

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
    		<span className="d-flex flex-row justify-content-center p-3">
          <i className="fa fa-refresh fa-spin fa-lg fa-fw"></i> Carregando...
        </span>
    	</div>
    );
  }
}

export default Loading;