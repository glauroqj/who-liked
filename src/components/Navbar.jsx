import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		    <a className="navbar-brand" href="/">Who Liked?</a>
        {this.props.user &&
          <ul className="navbar-nav ml-auto user">
            <li className="nav-item text-center">
              <img className="img-fluid rounded user_photo" src={this.props.user.profile_picture} alt={this.props.user.profile_picture}/>
              <div className="user_name">
                {this.props.user.full_name}
              </div>
            </li>
          </ul>
        }
        <style>{`
          .nav-item img {
            width: 20%;
          }
          .user_photo {

          }
          .user_name {

          }
        `}</style>
		  </nav>
    );
  }
}

export default Navbar;