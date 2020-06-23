import React from "react";

import "./style.css";

const FeatureTableHeader = ({ productsToCompare, title, isVisible }) => {
	return isVisible ? (
		<tr>
			<th className='feature-title border-right'>{title}</th>
			<th
				className={`feature-title ${
					productsToCompare.length >= 1 && "border-right"
				}`}></th>
			<th
				className={`feature-title ${
					productsToCompare.length >= 2 && "border-right"
				}`}></th>
			<th
				className={`feature-title ${
					productsToCompare.length >= 3 && "border-right"
				}`}></th>
			<th className='feature-title'></th>
		</tr>
	) : null;
};

FeatureTableHeader.defaultProps = {
	productsToCompare: [],
	title: "",
	isVisible: true,
};

export default FeatureTableHeader;
