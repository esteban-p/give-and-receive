import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {

  return (
    <div>

      <section class="box hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-2">Welcome to Give & Receive</h1>      
            <h1 clsss="subtitle is-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus, elit id imperdiet gravida, massa lectus dignissim velit, sed egestas ante lectus eget diam. Nulla porttitor egestas est. Phasellus facilisis ullamcorper semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed bibendum nulla id ipsum porta, eu aliquet tortor aliquam. Quisque ut porta felis. Maecenas vel arcu magna. Quisque elementum facilisis placerat.</h1>
          </div>
        </div>
      </section>

      <div class="columns">
          <div class="column">
                <Link to="/signup">
                  <button class="button is-warning">Signup</button>
                </Link>
          </div>
          <div class="column">
                <Link to="/login">
                <button class="button is-warning is-rounded">Log in</button>
                </Link>
          </div>
      </div>

    </div>
  )
}


// <div class="columns">
// <div class="column">
//   <div class="card">
//     <div class="card-content">
//       <Link to="/signup">
//         <button class="button is-warning">Signup</button>
//       </Link>
//     </div>
//   </div>
// </div>
// <div class="column">
//   <div class="card">
//     <div class="card-content">
//       <Link to="/signup">
//       <button class="button is-warning">Log In</button>
//       </Link>
//     </div>
//   </div>
// </div>
// </div>