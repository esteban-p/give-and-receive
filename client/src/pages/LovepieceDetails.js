import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LovepieceDetails(props) {
	
  const API_URL = 'http://localhost:5005';
	const [lovepiece, setLovepiece] = useState(null);
	const lovepieceId = props.match.params.id;
  const user = props.user._id;
  // console.log('lovepieceDetails user: ', user)

	const getLovepiece = () => {
		axios.get(`${API_URL}/api/lovepieces/${lovepieceId}`)
			.then(response => {
				// console.log(response.data);
				setLovepiece(response.data);
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
					<h2>{lovepiece.type}: {lovepiece.title}</h2>
          <h4>Created by {lovepiece.owner}</h4>
          <h4>Created on {lovepiece.dateCreated}</h4>
          <h6></h6>
					<p>{lovepiece.description}</p>
				</>
			)}



      {/* {lovepiece.owner === user && (
        <Link to={`/lovepieces/edit/${lovepiece._id}`}>
          <button>Edit this lovepiece</button>
        </Link>
      )} */}
			
		</div>
	);
}
