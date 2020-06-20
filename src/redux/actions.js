import ActionTypes from "./types";

export const fetchProductsStart = () => ({
	type: ActionTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (productData) => ({
	type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
	payload: productData,
});

export const fetchProductsFailure = (errorMessage) => ({
	type: ActionTypes.FETCH_PRODUCTS_FAILURE,
	payload: errorMessage,
});

export const fetchProductsAsync = () => {
	return async (dispatch) => {
		dispatch(fetchProductsStart());
		try {
			const response = await fetch(
				"https://www.mocky.io/v2/5e9ebdaa2d00007800cb7697"
			).then((res) => res.json());
			dispatch(
				fetchProductsSuccess({
					...response.products,
					productIdsToCompare: [
						Object.keys(response.products.compareSummary.titles)[0],
					],
				})
			);
		} catch (err) {
			dispatch(fetchProductsFailure("Something went wrong!"));
		}
	};
};

export const addSelectedProduct = (id) => ({
	type: ActionTypes.ADD_SELECTED_PRODUCT,
	payload: id,
});

export const removeSelectedProduct = (id) => ({
	type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	payload: id,
});

export const toggleShowDifferences = (value) => ({
	type: ActionTypes.TOGGLE_SHOW_DIFFERENCES,
	payload: value,
});
