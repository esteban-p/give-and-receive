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



  return (
    <div>
      <h3>Edit your profile {user}</h3>
      <h3>{username}</h3>

      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <br />

        <label htmlFor="country">Country: </label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <br />

        <label htmlFor="about">About: </label>
        <input
          type="text"
          name="about"
          value={about}
          onChange={e => setAbout(e.target.value)}
        />
        <br />

        <label htmlFor="avatarUrl">Upload a new avatar: </label>
        <input
          type="text"
          name="avatarUrl"
          value={avatarUrl}
          onChange={e => setAvatarUrl(e.target.value)}
        />
        <br />

        <br />
        <button type="submit">Save changes</button>

      </form>

    </div>
  )
}
