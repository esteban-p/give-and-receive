import { Link } from 'react-router-dom';


// here we destructure the fields from the props object
export default function LovepieceCard(props) {
	



	return (
		
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<figure className="image is-48x48">
							{props.owner.avatarUrl ? (
								<img className="is-rounded" src={props.owner.avatarUrl} alt="Opps" />
							) : (
								<>
								<figure class="image is-48x48">
									<img class="is-rounded" src="https://res.cloudinary.com/give-and-receive/image/upload/v1633515396/g-and-r/G_R-logo-transparent-500x500_afmgrh.png" />
								</figure>
								</>
							)}
						</figure>
					</div>
					<div className="media-content">
						<Link to={`/lovepieces/${props._id}`}>
							<h3>{props.title}</h3>
						</Link>
						<p className="subtitle is-6">{props.type} of {props.category} from {props.owner.username}</p>
					</div>
				</div>
			</div>
		</div>
		
	)
}



// "https://bulma.io/images/placeholders/96x96.png"


// --- Original card before styling with Bulma ---
// return (
// 	<div>
// 		<p>{props.type} from {props.owner.username}</p>
// 		<Link to={`/lovepieces/${props._id}`}>
// 			<h3>{props.title}</h3>
// 		</Link>
// 	</div>
// )
