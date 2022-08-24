import React from "react";
import Tilt from 'react-tilt';
import "./Logo.css";
import face from "./face.png"

const Logo = () => {
	return (
		<div className="ma4 mt0"> 
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
				<div className="Tilt-inner">
					<img style={{paddingTop: "16px", maxWidth: "100%", height: "auto"}} alt="face" src={face}/> 
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;