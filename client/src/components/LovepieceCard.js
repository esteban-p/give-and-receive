import { Link } from 'react-router-dom';

// here we destructure the fields from the props object
export default function LovepieceCard(props) {
	



	return (
		<div>
			<Link to={`/lovepieces/${props._id}`}>
				<h3>{props.title}</h3>
			</Link>
      <p>{props.type} from {props.owner.username}</p>
		</div>
	)
}


