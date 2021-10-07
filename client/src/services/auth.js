import axios from 'axios';





							const errorHandler = err => {
								throw err;
							};

							const handleUpload = file => {
								return axios
									// .post('/upload', file)
									.post('/api/auth/upload', file)
									// .post('/api/auth/upload', file)
									.then(res => res.data)
									.catch(errorHandler);
							};

							const signup = (username, password, email, city, country, about, avatarUrl) => {
								return axios
									.post('/api/auth/signup', { username, password, email, city, country, about, avatarUrl })
									.then(response => {
										return response.data;
									})
									.catch(err => {
										return err.response.data;
									});
							}




const login = (username, password) => {
	return axios.post('/api/auth/login', { username, password })
		.then(response => {
			return response.data;
		})
		.catch(err => {
			return err.response.data;
		});
}

const logout = () => {
	return axios.delete('/api/auth/logout')
		.then(response => {
			return response.data;
		})
		.catch(err => {
			return err.response.data;
		});
}

const loggedinUser = () => {
	return axios.get('/api/auth/loggedin')
  .then(response => {
		return response.data;
	})
	.catch(err => {
		return err.response.data;
	});
}


// export { signup, login, logout, loggedinUser };
// export { signup, login, logout, loggedinUser, service, handleUpload };
export { signup, login, logout, loggedinUser, handleUpload };







// const service = axios.create({
// 	// make sure you use PORT = 5005 (the port where our server is running)
// 	baseURL: 'http://localhost:5005/api'
// 	// withCredentials: true // => you might need this when having the users in the app
// });

// const errorHandler = err => {
// 	throw err;
// };

// const handleUpload = file => {
// 	return service
// 		// .post('/upload', file)
// 		.post('auth/upload', file)
// 		// .post('/api/auth/upload', file)
// 		.then(res => res.data)
// 		.catch(errorHandler);
// };

// const signup = (username, password, email, city, country, about, avatarUrl) => {
// 	return service
// 		.post('auth/signup', { username, password, email, city, country, about, avatarUrl })
// 		.then(response => {
// 			return response.data;
// 		})
// 		.catch(err => {
// 			return err.response.data;
// 		});
// }