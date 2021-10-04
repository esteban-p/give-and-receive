import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Map from '../components/Map';
import LovepieceCard from '../components/LovepieceCard';
import AddLovepiece from '../components/AddLovepiece';



export default function Lovepieces(props) {

  // console.log('lovepieces user from app: ', props.user)

  const API_URL = 'http://localhost:5005';
  const [lovepieces, setLovepieces] = useState([]);

  const getAllLovepieces = () => {
		// get request to the server
		axios.get(`${API_URL}/api/lovepieces`)
			.then(response => {
				// console.log(response.data);
				setLovepieces(response.data);
			})
			.catch(err => console.log(err));
	}

  useEffect(() => {
		getAllLovepieces();
	}, [])

  return (
    <div>
      <h3>Lovepieces Page</h3>
      
      <Link to="/lovepieces/add"><button>Add a new lovepiece</button></Link>

      {lovepieces.map(lovepiece => <LovepieceCard key={lovepiece._id} {...lovepiece} />)}

      <Map />
    </div>
  )
}


