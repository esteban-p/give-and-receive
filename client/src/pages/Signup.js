import { useState } from 'react';
// import { signup, service, handleUpload } from '../services/auth';
import { signup, handleUpload } from '../services/auth';
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




									const handleFileUpload = e => {
										console.log("The file to be uploaded is: ", e.target.files[0]);
										const uploadData = new FormData();
										uploadData.append('avatarUrl', e.target.files[0]);

										// service
										// 	.handleUpload(uploadData)
										handleUpload(uploadData)
											.then(response => {
												console.log("response is: ", response);
												setAvatarUrl(response.secure_url);
											})
											.catch(err => console.log('Error while uploading the file: ', err));
									}

									// https://my.ironhack.com/lms/courses/course-v1:IRONHACK+WDFT52+202108_BER/modules/ironhack-course-chapter_8/units/ironhack-course-chapter_8-sequential-vertical_2
									// https://github.dev/Ironhack-WDFT-August-2021/react-image-upload/tree/master/server



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

						<div class="file has-name">
							<label class="file-label">
								<input class="file-input" type="file" name="resume" onChange={handleFileUpload} />
								<span class="file-cta">
									<span class="file-icon">
										<i class="fas fa-upload"></i>
									</span>
									<span class="file-label">
									Upload your profile image
									</span>
								</span>
								<div class="file-name">
									{avatarUrl ? (
										<figure className="image is-32x32">
											<img className="is-rounded" src={avatarUrl} />
										</figure>
										) : ('No file uploaded')
									}
								</div>
							</label>
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


