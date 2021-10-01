import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>

      <h1>Welcome to Give & Receive</h1>
      <h3>Some info about the app</h3>

      <Link to="/signup">
        <button>Signup</button>
      </Link>

      <Link to="/login">
        <button>Log In</button>
      </Link>

    </div>
  )
}
