import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

export default function Navbar(props) {

  // console.log('Navbar props user: ', props.user);

	const handleLogout = () => {
		logout().then(() => {
			props.setUser(null);
		})
	}

  return (

    <nav>
      {props.user && (
            <>
              <Link to="/about"><button>About G&R</button></Link>

              <Link to="/lovepieces"><button>All lovepieces</button></Link>

              <Link to="/profile"><button>{props.user.username}</button></Link>

              <Link to="/" onClick={() => handleLogout()}>
                <button>Logout</button>
              </Link>


            </>
      )}
    </nav>
    
    )
  }
  
  