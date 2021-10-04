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

			{lovepiece && (
				<>

					<h2>{lovepiece.type} > {lovepiece.category} > {lovepiece.title}</h2>
          <h4>Created by {lovepiece.owner.username}</h4>
					<h4>Created on {formattedDateCreated}</h4>
          <h6></h6>
					<p>{lovepiece.description}</p>
					<p>{lovepiece.tags}</p>


					{lovepiece.owner._id === user && (
        		<Link to={`/lovepieces/edit/${lovepiece._id}`}>
          		<button>Edit this lovepiece</button>
        		</Link>
      		)}

				</>
			)}




			
		</div>
	);
}

