import React, { Component } from 'react';
import Loading from './Loading';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

  render() {
    return (
    	<div>
	    	<div className="container">
		    	<div className="d-flex flex-row justify-content-center">
					{this.props.loading &&
						<Loading/>
					}
					{!this.props.loading &&
						<div>
							<div className="card border-secondary mb-3 mt-3">
									<div className="card-body text-secondary text-center">
										<h4 className="card-title">Photos</h4>
									</div>
							</div>
							<ul className="list-inline">
								{this.props.photos.map((key, i) => {
									return(
										<React.Fragment key={i}>
											<li className="list-inline-item col-sm-4">
												<div className="card mb-2">
													<h3 className="card-header">Photo {i}</h3>
													<div className="card-body">
														<h6 className="card-title">{key.caption.text}</h6>
													</div>
														<img src={key.images.low_resolution.url} alt="Card image"/>
													<div className="card-body">
														<p className="card-text ml-auto">
															<i className="fa fa-heart" /> {key.likes.count} - <i className="fa fa-comment" /> {key.comments.count}
														</p>
													</div>
													<div className="card-body">
														<a href={key.link} target="_blank" className="card-link">Link on Instagram</a>
													</div>
													<ul className="list-group list-group-flush">
														{key.location &&
															<li className="list-group-item">{key.location.name}</li>
														}
													</ul>
													{key.users_in_photo != '' &&
														<div className="card-footer text-muted">
															Users in photo:
															{key.users_in_photo.map((key, i) => {
																return (
																	<React.Fragment key={i}>
																		<div>{key.user.username} </div>
																	</React.Fragment>
																)
																})
															}
														</div>
													}
												</div>
											</li>
										</React.Fragment>
									)
								})}
							</ul>
						</div>
					}
		    	</div>
	    	</div>
    	</div>
    );
  }
}

export default List;