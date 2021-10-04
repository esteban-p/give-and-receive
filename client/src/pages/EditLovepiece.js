import axios from 'axios';
import { useState, useEffect } from 'react';

export default function EditLovepiece(props) {

  // const user = props.user._id;
  // console.log(user);
  
  const API_URL = 'http://localhost:5005';
  
  const [user, setUser] = useState(props.user._id);
  const [owner, setOwner] = useState('');
  const [title, setTitle] = useState('');
	const [type, setType] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [formattedDateCreated, setFormattedDateCreated] = useState('');
  const [stillValid, setStillValid] = useState(true);
  const [description, setDescription] = useState('');
  const [coords, setCoords] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [tags, setTags] = useState([]);
  
  const lovepieceId = props.match.params.id;
  // console.log(lovepieceId);
  
  useEffect(() => {
		axios.get(`${API_URL}/api/lovepieces/${lovepieceId}`)
			.then(response => {
				console.log('use effect: ', response.data);
				setUser(response.data.user);
        setOwner(response.data.owner._id);
        setTitle(response.data.title);
        setType(response.data.type);
        setDateCreated(response.data.dateCreated);
        setFormattedDateCreated(
					response.data.dateCreated.slice(8,10) + '/' +
					response.data.dateCreated.slice(5,7) + '/' +
					response.data.dateCreated.slice(0,4)
				);
        setStillValid(response.data.stillValid);
				setDescription(response.data.description);
        setCoords(response.data.coords);
        setCategory(response.data.category);
        setSubCategory(response.data.subCategory);
        setTags(response.data.tags);
			})
			.catch(err => console.log(err))
	}, [])

  const deleteLovepiece = () => {
		axios.delete(`${API_URL}/api/lovepieces/${lovepieceId}`)
			.then(() => {
				props.history.push('/lovepieces');
			})
			.catch(err => console.log(err));
	}

  const handleSubmit = e => {
		e.preventDefault();
		const requestBody = { 
      owner,
      title, 
      type,
      dateCreated,
      stillValid,
      description, 
      coords,
      category,
      subCategory,
      tags
    };
		axios.put(`${API_URL}/api/lovepieces/${lovepieceId}`, requestBody)
			.then(response => {
				props.history.push(`/lovepieces/${lovepieceId}`);
			})
			.catch(err => console.log(err))
	}


  return (
    <div>
      <h3>Edit your lovepiece</h3>
      <h4>(coords: {coords})</h4>
      <h4>Title: {title}</h4>
      <h4>Created on {formattedDateCreated}</h4>
      <h4>Type: {type}</h4>

      <form onSubmit={handleSubmit}>

        <label htmlFor="stillValid">Is it currently active? (Yes or No): </label>
        <input
          type="text"
          name="stillValid"
          value={stillValid}
          onChange={e => setStillValid(e.target.value)}
        />
        <br />

        <label htmlFor="description">Describe your lovepiece: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />

        <label htmlFor="category">Select the category: </label>
				<input
					type="text"
					name="category"
					value={category}
					onChange={e => setCategory(e.target.value)}
				/>    
        <br />  

        <label htmlFor="tags">Add tags, separated by comma: </label>
				<input
					type="text"
					name="tags"
					value={tags}
					onChange={e => setTags(e.target.value)}
				/>   
        <br />

        <br />
        <button type="submit">Update this lovepiece</button>

      </form>

      <br /><br />
      <button onClick={deleteLovepiece}>Delete this lovepiece</button>

    </div>
  )
}
