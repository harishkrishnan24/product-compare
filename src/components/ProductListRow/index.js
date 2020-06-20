import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./style.css";

import Product from "../Product";

import { removeSelectedProduct } from "../../redux/actions";
import { selectProductsToCompare } from "../../redux/selectors";

const ProductListRow = ({ selectedProductDetails, removeSelectedProduct }) => {
	const onRemoveProduct = (id) => {
		removeSelectedProduct(id);
	};

	return (
		<>
			{selectedProductDetails.map((product) => (
				<td key={product.id}>
					<Product
						product={product}
						key={product.id}
						clickHandler={() => onRemoveProduct(product.id)}
					/>
				</td>
			))}
			{selectedProductDetails.length < 4 && (
				<td>
					<Product newProduct />
				</td>
			)}
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	selectedProductDetails: selectProductsToCompare,
});

const mapDispatchToProps = (dispatch) => ({
	removeSelectedProduct: (id) => dispatch(removeSelectedProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListRow);
