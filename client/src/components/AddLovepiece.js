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
      <form onSubmit={handleSubmit}>
      <h3 class="title is-3" >Create your new lovepiece</h3>


				<div class="field is-grouped">
					<label class="label" htmlFor="type">Type (Offer or Need): </label>
						<div class="select">
							<select 
								name="type"
								onChange={e => setType(e.target.value)}
								>
								<option value="">Choose type</option>
								<option value="offer">Offer</option>
								<option value="need">Need</option>
							</select>
						</div>	
				</div>

				<div class="field">
					<label class="label" htmlFor="title">Lovepiece title: </label>
					<input
						class="input"
						placeholder="Write a few words as title"
						type="text"
						name="title"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>

				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<textarea 
							class="textarea" 
							placeholder="Describe your new lovepiece in more detail for other users"
							value={description}
							onChange={e => setDescription(e.target.value)}
						>
						</textarea>
					</div>
				</div>

				<div class="field is-grouped">	
					<label class="label" htmlFor="category">Category: </label>
					<div class="select">
						<select 
							name="category"
							onChange={e => setType(e.target.value)}
							>
							<option value="">Select the category</option>
							<option value="time">Time available to donate</option>
							<option value="stuff">Stuff available to donate</option>
						</select>
					</div>	
				</div>

				{/* <div class="field is-grouped">	
					<label class="label" htmlFor="subCategory">Sub-category: </label>
					<div class="select">
						<select 
							name="subCategory"
							onChange={e => setType(e.target.value)}
							>
							<option value="">Select the sub-category</option>
							<option value="time">a</option>
							<option value="time">b</option>
							<option value="time">c</option>
							<option value="time">d</option>
							<option value="time">e</option>
							<option value="time">f</option>
						</select>
					</div>	
				</div> */}

				<div class="field">
					<label class="label" htmlFor="tags">Add tags so other users can easily find your lovepiece (tags are separated by comma):</label>
					<input
						class="input"
						placeholder="e.g. math, carpentry, weekend"
						type="text"
						name="tags"
						value={tags}
						onChange={e => setTags(e.target.value)}
					/>    
				</div>


				<div class="field">
					<div class="control">	
						<button class="button is-primary" type="submit">Add this lovepiece</button>
					</div>
				</div>





			</form>
    </div>
  )
}
