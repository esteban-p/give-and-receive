import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

  
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
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
              <figure class="image is-64x64">
              {/* <a className="navbar-item" > */}
                <img className="navbar-item" src="https://res.cloudinary.com/give-and-receive/image/upload/v1633515396/g-and-r/G_R-logo-transparent-500x500_afmgrh.png" alt="" />
              {/* </a> */}
              </figure>

              <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">
                <div className="buttons">
                  <a className="button is-light">
                    <Link to="/lovepieces">
                      All lovepieces
                    </Link>
                  </a>
                  <a className="button is-light">
                    <Link to="/about">
                      About G&R
                    </Link>
                  </a>
                </div>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-success is-light">
                      <Link to="/profile">
                        {props.user.username}
                      </Link>
                    </a>
                    <a className="button is-danger is-light">
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
  