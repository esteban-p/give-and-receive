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
				setTags('');


				// we need to trigger 'getAllLovepieces' in the Lovepieces component
				// props.refreshLovepieces();
        props.history.push('/lovepieces');

			})
			.catch(err => console.log(err))
	}





  return (
    <div>
      <form onSubmit={handleSubmit}>

				<div className="box">

					<h3 className="title is-4" >Create your new lovepiece</h3>

					<div className="field is-grouped">
						<div className="field is-grouped">
							<label className="label" htmlFor="type">Type: </label>
								<div className="select mx-5">
									<select 
										name="type"
										onChange={e => setType(e.target.value)}
										>
										<option value="">Select the type</option>
										<option value="Offer">Offer</option>
										<option value="Need">Need</option>
									</select>
								</div>	
						</div>
						<div className="field is-grouped">	
							<label className="label" htmlFor="category">Category: </label>
							<div className="select mx-5">
								<select 
									name="category"
									onChange={e => setCategory(e.target.value)}
									>
									<option value="">Select the category</option>
									<option value="Time">Time</option>
									<option value="Stuff">Stuff</option>
								</select>
							</div>	
						</div>
					</div>

					<div className="box">
						<div className="field">
							<label className="label" htmlFor="title">Lovepiece title: </label>
							<input
								className="input"
								placeholder="Write a few words as title"
								type="text"
								name="title"
								value={title}
								onChange={e => setTitle(e.target.value)}
							/>
						</div>

						<div className="field">
							<label className="label">Description</label>
							<div className="control">
								<textarea 
									className="textarea" 
									placeholder="Describe your lovepiece in more detail for other users"
									value={description}
									onChange={e => setDescription(e.target.value)}
								>
								</textarea>
							</div>
						</div>

						<div className="field">
							<label className="label" htmlFor="tags">Add tags so other users can easily find your lovepiece (tags are separated by comma):</label>
							<input
								className="input"
								placeholder="e.g. math, carpentry, weekend"
								type="text"
								name="tags"
								value={tags}
								onChange={e => setTags(e.target.value)}
							/>    
						</div>
					</div>



					<div className="field">
						{/* <div className="control">	 */}
						<div>	
							<button className="button is-primary" type="submit">Add this lovepiece</button>
						</div>
					</div>
				</div>




			</form>
    </div>
  )
}










{/* <div className="field is-grouped">	
	<label className="label" htmlFor="subCategory">Sub-category: </label>
	<div className="select">
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