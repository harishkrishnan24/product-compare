import ActionTypes from "./types";

const initialState = {
	featuresList: [],
	compareSummary: {
		images: null,
		titles: null,
		productPricingSummary: null,
	},
	isFetching: true,
	errorMessage: null,
	productIdsToCompare: [],
	showDifferences: false,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.FETCH_PRODUCTS_START:
			return {
				...state,
				isFetching: true,
			};
		case ActionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				...action.payload,
				isFetching: false,
			};
		case ActionTypes.FETCH_PRODUCTS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		case ActionTypes.ADD_SELECTED_PRODUCT:
			return {
				...state,
				productIdsToCompare: [...state.productIdsToCompare, action.payload],
			};
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {
				...state,
				productIdsToCompare: state.productIdsToCompare.filter(
					(id) => id !== action.payload
				),
			};
		case ActionTypes.TOGGLE_SHOW_DIFFERENCES:
			return {
				...state,
				showDifferences: action.payload,
			};
		default:
			return state;
	}
}

export default rootReducer;
