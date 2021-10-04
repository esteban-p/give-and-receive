import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {

  return (
    <div>

      <section className="box hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">Welcome to Give & Receive</h1>      
            <h2 className="subtitle is-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus, elit id imperdiet gravida, massa lectus dignissim velit, sed egestas ante lectus eget diam. Nulla porttitor egestas est. Phasellus facilisis ullamcorper semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed bibendum nulla id ipsum porta, eu aliquet tortor aliquam. Quisque ut porta felis. Maecenas vel arcu magna. Quisque elementum facilisis placerat.</h2>
          </div>
        </div>
      </section>

      <div className="columns">
          <div className="column">
                <Link to="/signup">
                  <button className="button is-warning">Signup</button>
                </Link>
          </div>
          <div className="column">
                <Link to="/login">
                <button className="button is-warning is-rounded">Log in</button>
                </Link>
          </div>
      </div>

    </div>
  )
}


// <div className="columns">
// <div className="column">
//   <div className="card">
//     <div className="card-content">
//       <Link to="/signup">
//         <button className="button is-warning">Signup</button>
//       </Link>
//     </div>
//   </div>
// </div>
// <div className="column">
//   <div className="card">
//     <div className="card-content">
//       <Link to="/signup">
//       <button className="button is-warning">Log In</button>
//       </Link>
//     </div>
//   </div>
// </div>
// </div>