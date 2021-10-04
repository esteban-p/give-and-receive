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
  const [searchFilter, setSearchFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const getAllLovepieces = () => {
		axios.get(`${API_URL}/api/lovepieces`)
			.then(response => {
				setLovepieces(response.data
          .filter(lovepiece => {
            if (searchFilter === 'offer') return lovepiece.type === 'offer';
            else if (searchFilter === 'need') return lovepiece.type === 'need';
            else return lovepiece;
          })
          .filter(lovepiece => {
            if (categoryFilter === 'time') return lovepiece.category === 'time';
            else if (categoryFilter === 'stuff') return lovepiece.category === 'stuff';
            else return lovepiece;
          })
        );
			})
			.catch(err => console.log(err));
	}


  useEffect(() => {
		getAllLovepieces();
	}, [searchFilter, categoryFilter])





  return (
    <div>
      <h3>Lovepieces Page</h3>
      
      <div className="field is-grouped">	
        <label className="label" htmlFor="type">Lovepiece type: </label>
        <div className="select">
          <select 
            name="type"
            onChange={e => setSearchFilter(e.target.value)}
            >
            <option value="all">All</option>
            <option value="offer">Offers</option>
            <option value="need">Needs</option>
          </select>
        </div>	
			</div>

      <div className="field is-grouped">	
        <label className="label" htmlFor="category">Lovepiece category: </label>
        <div className="select">
          <select 
            name="category"
            onChange={e => setCategoryFilter(e.target.value)}
            >
            <option value="all">All</option>
            <option value="time">Time</option>
            <option value="stuff">Stuff</option>
          </select>
        </div>	
			</div>





      <Link to="/lovepieces/add"><button className="button is-success">Add a new lovepiece</button></Link>

      {lovepieces.map(lovepiece => <LovepieceCard key={lovepiece._id} {...lovepiece} />)}

      <Map />
    </div>
  )
}





 // --- WORKS OK: getAllLovepieces before any filters ---
  // const getAllLovepieces = () => {
	// 	axios.get(`${API_URL}/api/lovepieces`)
	// 		.then(response => {
	// 			// console.log(response.data);
	// 			setLovepieces(response.data);
	// 		})
	// 		.catch(err => console.log(err));
	// }



// --- WORKS OK: getAllLovepieces with the type filter ---
  // const getAllLovepieces = () => {
	// 	axios.get(`${API_URL}/api/lovepieces`)
	// 		.then(response => {
	// 			console.log('all response.data: ', response.data);
	// 			setLovepieces(
  //         response.data.filter(lovepiece => {
  //           if (searchType === 'offer') return lovepiece.type === 'offer';
  //           if (searchType === 'need') return lovepiece.type === 'need';
  //           else return lovepiece
  //         })
  //       );
	// 		})
	// 		.catch(err => console.log(err));
	// }


