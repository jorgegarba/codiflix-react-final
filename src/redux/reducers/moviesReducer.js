import {
	FINISH_LOADING_ACTION,
	FINISH_LOADING_COMEDY,
	FINISH_LOADING_DRAMA,
	FINISH_LOADING_HORROR,
	SET_ACTION,
	SET_COMEDY,
	SET_DRAMA,
	SET_HORROR,
	START_LOADING_ACTION,
	START_LOADING_COMEDY,
	START_LOADING_DRAMA,
	START_LOADING_HORROR
} from '../types';

const initialState = {
	action: {
		loading: false,
		data: []
	},
	comedy: {
		loading: false,
		data: []
	},
	drama: {
		loading: false,
		data: []
	},
	horror: {
		loading: false,
		data: []
	},
	popular: {
		loading: false,
		data: []
	}
};
export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_LOADING_ACTION:
			return {
				...state,
				action: {
					...state.action,
					loading: true
				}
			};

		case FINISH_LOADING_ACTION:
			return {
				...state,
				action: {
					...state.action,
					loading: false
				}
			};

		case SET_ACTION:
			return {
				...state,
				action: {
					...state.action,
					data: action.payload
				}
			};

		case START_LOADING_COMEDY:
			return {
				...state,
				comedy: {
					...state.comedy,
					loading: true
				}
			};

		case FINISH_LOADING_COMEDY:
			return {
				...state,
				comedy: {
					...state.comedy,
					loading: false
				}
			};

		case SET_COMEDY:
			return {
				...state,
				comedy: {
					...state.comedy,
					data: action.payload
				}
			};

		case START_LOADING_DRAMA:
			return {
				...state,
				drama: {
					...state.drama,
					loading: true
				}
			};

		case FINISH_LOADING_DRAMA:
			return {
				...state,
				drama: {
					...state.drama,
					loading: false
				}
			};

		case SET_DRAMA:
			return {
				...state,
				drama: {
					...state.drama,
					data: action.payload
				}
			};

		case START_LOADING_HORROR:
			return {
				...state,
				horror: {
					...state.horror,
					loading: true
				}
			};

		case FINISH_LOADING_HORROR:
			return {
				...state,
				horror: {
					...state.horror,
					loading: false
				}
			};

		case SET_HORROR:
			return {
				...state,
				horror: {
					...state.horror,
					data: action.payload
				}
			};

		default:
			return state;
	}
};
