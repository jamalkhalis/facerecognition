import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ showImage, box }) => {
	return (
		<div className="relative mb4">
			<div className="bg-linear-gradient"></div>
			<div className="center pb2 pt4 ">
				<div className="relative ">
					<img 
						id='imageInput'
						alt='' 
						src={showImage} 
						width="500px" 
						height="auto" 
						className="img-face-recognition"
					/>

					<div 
						className='bounding-box '
						style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
					>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FaceRecognition;