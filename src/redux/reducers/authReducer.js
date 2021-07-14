import {
	CLOSE_SESSION,
	FINISH_LOADING_LOGIN,
	SET_SUCCESS_LOGIN,
	START_LOADING_LOGIN
} from '../types';

const initialState = {
	usuId: null,
	usuNom: null,
	usuTipo: null,
	token: null,
	autenticado: false,
	cargando: false
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_LOADING_LOGIN:
			return {
				...state,
				cargando: true
			};
		case SET_SUCCESS_LOGIN:
			return {
				...state,
				...action.payload
			};
		case FINISH_LOADING_LOGIN:
			return {
				...state,
				cargando: false
			};
		case CLOSE_SESSION:
			return {
				...initialState
			};
		default:
			return state;
	}
};
