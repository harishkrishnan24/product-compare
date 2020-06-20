import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./style.css";

import CheckBoxWithLabel from "../CheckBoxWithLabel";

import { toggleShowDifferences } from "../../redux/actions";
import {
	selectProductsCount,
	selectShowDifferences,
} from "../../redux/selectors";

const CompareFilter = ({
	selectedProductsCount,
	showDifferences,
	toggleShowDifferences,
}) => {
	return (
		<div className='compare-filter'>
			<div>
				<h2 className='my-2'>Compare</h2>
				<p className='my-2'>
					{selectedProductsCount > 1
						? `${selectedProductsCount} items`
						: "1 item"}{" "}
					selected
				</p>
			</div>
			<CheckBoxWithLabel
				onToggle={toggleShowDifferences}
				checked={showDifferences}
			/>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	selectedProductsCount: selectProductsCount,
	showDifferences: selectShowDifferences,
});

const mapDispatchToProps = (dispatch) => ({
	toggleShowDifferences: (val) => dispatch(toggleShowDifferences(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareFilter);
