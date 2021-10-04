import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout, loggedinUser } from '../services/auth';


export default function Navbar(props) {

  // console.log('Navbar props user: ', props.user);

	const handleLogout = () => {
		logout().then(() => {
			props.setUser(null);
		})
	}

  // const [userForButton, setUserForButton] = useState('');
  // const getUserForButton = () => {
  //   loggedinUser()
  //     .then(response => {
  //       // console.log(response._id);
  //       setUserForButton(response._id);
  //     })
  // }
  // getUserForButton();

  return (

  
    <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
      {props.user && (
        <>
              
            {/* -- Original navbar --
            <Link to="/about"><button>About G&R</button></Link>
            <Link to="/lovepieces"><button  className="button is-primary" >All lovepieces</button></Link>
            <Link to="/profile"><button>{props.user.username}</button></Link>
            <Link to="/" onClick={() => handleLogout()}>
              <button>Logout</button>
            </Link>
            -- End of original navbar -- */}


            <div className="navbar-brand">
              <a className="navbar-item" >
                {/* <img className="navbar-item" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
                <img className="navbar-item" src="/client/public/G&R-logo.png" width="50" height="50" alt="G&R logo" />
              </a>

              <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  <Link to="/lovepieces">All lovepieces</Link>
                </a>

                <a className="navbar-item">
                  <Link to="/about">About G&R</Link>
                </a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      <Link to="/profile">
                        <strong>{props.user.username}</strong>
                      </Link>
                    </a>
                    <a className="button is-light">
                      <Link to="/" onClick={() => handleLogout()}>
                        Logout
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>

        </>
      )}
    </nav>


  )
}
  
// style="color:black;"
  