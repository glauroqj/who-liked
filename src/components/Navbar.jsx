import Inferno from 'inferno';
import Component from 'inferno-component';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		    <a class="navbar-brand" href="/">Who Liked?</a>
        <ul className="navbar-nav ml-auto user">
          <li className="nav-item text-center">
            <img className="img-fluid rounded user_photo" src={this.props.user.profile_picture} alt={this.props.user.profile_picture}/>
            <div className="user_name">
              {this.props.user.full_name}
            </div>
          </li>
        </ul>
        <style global jsx>{`
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