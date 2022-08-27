import React from "react";
import Tilt from 'react-tilt';
import "./Logo.css";
import face from "./face.png"

const Logo = () => {
	return (
		<div className="ma4 mt0"> 
			<div style={{"display": "flex", "justifyContent": "flex-start", "align-items": "center" }} >

				<Tilt className="Tilt br2 shadow-2 logo-mobile" options={{ max : 25 }} style={{ height: 80, width: 80 }} >
					<div className="Tilt-inner">
						<img style={{paddingTop: "8px", maxWidth: "100%", height: "auto"}} alt="face" src={face}/> 
					</div>
				</Tilt>
			

				<div className="pl3 b fw9">
					<h1 className="color-violet logo-title"> Face Detection </h1>
				</div>

			</div>

		</div>
	);
}

export default Logo;