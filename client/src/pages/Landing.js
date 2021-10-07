import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {

  return (
    <div>

      <section className="box hero is-primary">
        <div className="hero-body">
                <div class="columns is-centered">
                  <div class="column is-one-fifth is-centered">
                    <figure class="image is-128x128">
                      <img className="navbar-item" src="https://res.cloudinary.com/give-and-receive/image/upload/v1633515396/g-and-r/G_R-logo-transparent-500x500_afmgrh.png" alt="" />
                    </figure>
                  </div>
                  <div class="column is-one-third">
                    <h1 className="title is-3">Give & Receive</h1> 
                    <p>
                    G&R is based on the idea that we can all give something to help others when they are in need (things or time), and that we all need help from others sometimes.
                    </p>
                  </div>
                </div>

          {/* <div className="container">
            <h1 className="title is-2">Welcome to Give & Receive</h1>      
            <h2 className="subtitle is-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus, elit id imperdiet gravida, massa lectus dignissim velit, sed egestas ante lectus eget diam. Nulla porttitor egestas est. Phasellus facilisis ullamcorper semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed bibendum nulla id ipsum porta, eu aliquet tortor aliquam. Quisque ut porta felis. Maecenas vel arcu magna. Quisque elementum facilisis placerat.</h2>
          </div> */}
        </div>
      </section>

      <section>
        <div className="box">
          <div className="columns is-centered">
            <div className="column is-one-fifth has-text-centered">
                  <Link to="/signup">
                    <button className="button is-info">Signup</button>
                  </Link>
            </div>
            <div className="column is-one-fifth has-text-centered">
                  <Link to="/login">
                  <button className="button is-info">Log in</button>
                  </Link>
            </div>
          </div>
          <br /><br />
        </div>
      </section>

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