import PropTypes from "prop-types";
import { getImageUrl } from "./utils";

const ScientistProfile = ({
	name,
	imageSrc,
	profession,
	numAwards,
	awards,
	discovery,
}) => {
	return (
		<>
			<h2>{name}</h2>
			<img
				className="avatar"
				src={getImageUrl(imageSrc)}
				alt={name}
				width={70}
				height={70}
			/>
			<ul>
				<li>
					<b>Profession: </b>
					{profession}
				</li>
				<li>
					<b>Awards: {numAwards} </b>({awards})
				</li>
				<li>
					<b>Discovered: </b>
					{discovery}
				</li>
			</ul>
		</>
	);
};

// define propTypes
ScientistProfile.propTypes = {
	name: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	profession: PropTypes.string.isRequired,
	numAwards: PropTypes.number.isRequired,
	awards: PropTypes.string.isRequired,
	discovery: PropTypes.string.isRequired,
};

export default ScientistProfile;
