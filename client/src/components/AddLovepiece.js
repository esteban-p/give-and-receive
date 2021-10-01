import { useState } from 'react';
import axios from 'axios';

export default function AddLovepiece(props) {

 
  // const user = props.user._id;
  // console.log(user);

  const API_URL = 'http://localhost:5005';

  const [user, setUser] = useState(props.user._id)
  const [owner, setOwner] = useState('');
  const [title, setTitle] = useState('');
	const [type, setType] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [stillValid, setStillValid] = useState(true);
  const [description, setDescription] = useState('');
  const [coords, setCoords] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [tags, setTags] = useState([]);


	const handleSubmit = e => {
		e.preventDefault();

    const today = new Date();

		// make a post request to the server with the form fields in the body
		const requestBody = { 
      owner: user,
      title, 
      type, 
      dateCreated: today,
      stillValid,
      description,
      coords: [],
      category,
      subCategory,
      tags
    };



		axios.post(`${API_URL}/api/lovepieces/add`, requestBody)
			.then(response => {
				// reset the state and thereby reset the form
				setOwner('');
        setTitle('');
        setType('');
        setDateCreated('');
        setStillValid(true);
				setDescription('');
        setCoords([]);
        setCategory('');
        setSubCategory('');


				// we need to trigger 'getAllLovepieces' in the Lovepieces component
				// props.refreshLovepieces();
        props.history.push('/lovepieces');

			})
			.catch(err => console.log(err))
	}





  return (
    <div>
      <h3>Add a lovepiece</h3>
      <form onSubmit={handleSubmit}>

				<label htmlFor="title">Lovepiece title: </label>
				<input
					type="text"
					name="title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>

        <label htmlFor="type">Type (Offer or Need): </label>
				<input
					type="text"
					name="type"
					value={type}
					onChange={e => setType(e.target.value)}
				/>

        <label htmlFor="stillValid">Is it currently active? (Yes or No): </label>
				<input
					type="text"
					name="stillValid"
					value={stillValid}
					onChange={e => setStillValid(e.target.value)}
				/>

				<label htmlFor="description">Describe your lovepiece: </label>
				<input
					type="text"
					name="description"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>

        <label htmlFor="category">Select the category: </label>
				<input
					type="text"
					name="category"
					value={category}
					onChange={e => setCategory(e.target.value)}
				/>      

        <label htmlFor="tags">Add tags, separated by comma: </label>
				<input
					type="text"
					name="tags"
					value={tags}
					onChange={e => setTags(e.target.value)}
				/>    

				<button type="submit">Add this lovepiece</button>

			</form>
    </div>
  )
}
