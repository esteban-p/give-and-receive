import { Link } from 'react-router-dom';

// here we destructure the fields from the props object
export default function LovepieceCard(
  { _id, owner, title, type, dateCreated, stillValid, description, coords, category, subCategory, tags }
  ) {
	// console.log(title);


	return (
		<div>
			<Link to={`/lovepieces/${_id}`}>
				<h3>{title}</h3>
			</Link>
			<p>{description}</p>
      <p>{owner}</p>
		</div>
	)
}



