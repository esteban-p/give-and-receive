import './App.css';
import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Map from './components/Map';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

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
        
        <ProtectedRoute
          exact path='/home'
          user={user}
          component={Home}
        />



      </Switch>
    </div>
  );
}

export default App;









        {/* <Route exact path="/home" component={Home} /> */}