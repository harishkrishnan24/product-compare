import React from "react";

const CheckBoxWithLabel = ({ onToggle, checked }) => {
	return (
		<div className='form-group form-check'>
			<input
				type='checkbox'
				className='form-check-input'
				id='showDifference'
				onClick={(e) => onToggle(e.target.checked)}
				value={checked}
			/>
			<label className='form-check-label' htmlFor='showDifference'>
				Show only differences
			</label>
		</div>
	);
};

CheckBoxWithLabel.defaultProps = {
	onToggle: () => {},
	checked: false,
};

export default CheckBoxWithLabel;
