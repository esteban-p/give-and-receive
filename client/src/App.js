import './App.css';
import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Map from './components/Map';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';

function App(props) {

  const [user, setUser] = useState(props.user)

  // ------------------------------------------------------------
  const addUser = user => setUser(user);
  // Had to put setUser in another function and reference it in
  // the signup render props because if not it was not working 
  // like this:
  //    render={props => <Signup setUser={setUser} {...props} />}
  // Was getting an error "props.setUser is not a function" 
  // Didn't know why...
  // ------------------------------------------------------------

  return (
    <div className="App">
      {/* <Map /> */}

      <Navbar user={user} setUser={addUser} />

      <Switch>

        <Route exact path="/" component={Landing} />

        <Route
          exact path="/signup"
          render={props => <Signup setUser={addUser} {...props} />}
        />
          
        <Route
          exact path="/login"
          render={props => <Login setUser={addUser} {...props} />}
        />

        <ProtectedRoute exact path='/home' user={user} component={Home} />

        <ProtectedRoute exact path='/profile' user={user} component={Profile} />

        <ProtectedRoute exact path='/about' user={user} component={About} />

      </Switch>
    </div>
  );
}

export default App;




