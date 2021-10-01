import { useState } from 'react';
import { signup } from '../services/auth';
import axios from 'axios';


export default function Signup(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [about, setAbout] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		// console.log(username, password)

		signup(username, password, email, city, country, about, avatarUrl)
			.then(response => {
				// console.log(response);
				if (response.message) {
					// reset the form 
					setUsername('');
					setPassword('');
          setEmail('');
          setCity('');
          setCountry('');
          setAbout('');
          setAvatarUrl('');
					// set the message
					setMessage(response.message);
				} else {
					// user is correctly signed up in the backend
					// add the user to the state of App.js
					props.setUser(response);
					// redirect to the home page
					props.history.push('/home');
				}
			})
			.catch(err => console.log(err));
	}

	return (
		<>
			<h3>Signup</h3>
			<form onSubmit={handleSubmit}>

				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>

				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

        <label htmlFor="email">Email: </label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>

        <label htmlFor="city">City: </label>
				<input
					type="text"
					name="city"
					value={city}
					onChange={e => setCity(e.target.value)}
				/>

        <label htmlFor="country">Country: </label>
				<input
					type="text"
					name="country"
					value={country}
					onChange={e => setCountry(e.target.value)}
				/>

        <label htmlFor="about">Tell other people something about you: </label>
				<input
					type="text"
					name="about"
					value={about}
					onChange={e => setAbout(e.target.value)}
				/>

        <label htmlFor="avatarUrl">Upload an avatar for your profile: </label>
				<input
					type="text"
					name="avatarUrl"
					value={avatarUrl}
					onChange={e => setAvatarUrl(e.target.value)}
				/>




				<button type="submit">Sign Up</button>

				{message && (
					<h3>{message}</h3>
				)}

			</form>
		</>
	)
}