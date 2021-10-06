import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Profile(props) {

  const API_URL = 'http://localhost:5005';

  const [user, setUser] = useState(props.user._id);
  const [username, setUsername ] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry ] = useState('');
  const [about, setAbout] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
		axios.get('/api/auth/loggedin')
			.then(response => {
        // console.log('use effect: ', response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setCity(response.data.city);
        setCountry(response.data.country);
        setAbout(response.data.about);
        setAvatarUrl(response.data.avatarUrl);
        setFavourites(response.data.favourites);
			})
			.catch(err => console.log(err))
	}, [])


  const handleSubmit = e => {
		e.preventDefault();
		const requestBody = { 
      username,
      email,
      city,
      country,
      about,
      avatarUrl,
      favourites
    };
		axios.put(`${API_URL}/api/auth/${user}`, requestBody)
			.then(response => {
				props.history.push('/lovepieces');
			})
			.catch(err => console.log(err))
	}

	const uploadAvatar = () => {

	}

  return (
    
    <div>
      
      <div className="column is-half ml-5">
        <div className="box">
        
            <div class="columns">
              <div class="column is-two-thirds">
                <h3 className="title is-4">Update your profile, {username}</h3>
              </div>
              <div class="column is-one-third">
                <figure class="image is-128x128">
                  <img src={avatarUrl} />
                </figure>
              </div>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="field is-grouped">
                <label className="label mr-3" htmlFor="email">Email: </label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="field is-grouped">
                <label className="label mr-3" htmlFor="city">City: </label>
                <input
                  className="input"
                  type="text"
                  name="city"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </div>

              <div className="field is-grouped">
                <label className="label mr-3" htmlFor="country">Country: </label>
                <input
                  className="input"
                  type="text"
                  name="country"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="about">About you: </label>
                <div className="control">
                  <textarea
                    className="textarea" 
                    value={about}
                    onChange={e => setAbout(e.target.value)}
                  >
                  </textarea>
                </div>
              </div>
              <br />
                
              <div className="field">
                <button 
                  className="button is-warning is-light is-focused" 
                  onClick={uploadAvatar}
                >
                Change your profile image
                </button>
              </div>
              <br /><br />
      
              <div class="buttons is-centered">
                <button 
                  className="button is-primary is-focused" 
                  type="submit"
                >
                Save changes
                </button>
              </div>

            </form>

        </div>
      </div>
      <br />

    </div>
  )
}
