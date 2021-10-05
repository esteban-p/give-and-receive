// import './App.css';
import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Map from './components/Map';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Lovepieces from './pages/Lovepieces';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import AddLovepiece from './pages/AddLovepiece';
import LovepieceDetails from './pages/LovepieceDetails';
import EditLovepiece from './pages/EditLovepiece';
import Footer from './components/Footer';


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

        <ProtectedRoute exact path='/lovepieces' user={user} component={Lovepieces} />

        <ProtectedRoute exact path='/lovepieces/add' user={user} component={AddLovepiece} />

        <ProtectedRoute exact path='/lovepieces/:id' user={user} component={LovepieceDetails} />

        <ProtectedRoute exact path='/lovepieces/edit/:id' user={user} component={EditLovepiece} />

        <ProtectedRoute exact path='/profile' user={user} component={Profile} />

        <ProtectedRoute exact path='/about' user={user} component={About} />


      </Switch>

      <Footer />

    </div>
  );
}

export default App;




