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
					// redirect to the lovepieces page
					props.history.push('/lovepieces');
				}
			})
			.catch(err => console.log(err));
	}

	const uploadAvatar = () => {

	}



	return (
		<>
			<form onSubmit={handleSubmit}>
			<br /><br />

				<div className="columns is-centered">
					<div className="box">
						<h3 className="title is-4">Create your account</h3>

						<div className="field is-grouped">
							<label className="label mr-3" htmlFor="username">Username: </label>
							<input
								className="input"
								type="text"
								name="username"
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
						</div>

						<div className="field is-grouped">
							<label className="label mr-3" htmlFor="password">Password: </label>
							<input
								className="input"
								type="password"
								name="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>

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
							<label className="label" htmlFor="about">Tell other people something about you: </label>
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
							Upload your profile image
							</button>
						</div>
						<br /><br />

						<div class="buttons is-centered">
							<button 
								className="button is-primary is-focused" 
								type="submit"
							>
							Create account
							</button>
						</div>


						{message && (
							<article class="message is-dark">
								<div class="message-body">
									{message} 
								</div>
							</article>
						)}

					</div>
				</div>
				<br /><br />

			</form>
		</>
	)
}



{/* <h3>{message}</h3> */}