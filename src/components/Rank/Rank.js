import React from "react";

const Rank = ({ user }) => {
	return (
		<div>
			<div className="white f4 f3-m f3-l ">
				<span className="color-violet b">{`${user.name}`}</span>
				, your current rank is
			</div>

			<div className="white f4 f3-m f3-l ">
				at number
				<span className="color-violet b"> {`${ user.entries }`} </span>
			</div>
		</div>
	)
}

export default Rank;