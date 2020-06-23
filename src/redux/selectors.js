import { createSelector } from "reselect";

const selectProducts = (state) => state;

export const selectIsProductsFetching = createSelector(
	[selectProducts],
	(products) => products.isFetching
);

export const selectProductsToCompare = createSelector(
	[selectProducts],
	(products) => {
		const data = products.productIdsToCompare.map((id) => ({
			id,
			title: products.compareSummary.titles[id].title,
			finalPrice: products.compareSummary.productPricingSummary[id].finalPrice,
			price: products.compareSummary.productPricingSummary[id].price,
			totalDiscount:
				products.compareSummary.productPricingSummary[id].totalDiscount,
			image: products.compareSummary.images[id],
		}));

		return data;
	}
);

export const selectProductsList = createSelector(
	[selectProducts],
	(products) => {
		const titlesObj = products.compareSummary.titles;
		return Object.keys(titlesObj)
			.filter((id) => {
				if (products.productIdsToCompare.includes(id)) {
					return false;
				}
				return true;
			})
			.map((id) => {
				return { id, title: titlesObj[id].title };
			});
	}
);

export const selectFeaturesList = createSelector(
	[selectProducts],
	(products) => {
		if (products.showDifferences && products.productIdsToCompare.length > 1) {
			return products.featuresList.map((f) => {
				const features = f.features.filter((list) => {
					return !products.productIdsToCompare.every(
						(feat) =>
							list.values[feat] === list.values[products.productIdsToCompare[0]]
					);
				});
				return {
					...f,
					features,
				};
			});
		}
		return products.featuresList;
	}
);

export const selectShowDifferences = createSelector(
	[selectProducts],
	(products) => products.showDifferences
);

export const selectProductsCount = createSelector(
	[selectProducts],
	(products) => {
		return products.productIdsToCompare.length;
	}
);
