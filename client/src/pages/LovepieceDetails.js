import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import MessageCard from '../components/MessageCard';

// import socketIOClient from 'socket.io-client';
// const socket = socketIOClient('http://localhost:5005');

export default function LovepieceDetails(props) {
	
  const API_URL = 'http://localhost:5005';
	const [lovepiece, setLovepiece] = useState(null);
	const [formattedDateCreated, setFormattedDateCreated] = useState('');
	const [message, setMessage] = useState('');
	const [payload, setPayload] = useState('');
	const [socketMessage, setSocketMessage] = useState ('');
	const lovepieceId = props.match.params.id;
  const user = props.user._id;
	const username = props.user.username

  // console.log('lovepieceDetails user: ', user)

	const getLovepiece = () => {

		axios.get(`/api/lovepieces/${lovepieceId}`)
			.then(response => {
				// console.log(response.data);
				setLovepiece(response.data);
				setFormattedDateCreated(
					response.data.dateCreated.slice(8,10) + '/' +
					response.data.dateCreated.slice(5,7) + '/' +
					response.data.dateCreated.slice(0,4)
				);
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getLovepiece();
	}, [])

	useEffect(() => {
		const today = new Date().toLocaleString();
		const messageToPost = `${today}: ${username} wrote ${message}`;
		setPayload(messageToPost);
	}, [message])

	//<<<<<<< To receieve from socket <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  // useEffect(() => {
  //   socket.on('emittedMessage', content => {
  //     setSocketMessage(content.emittedMessage);
  //   })
  // }, [])
	//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	const handleSubmit = e => {
		e.preventDefault();
		const requestBody = {payload};
		
		axios.patch(`/api/lovepieces/addmessage/${lovepieceId}`, requestBody)
			.then(response => {
				setMessage('')
				//<<<<<<<< To emit to socket <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
				// setSocketMessage(socketMessage + payload)
				// socket.emit('new-message', { 
				// 	emittedMessage: socketMessage
				// })
				//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
				// props.history.push(`/lovepieces/${lovepieceId}`)
			})
			.catch(err => console.log(err))
	}





	return (
		<div>
			{lovepiece && (
				<div className="columns">
					<div className="column">
						<div className="box">
								<>
									<div className="block">
										<div className="media">
											<div className="media-left">
												<figure className="image is-48x48">
													<img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
												</figure>
											</div>
											<div className="media-content">
												<h4><strong>{lovepiece.owner.username}</strong></h4>
												<h4>Lovepiece created on {formattedDateCreated}</h4>
											</div>
										</div>
									</div>
									<div className="box">
									<h2 className="title is-5"><strong>{lovepiece.type} of {lovepiece.category}:</strong> {lovepiece.title}</h2>
									<p>{lovepiece.description}</p>
									<br /><br />
									<p><strong>Tags: </strong>{lovepiece.tags}</p>
									</div>
									{lovepiece.owner._id === user && (
										<Link to={`/lovepieces/edit/${lovepiece._id}`}>
											<button className="button is-warning is-light">Edit this lovepiece</button>
										</Link>
										)} 
								</>
						</div>
					</div>
					<div className="column">
						<div className="box">
							<div className="block">
								<h1 className="title is-5">Message board</h1>
								{lovepiece.board.map(message => <MessageCard {...message} />)}
							</div>
							{/* <div>
								<br />
								<h3>Socket message should be below this line 👇🏼</h3>
								{socketMessage}
							</div> */}
						</div>
						<div>
							<form onSubmit={handleSubmit}>
								<div className="field">
									<div className="control">
										<textarea 
											className="textarea" 
											placeholder="Write your message here"
											value={message}
											onChange={e => setMessage(e.target.value)}
										>
										</textarea>
									</div>
								</div>
								<button
									className="button is-info"
									type="submit"
								>
								Post this message to the board
								</button>
							</form>
						</div>
					</div>
				</div>
			)}
			<br />
		</div>
	)

}



