import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className="tc">
			<p className="tc ph5 f5 f4-m f3-l">
				{"This magic brain will detect faces in your pictures. Give it a try"}
			</p>
			<div className="center">
				<div className="form center ph3 ph4-m pv4 pa4-l br3 shadow-5 mt4 w-90 w-80-m w-60-l">
					<input className="f4 pa2 w-70 center br3 br--left" type="text" onChange={onInputChange} />
					<button 
						className="w-30 grow f4 link ph3 pv2 dib bg-white color-violet b br3 br--right"
						onClick={onButtonSubmit}
						>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;