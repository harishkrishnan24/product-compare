import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./style.css";

import { selectProductsList } from "../../redux/selectors";
import { addSelectedProduct } from "../../redux/actions";

const ProductSelector = ({ productsList, addSelectedProduct }) => {
	const onProductSelection = (event) => {
		addSelectedProduct(event.target.value);
	};

	return (
		<div className='form-group'>
			<label htmlFor='list' className='font-weight-bold'>
				Add a product
			</label>
			<select
				className='form-control select-box'
				id='list'
				placeholder='Choose a product'
				value=''
				onChange={onProductSelection}>
				<option disabled value=''>
					Choose a product
				</option>
				{productsList.map((product) => (
					<option value={product.id} key={product.id}>
						{product.title}
					</option>
				))}
			</select>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	productsList: selectProductsList,
});

const mapDispatchToProps = (dispatch) => ({
	addSelectedProduct: (id) => dispatch(addSelectedProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelector);
