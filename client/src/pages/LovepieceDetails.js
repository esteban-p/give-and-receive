import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LovepieceDetails(props) {
	
  const API_URL = 'http://localhost:5005';
	const [lovepiece, setLovepiece] = useState(null);
	const [formattedDateCreated, setFormattedDateCreated] = useState('');
	const lovepieceId = props.match.params.id;
  const user = props.user._id;
  // console.log('lovepieceDetails user: ', user)

	const getLovepiece = () => {
		axios.get(`${API_URL}/api/lovepieces/${lovepieceId}`)
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



	return (
		<div>

			<div className="box">

					{lovepiece && (
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
									<button className="button is-primary">Edit this lovepiece</button>
								</Link>
								)} 

						</>
					)}

				</div>
			
		</div>
	);
}







// --- When trying to create a conversation with the owner of the lovepiece ---

// {lovepiece.owner._id === user ? (
// 	<Link to={`/lovepieces/edit/${lovepiece._id}`}>
// 		<button className="button is-primary">Edit this lovepiece</button>
// 	</Link>
// 	) : (
// 	<Link to={`/lovepieces/connect/${lovepiece._id}`}>
// 		<button className="button is-info">Connect to this lovepiece</button>
// 	</Link>
// )}




// --- Before applying any Bulma styling ---

// return (
// 	<div>
// 		{lovepiece && (
// 			<>

// 				<h2>{lovepiece.type} > {lovepiece.category} > {lovepiece.title}</h2>
// 				<h4>Created by {lovepiece.owner.username}</h4>
// 				<h4>Created on {formattedDateCreated}</h4>
// 				<h6></h6>
// 				<p>{lovepiece.description}</p>
// 				<p>{lovepiece.tags}</p>

// 				{lovepiece.owner._id === user && (
// 					<Link to={`/lovepieces/edit/${lovepiece._id}`}>
// 						<button>Edit this lovepiece</button>
// 					</Link>
// 				)}

// 			</>
// 		)}
// 	</div>
// );