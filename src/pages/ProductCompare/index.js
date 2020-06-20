import React, { useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./style.css";

import Loader from "../../components/Loader";
import CompareFilter from "../../components/CompareFilter";
import ProductListRow from "../../components/ProductListRow";
import FeatureListRow from "../../components/FeatureListRow";

import { fetchProductsAsync } from "../../redux/actions";
import { selectIsProductsFetching } from "../../redux/selectors";

const ProductCompare = ({ fetchProductsAsync, isLoading }) => {
	const fetchProductsData = async () => {
		fetchProductsAsync();
	};

	useEffect(() => {
		fetchProductsData();
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<table className='table table-fixed' height='100%'>
			<colgroup>
				<col width='24%'></col>
				<col width='19%'></col>
				<col width='19%'></col>
				<col width='19%'></col>
				<col width='19%'></col>
			</colgroup>
			<tbody>
				<tr>
					<td>
						<CompareFilter />
					</td>
					<ProductListRow />
				</tr>
				<FeatureListRow />
			</tbody>
		</table>
	);
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsProductsFetching,
});

const mapDispatchToProps = (dispatch) => ({
	fetchProductsAsync: () => dispatch(fetchProductsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCompare);
