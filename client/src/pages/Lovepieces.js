import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Map from '../components/Map';
import LovepieceCard from '../components/LovepieceCard';
import AddLovepiece from './AddLovepiece';



export default function Lovepieces(props) {

  // console.log('lovepieces user from app: ', props.user)

  const API_URL = 'http://localhost:5005';
  const [lovepieces, setLovepieces] = useState([]);
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [tagsFilter, setTagsFilter] = useState('');

  const getAllLovepieces = () => {
		axios.get(`${API_URL}/api/lovepieces`)
			.then(response => {
        // console.log('all the response before filters: ', response.data);
        // console.log('tagsFilter: ', tagsFilter);
				setLovepieces(response.data
          .filter(lovepiece => {
            if (typeFilter === 'Offer') return lovepiece.type === 'Offer';
            else if (typeFilter === 'Need') return lovepiece.type === 'Need';
            else return lovepiece;
          })
          .filter(lovepiece => {
            if (categoryFilter === 'Time') return lovepiece.category === 'Time';
            else if (categoryFilter === 'Stuff') return lovepiece.category === 'Stuff';
            else return lovepiece;
          })
          .filter(lovepiece => {
            if (tagsFilter !== '') return lovepiece.tags.includes(tagsFilter);
            // if (tagsFilter !== '') return lovepiece.tags.toLowerCase().includes(tagsFilter.toLowerCase());
            else return lovepiece;
          })
        );
			})
			.catch(err => console.log(err));
	}


  useEffect(() => {
		getAllLovepieces();
	}, [typeFilter, categoryFilter, tagsFilter])





  return (
    <div>
      <h3>Lovepieces Page</h3>
      
      <div className="field is-grouped">	
        <label className="label" htmlFor="type">Lovepiece type: </label>
        <div className="select">
          <select 
            name="type"
            onChange={e => setTypeFilter(e.target.value)}
            >
            <option value="all">All</option>
            <option value="Offer">Offers</option>
            <option value="Need">Needs</option>
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
            <option value="Time">Time</option>
            <option value="Stuff">Stuff</option>
          </select>
        </div>	
			</div>

      <div className="field">
					<label className="label" htmlFor="tags">Search by one word:</label>
					<input
						className="input"
						placeholder="e.g. math, carpentry, weekend"
						type="text"
						name="tags"
						value={tagsFilter}
						onChange={e => setTagsFilter(e.target.value)}
					/>    
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


// --- WORKS OK: getAllLovepieces with the type and category filters ---
  // const getAllLovepieces = () => {
	// 	axios.get(`${API_URL}/api/lovepieces`)
	// 		.then(response => {
	// 			setLovepieces(response.data
  //         .filter(lovepiece => {
  //           if (searchFilter === 'offer') return lovepiece.type === 'offer';
  //           else if (searchFilter === 'need') return lovepiece.type === 'need';
  //           else return lovepiece;
  //         })
  //         .filter(lovepiece => {
  //           if (categoryFilter === 'time') return lovepiece.category === 'time';
  //           else if (categoryFilter === 'stuff') return lovepiece.category === 'stuff';
  //           else return lovepiece;
  //         })
  //       );
	// 		})
	// 		.catch(err => console.log(err));
	// }