import React from "react";

import "./style.css";

export const Image = ({ noImage, clickHandler, imageUrl, altName }) => {
	return (
		<>
			{!noImage ? (
				<div className='img-container'>
					<img className='image' src={imageUrl} alt={altName} />
					<div className='close-icon' onClick={clickHandler}>
						X
					</div>
				</div>
			) : (
				<div className='image img--empty'></div>
			)}
		</>
	);
};

Image.defaultProps = {
	noImage: true,
	clickHandler: () => {},
	imageUrl: "",
	altName: "",
};

export default Image;
