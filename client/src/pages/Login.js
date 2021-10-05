import { useState } from 'react'
import { login } from '../services/auth';

export default function Login(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		// console.log(username, password)

		login(username, password)
			.then(response => {
				// console.log(response);
				if (response.message) {
					// reset the form 
					setUsername('');
					setPassword('');
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

	return (
		<>
			<br /><br />
			<div className="columns is-centered">
				<div className="box">

					<h3 className="title is-4">Login</h3>

					<form onSubmit={handleSubmit}>
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
						<br />
						<div class="buttons is-centered">
							<button 
								className="button is-primary is-focused" 
								type="submit"
							>
							Log in
							</button>
						</div>

						{message && (
							<article class="message is-dark">
								<div class="message-body">
									{message} 
								</div>
							</article>
						)}
					</form>
					
				</div>
			</div>
			<br /><br />
		</>
	)
}