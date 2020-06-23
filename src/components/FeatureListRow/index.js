import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./style.css";

import FeatureTableHeader from "../FeatureTableHeader";

import {
	selectFeaturesList,
	selectProductsToCompare,
	selectShowDifferences,
} from "../../redux/selectors";

const FeatureListRow = ({
	featuresList,
	selectedProductDetails,
	showDifferences,
}) => {
	const anchorProductId =
		(selectedProductDetails.length && selectedProductDetails[0].id) || null;
	return (
		<>
			{featuresList.map((feature) => (
				<React.Fragment key={feature.title}>
					<FeatureTableHeader
						productsToCompare={selectedProductDetails}
						title={feature.title}
						isVisible={!!feature.features.length}
					/>
					{feature.features.map((f) => (
						<tr key={f.featureName}>
							<td className='feature-description font-weight-bold border-right'>
								{f.featureName}
							</td>
							{selectedProductDetails.map((product) => (
								<td
									key={product.id}
									className='feature-description border-right'>
									{f.values[product.id] || "-"}
								</td>
							))}
						</tr>
					))}
				</React.Fragment>
			))}
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	featuresList: selectFeaturesList,
	selectedProductDetails: selectProductsToCompare,
	showDifferences: selectShowDifferences,
});

export default connect(mapStateToProps)(FeatureListRow);
