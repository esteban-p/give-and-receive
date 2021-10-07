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
    axios.get(`/api/lovepieces/${lovepieceId}`)
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

    axios.delete(`/api/lovepieces/${lovepieceId}`)
			.then(() => {
				props.history.push('/lovepieces');
			})
			.catch(err => console.log(err));
	}

  const handleStillValidChange = event => {
    setStillValid(!stillValid)
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
	
    axios.put(`/api/lovepieces/${lovepieceId}`, requestBody)
			.then(response => {
				props.history.push(`/lovepieces/${lovepieceId}`);
			})
			.catch(err => console.log(err))
	}





  return (
    <div>


      <div className="box">

        <h3 className="title is-4">Edit your lovepiece</h3>
        {/* <h4>(coords: {coords})</h4> */}
        <h4 className="subtitle is-6">Created on {formattedDateCreated}</h4>
        <h4><strong>Type: </strong>{type}</h4>
        <h4><strong>Category: </strong>{category}</h4>
        <br />

        <form onSubmit={handleSubmit}>

          <div className="box">

            <div className="field">
              <label class="checkbox">Still active? </label>
              <input 
                className="ml-2"
                type="checkbox" 
                name="stillValid"
                checked={stillValid}
                onChange={handleStillValidChange}
              />
            </div>
              
            <div className="field">
							<label className="label" htmlFor="title">Lovepiece title: </label>
							<input
								className="input"
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
									value={description}
									onChange={e => setDescription(e.target.value)}
								>
								</textarea>
							</div>
						</div>

            <div className="field">
              <label className="label" htmlFor="tags">Tags: </label>
              <input
                className="input"
                type="text"
                name="tags"
                value={tags}
                onChange={e => setTags(e.target.value)}
              />   
            </div>

            <br />
            <button
              className="button is-primary"
              type="submit"
            >
            Update this lovepiece
            </button>

          </div>


          
          <br />
        
        </form>

       
          <button 
            className="button is-danger ml-5"
            onClick={deleteLovepiece}
          >
          Delete this lovepiece
          </button>
          <br /><br />

      </div>

    </div>
  )
}
